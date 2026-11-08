// Nexus Pixel — Biblioteca gráfica de imágenes planas y animaciones.
// Los recursos anteriores (v1) se muestran como imágenes; nuevos .nxpack v2
// guardan cada fotograma PNG y las instrucciones para una fila de animación.
(()=>{
"use strict";
const $=id=>document.getElementById(id);
const ui=$("graphicLibraryDialog"),open=$("openGraphics");
if(!ui||!open||!window.NexusPixelGraphicEditor||!window.NexusPixelPack)return;
const bridge=window.NexusPixelGraphicEditor,pack=window.NexusPixelPack,gif=window.NexusPixelGifPreview;
if(!gif)throw Error("Falta el generador GIF");
const DB_NAME="nexus-pixel-graphics-v1",STORE="pieces",MAX_PIECES=256;
const MAX_FRAMES=300,MAX_TOTAL_FRAMES=1200,MAX_RGBA=128*1024*1024;
const MAX_IMAGE=16*1024*1024,MAX_DIM=2000,MAX_IMPORT=96*1024*1024;
const enc=new TextEncoder(),dec=new TextDecoder("utf-8",{fatal:true});
let all=[],urls=[],busy=false,dbPromise=null;
function id(){return "g-"+(typeof crypto!=="undefined"&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,""):Date.now().toString(36)+Math.random().toString(36).slice(2))}
function displayName(v,limit=64){return typeof v==="string"?v.trim().slice(0,limit):""}
function status(t,isError=false){
 const el=$("graphicLibraryStatus");el.textContent=t||"";el.classList.toggle("graphic-error",isError);
}
function fail(err){status(err&&err.message?err.message:String(err),true)}
function framesOf(item){
 if(Array.isArray(item.frames)&&item.frames.length)return item.frames;
 // Entrada legacy v1: la imagen compuesta ya estaba guardada como vista previa.
 return [{png:item.preview,duration:150}];
}
function countFrames(items){return items.reduce((n,item)=>n+framesOf(item).length,0)}
function rawBytes(items){return items.reduce((n,item)=>n+item.width*item.height*4*framesOf(item).length,0)}
function requireDB(){
 if(!dbPromise){
  dbPromise=new Promise((resolve,reject)=>{
   if(!window.indexedDB){reject(Error("IndexedDB no está disponible en este navegador"));return}
   const r=indexedDB.open(DB_NAME,1);
   r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE,{keyPath:"id"})};
   r.onsuccess=()=>resolve(r.result);
   r.onerror=()=>reject(r.error||Error("No se pudo abrir la biblioteca"));
  });
 }
 return dbPromise;
}
async function readAll(){
 const db=await requireDB();
 return new Promise((resolve,reject)=>{
  const r=db.transaction(STORE,"readonly").objectStore(STORE).getAll();
  r.onsuccess=()=>resolve(r.result||[]);
  r.onerror=()=>reject(r.error||Error("Error al leer la biblioteca"));
 });
}
async function writeItems(items){
 const db=await requireDB();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(STORE,"readwrite"),store=tx.objectStore(STORE);
  for(const item of items)store.put(item);
  tx.oncomplete=()=>resolve();
  tx.onabort=()=>reject(tx.error||Error("No se guardaron las piezas; revisa el espacio disponible"));
 });
}
async function removeItem(key){
 const db=await requireDB();
 return new Promise((resolve,reject)=>{
  const tx=db.transaction(STORE,"readwrite");
  tx.objectStore(STORE).delete(key);
  tx.oncomplete=()=>resolve();
  tx.onabort=()=>reject(tx.error||Error("No se pudo eliminar la pieza"));
 });
}
function node(tag,className,text){
 const el=document.createElement(tag);
 if(className)el.className=className;
 if(text!==undefined)el.textContent=text;
 return el;
}
function button(label,callback,classes=""){
 const b=node("button",classes,label);
 b.type="button";b.addEventListener("click",callback);return b;
}
function refreshCategories(){
 const selector=$("graphicCategoryFilter"),previous=selector.value;
 selector.replaceChildren(new Option("Todas las categorías",""));
 for(const category of [...new Set(all.map(item=>item.category))].sort((a,b)=>a.localeCompare(b,"es")))selector.add(new Option(category,category));
 selector.value=[...selector.options].some(o=>o.value===previous)?previous:"";
}
function resetURLs(){for(const url of urls)URL.revokeObjectURL(url);urls=[]}
function gallery(){
 resetURLs();
 const holder=$("graphicCards");holder.replaceChildren();
 const search=$("graphicSearch").value.trim().toLocaleLowerCase();
 const category=$("graphicCategoryFilter").value;
 const visible=all.filter(item=>(!category||item.category===category)
    &&(!search||(item.name+" "+item.category).toLocaleLowerCase().includes(search)));
 $("graphicCount").textContent=all.length+" piezas";
 if(!visible.length){holder.append(node("p","graphic-empty",all.length?"Sin resultados":"Todavía no hay piezas guardadas"));return}
 for(const item of visible){
  const frames=framesOf(item),animated=frames.length>1;
  const card=node("article","graphic-card");
  const figure=node("div","graphic-card-image");
  const img=document.createElement("img");
  const reducedMotion=typeof window.matchMedia==="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedPreview=animated&&!reducedMotion&&item.animatedPreview instanceof Blob;
  const url=URL.createObjectURL(animatedPreview?item.animatedPreview:item.preview);urls.push(url);
  img.src=url;img.alt=(animatedPreview?"Vista previa GIF: ":"Vista previa: ")+item.name;
  img.loading="lazy";img.decoding="async";
  figure.append(img);
  if(animated)figure.append(node("span","graphic-animation-mark","GIF · "+frames.length));
  card.append(figure);
  const label=node("div","graphic-card-label");
  const strong=node("strong","",item.name);
  const info=animated?frames.length+" fotogramas":"Imagen";
  const small=node("small","",item.category+" · "+item.width+"×"+item.height+" · "+info);
  label.append(strong,small);card.append(label);
  const tools=node("div","graphic-card-actions");
  if(animated)tools.append(button("A línea de tiempo",()=>placeAnimation(item),"graphic-insert"));
  else tools.append(button("Colocar",()=>placeImage(item),"graphic-insert"));
  tools.append(button("Eliminar",()=>erase(item),"graphic-remove"));
  card.append(tools);holder.append(card);
 }
}
async function reload(){
 all=(await readAll()).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
 refreshCategories();gallery();
}
function checkImageDimensions(w,h){
 if(!Number.isInteger(w)||!Number.isInteger(h)||w<1||h<1||w>MAX_DIM||h>MAX_DIM)
  throw Error("Dimensiones fuera de límite (1–2000 px)");
}
async function toPNG(rgba,w,h){
 checkImageDimensions(w,h);
 if(!rgba||rgba.length!==w*h*4)throw Error("Datos RGBA no válidos");
 const c=document.createElement("canvas");c.width=w;c.height=h;
 c.getContext("2d").putImageData(new ImageData(rgba,w,h),0,0);
 const blob=await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error("No se pudo crear el PNG")),"image/png"));
 if(blob.size>MAX_IMAGE)throw Error("La imagen supera los 16 MB");
 return blob;
}
function validateDuration(value){
 if(!Number.isInteger(value)||value<20||value>5000)throw Error("Duración de fotograma inválida (20–5000 ms)");
 return value;
}
async function captured(){
 const data=bridge.capture();
 checkImageDimensions(data.width,data.height);
 if(!Array.isArray(data.frames)||data.frames.length<1||data.frames.length>MAX_FRAMES)
  throw Error("La animación supera el máximo de 300 fotogramas");
 if(all.length>=MAX_PIECES)throw Error("Máximo 256 piezas; exporta una biblioteca y libera espacio");
 if(countFrames(all)+data.frames.length>MAX_TOTAL_FRAMES
    ||rawBytes(all)+data.width*data.height*4*data.frames.length>MAX_RGBA)
  throw Error("Biblioteca llena (máximo 1200 fotogramas y 128 MB de píxeles)");
 const frames=[];
 for(const frame of data.frames){
  const duration=validateDuration(frame.duration);
  frames.push({png:await toPNG(frame.rgba,data.width,data.height),duration});
 }
 const animatedPreview=frames.length>1?gif.encode(data.frames,data.width,data.height):null;
 return {id:id(),name:displayName($("graphicName").value)||"Pieza "+(all.length+1),
  category:displayName($("graphicCategory").value,32)||"General",
  type:frames.length>1?"animation":"image",
  width:data.width,height:data.height,
  preview:frames[0].png,animatedPreview,frames,
  rowName:displayName(data.animationName,40)||"Animación",
  createdAt:Date.now()};
}
async function saveCurrent(){
 if(busy)return;
 busy=true;$("graphicCapture").disabled=true;status("Guardando dibujo...");
 try{
  const item=await captured();
  await writeItems([item]);await reload();
  $("graphicName").value="";
  status(item.frames.length>1
   ?"Guardada animación: "+item.name+" · "+item.frames.length+" fotogramas"
   :"Guardada imagen: "+item.name);
 }catch(e){fail(e)}
 finally{busy=false;$("graphicCapture").disabled=false}
}
function pngDimensions(bytes){
 if(!(bytes instanceof Uint8Array)||bytes.length<24||bytes.length>MAX_IMAGE)
  throw Error("Archivo PNG inválido");
 const sig=[137,80,78,71,13,10,26,10];
 if(!sig.every((b,i)=>bytes[i]===b)||bytes[12]!==73||bytes[13]!==72||bytes[14]!==68||bytes[15]!==82)
  throw Error("PNG sin cabecera IHDR válida");
 const v=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
 const w=v.getUint32(16),h=v.getUint32(20);
 checkImageDimensions(w,h);return {w,h};
}
function gifDimensions(bytes){
 if(!(bytes instanceof Uint8Array)||bytes.length<20||bytes.length>MAX_IMAGE)
  throw Error("Vista previa GIF inválida");
 const header=String.fromCharCode(...bytes.subarray(0,6));
 if(header!=="GIF89a"&&header!=="GIF87a")throw Error("Cabecera GIF inválida");
 const w=bytes[6]|(bytes[7]<<8),h=bytes[8]|(bytes[9]<<8);
 checkImageDimensions(w,h);
 if(bytes[bytes.length-1]!==0x3b)throw Error("GIF incompleto");
 return {w,h};
}
async function gifFor(item){
 if(item.animatedPreview instanceof Blob)return item.animatedPreview;
 const frames=framesOf(item);
 if(frames.length<2)return null;
 const decoded=[];
 for(const frame of frames)
  decoded.push({rgba:await fromPNG(frame.png,item.width,item.height),duration:validateDuration(frame.duration)});
 return gif.encode(decoded,item.width,item.height);
}
async function fromPNG(blob,width,height){
 const bitmap=await createImageBitmap(blob);
 try{
  if(bitmap.width!==width||bitmap.height!==height)
   throw Error("El PNG no coincide con las dimensiones registradas");
  const c=document.createElement("canvas");c.width=width;c.height=height;
  const ctx=c.getContext("2d",{willReadFrequently:true});ctx.imageSmoothingEnabled=false;
  ctx.drawImage(bitmap,0,0);
  return ctx.getImageData(0,0,width,height).data;
 }finally{bitmap.close()}
}
async function placeImage(item){
 try{
  status("");
  const rgba=await fromPNG(framesOf(item)[0].png,item.width,item.height);
  bridge.place(rgba,item.width,item.height);
  ui.close();
 }catch(e){fail(e)}
}
async function placeAnimation(item){
 if(busy)return;
 busy=true;status("Preparando animación...");
 try{
  const source=framesOf(item);
  if(source.length<2)throw Error("Esta pieza no tiene animación");
  const frames=[];
  for(const itemFrame of source){
   frames.push({rgba:await fromPNG(itemFrame.png,item.width,item.height),
    duration:validateDuration(itemFrame.duration)});
  }
  bridge.insertAnimation(frames,item.width,item.height,item.name);
  ui.close();
 }catch(e){fail(e)}
 finally{busy=false}
}
async function erase(item){
 if(!confirm("¿Eliminar "+item.name+" de la biblioteca gráfica?"))return;
 try{await removeItem(item.id);await reload();status("Pieza eliminada")}catch(e){fail(e)}
}
function validateId(value){return typeof value==="string"&&/^[a-zA-Z0-9_-]{1,90}$/.test(value)}
async function exportPack(){
 if(busy)return;
 busy=true;$("graphicExport").disabled=true;status("Preparando paquete...");
 try{
  if(!all.length)throw Error("La biblioteca está vacía");
  const entries=[],assets=[],pieces=[];
  for(const item of all){
   if(!validateId(item.id))throw Error("Identificador local de pieza inválido");
   const frames=framesOf(item),timelineFrames=[];
   for(let n=0;n<frames.length;n++){
    const frame=frames[n],file="images/"+item.id+"/frame-"+String(n+1).padStart(3,"0")+".png";
    validateDuration(frame.duration);
    entries.push({path:file,data:new Uint8Array(await frame.png.arrayBuffer())});
    assets.push({file,role:"frame",width:item.width,height:item.height});
    timelineFrames.push({file,index:n,duration:frame.duration});
   }
   let previewGifPath=null;
   if(frames.length>1){
    const previewGif=await gifFor(item);
    if(previewGif.size>MAX_IMAGE)throw Error("GIF de vista previa demasiado grande");
    previewGifPath="images/"+item.id+"/preview.gif";
    const gifData=new Uint8Array(await previewGif.arrayBuffer());
    const dimensions=gifDimensions(gifData);
    entries.push({path:previewGifPath,data:gifData});
    assets.push({file:previewGifPath,role:"animated-preview",width:dimensions.w,height:dimensions.h});
   }
   pieces.push({id:item.id,name:item.name,category:item.category,
    type:frames.length>1?"animation":"image",width:item.width,height:item.height,
    preview:timelineFrames[0].file,previewGif:previewGifPath,
    timeline:{placement:"new-animation-row",order:"sequential",
     rowName:displayName(item.rowName||item.name,40)||"Animación",frames:timelineFrames}});
  }
  const manifest={format:"nexus-pixel-graphics",version:2,
   name:"Biblioteca gráfica Nexus Pixel",createdAt:new Date().toISOString(),assets,pieces};
  entries.unshift({path:"library.json",data:enc.encode(JSON.stringify(manifest,null,2))});
  const output=pack.encode(entries);
  const url=URL.createObjectURL(new Blob([output],{type:"application/zip"}));
  const link=document.createElement("a");
  link.href=url;link.download="nexus-pixel-biblioteca.nxpack";
  document.body.append(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
  status("Exportadas "+pieces.length+" piezas en .nxpack");
 }catch(e){fail(e)}
 finally{busy=false;$("graphicExport").disabled=false}
}
function manifestNumber(n,max){return Number.isInteger(n)&&n>=0&&n<=max}
function manifestLabel(value,max){return typeof value==="string"&&value.trim().length>0&&value.trim().length<=max}
async function importPack(file){
 if(busy)return;
 busy=true;$("graphicImport").disabled=true;status("Leyendo paquete...");
 try{
  if(!file||file.size>MAX_IMPORT)throw Error("El ZIP supera los 96 MB");
  const files=await pack.decode(new Uint8Array(await file.arrayBuffer()));
  const raw=files.get("library.json");
  if(!raw||raw.length>2*1024*1024)throw Error("Manifiesto demasiado grande");
  const m=JSON.parse(dec.decode(raw));
  if(!m||m.format!=="nexus-pixel-graphics"
    ||![1,2].includes(m.version)||!Array.isArray(m.assets)||!Array.isArray(m.pieces))
   throw Error("Biblioteca gráfica no válida");
  if(m.pieces.length<1||m.pieces.length>MAX_PIECES||all.length+m.pieces.length>MAX_PIECES)
   throw Error("El paquete supera el límite de 256 piezas");
  const registry=new Map();
  for(const entry of m.assets){
   if(!entry||typeof entry.file!=="string"||!pack.validPath(entry.file)
      ||!files.has(entry.file)||registry.has(entry.file))
    throw Error("Recurso incompleto o repetido");
   if(!["preview","fragment","frame","animated-preview"].includes(entry.role))
    throw Error("Tipo de recurso inválido");
   const actual=entry.role==="animated-preview"?gifDimensions(files.get(entry.file)):pngDimensions(files.get(entry.file));
   if(actual.w!==entry.width||actual.h!==entry.height)
    throw Error("Dimensiones PNG incorrectas");
   registry.set(entry.file,entry);
  }
  if(registry.size!==files.size-1)throw Error("El paquete contiene recursos no declarados");
  const seen=new Set(),incoming=[];
  let importedFrames=0,importedBytes=0;
  for(const piece of m.pieces){
   if(!piece||!validateId(piece.id)||seen.has(piece.id)
      ||!manifestLabel(piece.name,64)||!manifestLabel(piece.category,32)
      ||!manifestNumber(piece.width,MAX_DIM)||piece.width===0
      ||!manifestNumber(piece.height,MAX_DIM)||piece.height===0
      ||!registry.has(piece.preview))throw Error("Datos de pieza inválidos");
   seen.add(piece.id);
   let specs=[],rowName=piece.name;
   if(m.version===1){
    if(!["simple","composite"].includes(piece.type)
       ||registry.get(piece.preview).role!=="preview"
       ||!Array.isArray(piece.parts)||!piece.parts.length||piece.parts.length>32)
     throw Error("Pieza de biblioteca anterior inválida");
    specs=[{file:piece.preview,index:0,duration:150}];
    // Los PNGs de fragmentos v1 se validan dentro del ZIP, pero solo se usa
    // la vista previa aplanada para conservar la compatibilidad con los dibujos.
   }else{
    const t=piece.timeline;
    if(!t||t.placement!=="new-animation-row"||t.order!=="sequential"
       ||!manifestLabel(t.rowName,40)||!Array.isArray(t.frames)
       ||t.frames.length<1||t.frames.length>MAX_FRAMES
       ||piece.type!==(t.frames.length>1?"animation":"image")
       ||piece.preview!==t.frames[0].file)
     throw Error("Instrucciones de animación inválidas");
    if(t.frames.length>1){
     if(typeof piece.previewGif!=="string"||!registry.has(piece.previewGif)
        ||registry.get(piece.previewGif).role!=="animated-preview")
      throw Error("Falta vista previa GIF de la animación");
    }else if(piece.previewGif!==null&&piece.previewGif!==undefined){
     throw Error("Una imagen estática no debe tener vista previa GIF");
    }
    specs=t.frames;rowName=t.rowName;
   }
   const previewRef=registry.get(piece.preview);
   if(previewRef.width!==piece.width||previewRef.height!==piece.height)
    throw Error("Vista previa incompatible");
   const frames=[];
   for(let n=0;n<specs.length;n++){
    const spec=specs[n];
    if(!spec||!manifestNumber(spec.index,MAX_FRAMES-1)||spec.index!==n
       ||typeof spec.file!=="string"||!registry.has(spec.file)
       ||registry.get(spec.file).role!==(m.version===1?"preview":"frame"))
     throw Error("Orden o recurso de fotograma inválido");
    const entry=registry.get(spec.file);
    if(entry.width!==piece.width||entry.height!==piece.height)
     throw Error("Fotograma de tamaño diferente");
    const duration=validateDuration(spec.duration);
    frames.push({png:new Blob([files.get(spec.file)],{type:"image/png"}),duration});
   }
   importedFrames+=frames.length;
   importedBytes+=frames.length*piece.width*piece.height*4;
   if(importedFrames+countFrames(all)>MAX_TOTAL_FRAMES
      ||importedBytes+rawBytes(all)>MAX_RGBA)
    throw Error("No hay espacio para importar las animaciones (1200 fotogramas y 128 MB)");
   incoming.push({id:id(),name:piece.name,category:piece.category,
    type:frames.length>1?"animation":"image",rowName,
    width:piece.width,height:piece.height,preview:frames[0].png,
    animatedPreview:m.version===2&&frames.length>1
     ?new Blob([files.get(piece.previewGif)],{type:"image/gif"}):null,
    frames,createdAt:Date.now()});
  }
  // Decodifica y comprueba todas las imágenes antes de comenzar la escritura.
  for(const item of incoming){
   for(const frame of item.frames)await fromPNG(frame.png,item.width,item.height);
  }
  await writeItems(incoming);await reload();
  status("Importadas "+incoming.length+" piezas correctamente");
 }catch(e){fail(e)}
 finally{busy=false;$("graphicImport").disabled=false;$("graphicFile").value=""}
}
open.addEventListener("click",async()=>{
 try{await reload();status("");ui.showModal()}
 catch(e){fail(e);ui.showModal()}
});
$("closeGraphicLibrary").addEventListener("click",()=>ui.close());
$("graphicCapture").addEventListener("click",saveCurrent);
$("graphicExport").addEventListener("click",exportPack);
$("graphicImport").addEventListener("click",()=>$("graphicFile").click());
$("graphicFile").addEventListener("change",e=>{const f=e.target.files[0];if(f)importPack(f)});
$("graphicSearch").addEventListener("input",gallery);
$("graphicCategoryFilter").addEventListener("change",gallery);
ui.addEventListener("close",resetURLs);
window.NexusPixelGraphicLibrary={refresh:reload};
})();