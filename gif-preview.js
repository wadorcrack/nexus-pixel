// Vista previa GIF para Biblioteca Gráfica. Solo representa el movimiento:
// los fotogramas originales se conservan como PNG RGBA sin pérdida.
const NexusPixelGifPreview=(()=>{
"use strict";
function lzw(indices){
 const clear=256,end=257,out=[];let dict=new Map(),next=258,bitSize=9,bitBuffer=0,bitCount=0;
 function write(code){bitBuffer|=code<<bitCount;bitCount+=bitSize;
  while(bitCount>=8){out.push(bitBuffer&255);bitBuffer>>>=8;bitCount-=8}}
 function reset(){dict=new Map();next=258;bitSize=9}
 write(clear);let prefix=indices[0];
 for(let i=1;i<indices.length;i++){
  const n=indices[i],key=prefix*256+n,found=dict.get(key);
  if(found!==undefined){prefix=found;continue}
  write(prefix);
  if(next<4096){dict.set(key,next++);if(next>(1<<bitSize)&&bitSize<12)bitSize++}
  else{write(clear);reset()}
  prefix=n;
 }
 write(prefix);write(end);if(bitCount)out.push(bitBuffer&255);
 return out;
}
function encode(frames,width,height){
 if(!Array.isArray(frames)||frames.length<2||frames.length>300
    ||!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1
    ||width>2000||height>2000)throw Error("Animación no válida para vista previa");
 const scale=Math.min(1,112/Math.max(width,height));
 const w=Math.max(1,Math.round(width*scale)),h=Math.max(1,Math.round(height*scale));
 const bytes=[],u8=n=>bytes.push(n&255),u16=n=>{u8(n);u8(n>>8)};
 const str=s=>{for(const c of s)u8(c.charCodeAt(0))};
 str("GIF89a");u16(w);u16(h);u8(0xf7);u8(0);u8(0);
 // Color índice 0 = transparencia; 1..255 = paleta RGB 3-3-2.
 u8(0);u8(0);u8(0);
 for(let i=1;i<256;i++){
  const n=i-1;
  u8(Math.round(((n>>5)&7)*255/7));
  u8(Math.round(((n>>2)&7)*255/7));
  u8(Math.round((n&3)*255/3));
 }
 u8(0x21);u8(0xff);u8(11);str("NETSCAPE2.0");u8(3);u8(1);u16(0);u8(0);
 for(const frame of frames){
  if(!(frame.rgba instanceof Uint8ClampedArray)||frame.rgba.length!==width*height*4
      ||!Number.isInteger(frame.duration)||frame.duration<20||frame.duration>5000)
   throw Error("Fotograma de vista previa no válido");
  const data=frame.rgba,indices=new Uint8Array(w*h);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
   const sx=Math.min(width-1,Math.floor((x+.5)*width/w));
   const sy=Math.min(height-1,Math.floor((y+.5)*height/h));
   const index=(sy*width+sx)*4,dest=y*w+x;
   if(data[index+3]<128){indices[dest]=0;continue}
   const r=Math.round(data[index]*7/255);
   const g=Math.round(data[index+1]*7/255);
   const b=Math.round(data[index+2]*3/255);
   indices[dest]=1+Math.min(254,(r<<5)|(g<<2)|b);
  }
  // Restaurar el área anterior antes del siguiente fotograma.
  u8(0x21);u8(0xf9);u8(4);u8(0x09);
  u16(Math.max(2,Math.round(frame.duration/10)));u8(0);u8(0);
  u8(0x2c);u16(0);u16(0);u16(w);u16(h);u8(0);u8(8);
  const compressed=lzw(indices);
  for(let p=0;p<compressed.length;p+=255){
   const len=Math.min(255,compressed.length-p);u8(len);
   for(let j=0;j<len;j++)u8(compressed[p+j]);
  }
  u8(0);
 }
 u8(0x3b);
 return new Blob([new Uint8Array(bytes)],{type:"image/gif"});
}
return {encode};
})();
window.NexusPixelGifPreview=NexusPixelGifPreview;
