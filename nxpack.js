// NXPACK v1: ZIP sin dependencias, PNG sin modificar y manifiesto JSON.
// Se crean ZIPs STORE (sin recomprimir PNG); se aceptan STORE y DEFLATE en importación.
const NexusPixelPack=(()=>{
"use strict";
const encoder=new TextEncoder(), decoder=new TextDecoder("utf-8",{fatal:true});
const MAX_ZIP=96*1024*1024, MAX_ENTRY=16*1024*1024, MAX_TOTAL=96*1024*1024;
const MAX_ENTRIES=9000;
const crcTable=new Uint32Array(256);
for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;crcTable[n]=c>>>0;}
function crc32(data){
 let c=0xffffffff;
 for(let i=0;i<data.length;i++)c=crcTable[(c^data[i])&255]^(c>>>8);
 return (c^0xffffffff)>>>0;
}
function u16(d,o){return d.getUint16(o,true)}
function u32(d,o){return d.getUint32(o,true)}
function put16(d,o,v){d.setUint16(o,v,true)}
function put32(d,o,v){d.setUint32(o,v>>>0,true)}
function combine(chunks){
 const size=chunks.reduce((s,a)=>s+a.length,0);
 if(size>MAX_ZIP)throw Error("El paquete supera el límite de 96 MB");
 const out=new Uint8Array(size);let pos=0;
 for(const chunk of chunks){out.set(chunk,pos);pos+=chunk.length}
 return out;
}
function validPath(path){
 return path==="library.json"||(/^images\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*\.png$/.test(path));
}
function encode(entries){
 if(!Array.isArray(entries)||!entries.length||entries.length>MAX_ENTRIES)throw Error("Número de archivos fuera del límite");
 let offset=0,total=0;
 const local=[],central=[],seen=new Set();
 for(const entry of entries){
  const path=entry.path, data=entry.data;
  if(typeof path!=="string"||!validPath(path)||seen.has(path)||!(data instanceof Uint8Array))throw Error("Entrada ZIP inválida");
  if(data.length>MAX_ENTRY)throw Error("Archivo demasiado grande: "+path);
  seen.add(path);total+=data.length;if(total>MAX_TOTAL)throw Error("Contenido demasiado grande");
  const name=encoder.encode(path);
  const crc=crc32(data);
  const lh=new Uint8Array(30+name.length),l=new DataView(lh.buffer);
  put32(l,0,0x04034b50);put16(l,4,20);put16(l,6,0x0800);
  put16(l,8,0);put32(l,14,crc);put32(l,18,data.length);
  put32(l,22,data.length);put16(l,26,name.length);lh.set(name,30);
  const ch=new Uint8Array(46+name.length),c=new DataView(ch.buffer);
  put32(c,0,0x02014b50);put16(c,4,20);put16(c,6,20);put16(c,8,0x0800);
  put16(c,10,0);put32(c,16,crc);put32(c,20,data.length);
  put32(c,24,data.length);put16(c,28,name.length);put32(c,42,offset);
  ch.set(name,46);central.push(ch);local.push(lh,data);
  offset+=lh.length+data.length;
 }
 const cdSize=central.reduce((n,b)=>n+b.length,0);
 const eocd=new Uint8Array(22),v=new DataView(eocd.buffer);
 put32(v,0,0x06054b50);put16(v,8,entries.length);put16(v,10,entries.length);
 put32(v,12,cdSize);put32(v,16,offset);
 return combine([...local,...central,eocd]);
}
async function decode(data){
 if(!(data instanceof Uint8Array)||data.length>MAX_ZIP||data.length<22)throw Error("ZIP inválido o demasiado grande");
 const d=new DataView(data.buffer,data.byteOffset,data.byteLength);
 let eocd=-1;const min=Math.max(0,data.length-65557);
 for(let i=data.length-22;i>=min;i--)if(u32(d,i)===0x06054b50&&i+22+u16(d,i+20)===data.length){eocd=i;break}
 if(eocd<0||u16(d,eocd+4)!==0||u16(d,eocd+6)!==0)throw Error("El ZIP no tiene un índice válido");
 const count=u16(d,eocd+10),dirSize=u32(d,eocd+12),dirOffset=u32(d,eocd+16);
 if(count!==u16(d,eocd+8)||count>MAX_ENTRIES||dirOffset+dirSize>eocd)throw Error("Índice ZIP no válido");
 const files=new Map();let pos=dirOffset,total=0;
 for(let i=0;i<count;i++){
  if(pos+46>eocd||u32(d,pos)!==0x02014b50)throw Error("Índice ZIP dañado");
  const flags=u16(d,pos+8),method=u16(d,pos+10),crc=u32(d,pos+16);
  const compressed=u32(d,pos+20),size=u32(d,pos+24),nlen=u16(d,pos+28);
  const ext=u16(d,pos+30),comment=u16(d,pos+32),offset=u32(d,pos+42);
  if(flags&1||![0,8].includes(method)||size>MAX_ENTRY||compressed>MAX_ENTRY)throw Error("Compresión ZIP no admitida");
  if(pos+46+nlen+ext+comment>eocd)throw Error("Nombre ZIP truncado");
  const path=decoder.decode(data.subarray(pos+46,pos+46+nlen));pos+=46+nlen+ext+comment;
  if(!validPath(path)||files.has(path))throw Error("Archivo inesperado o repetido dentro del ZIP");
  total+=size;if(total>MAX_TOTAL)throw Error("El ZIP expandido es demasiado grande");
  if(offset+30>dirOffset||u32(d,offset)!==0x04034b50)throw Error("Entrada ZIP inválida");
  const localName=u16(d,offset+26),localExtra=u16(d,offset+28),begin=offset+30+localName+localExtra;
  if(begin+compressed>dirOffset)throw Error("Datos ZIP fuera de rango");
  let content=data.subarray(begin,begin+compressed);
  if(method===8){
   if(typeof DecompressionStream!=="function")throw Error("Este navegador no admite ZIP DEFLATE");
   try{
    const stream=new Blob([content]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    const reader=stream.getReader(),chunks=[];let read=0;
    while(true){
     const part=await reader.read();if(part.done)break;
     read+=part.value.length;if(read>size||read>MAX_ENTRY){await reader.cancel();throw Error("Archivo ZIP expandido supera el límite")}
     chunks.push(part.value);
    }
    content=new Uint8Array(read);let at=0;for(const chunk of chunks){content.set(chunk,at);at+=chunk.length}
   }catch(err){throw Error("No se pudo descomprimir "+path+": "+err.message)}
  }
  if(content.length!==size||crc32(content)!==crc)throw Error("ZIP corrupto (tamaño o CRC): "+path);
  files.set(path,content);
 }
 if(pos!==dirOffset+dirSize)throw Error("Índice ZIP incompleto");
 if(!files.has("library.json"))throw Error("Falta library.json");
 return files;
}
return {encode,decode,crc32,validPath,MAX_ZIP};
})();

window.NexusPixelPack=NexusPixelPack;
