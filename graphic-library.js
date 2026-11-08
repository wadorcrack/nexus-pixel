// Nexus Pixel — Biblioteca gráfica: recursos simples y composiciones por capas.
// Persistencia en IndexedDB y archivos .nxpack (ZIP + JSON + PNG), sin servicios externos.
(()=>{
"use strict";
const $=id=>document.getElementById(id);
const ui=$("graphicLibraryDialog"),open=$("openGraphics");
if(!ui||!open||!window.NexusPixelGraphicEditor||!window.NexusPixelPack)return;
const bridge=window.NexusPixelGraphicEditor,pack=window.NexusPixelPack;
const DB_NAME="nexus-pixel-graphics-v1",STORE="pieces",MAX_PIECES=256,MAX_PARTS=32;
const MAX_IMAGE=16*1024*1024,MAX_DIM=2000,MAX_IMPORT=96*1024*1024;
const enc=new TextEncoder(),dec=new TextDecoder("utf-8",{fatal:true});
let all=[],urls=[],busy=false,dbPromise=null;
function id(){return "g-"+(typeof crypto!=="undefined"&&crypto.randomUUID?crypto.randomUUID().replace(/-/g,""):Date.now().toString(36)+Math.random().toString(36).slice(2))}
function displayName(v,limit=64){return typeof v==="string"?v.trim().slice(0,limit):""}
function status(t,isError=false){
 const el=$("graphicLibraryStatus");el.textContent=t||"";el.classList.toggle("graphic-error",isError);
}
function fail(err){status(err&&err.message?err.message:String(err),true)}
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
  tx.onerror=()=>{}; // tx.onabort ofrece la causa para la operación completa
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
 const b=node("button",classes,label);b.type="button";b.addEventListener("click",callback);return b;
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
  const card=node("article","graphic-card");
  const figure=node("div","graphic-card-image");
  const img=document.createElement("img");
  const url=URL.createObjectURL(item.preview);urls.push(url);
  img.src=url;img.alt="Vista previa: "+item.name;img.loading="lazy";img.decoding="async";
  figure.append(img);card.append(figure);
  const label=node("div","graphic-card-label");
  const strong=node("strong","",item.name),small=node("small","",item.category+" · "+item.width+"×"+item.height+" · "+(item.parts.length>1?item.parts.length+" fragmentos":"1 pieza"));
  label.append(strong,small);card.append(label);
  const tools=node("div","graphic-card-actions");
  tools.append(button("Colocar",()=>place(item),"graphic-insert"),button("Eliminar",()=>erase(item),"graphic-remove"));
  card.append(tools);holder.append(card);
 }
}
async function reload(){all=(await readAll()).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));refreshCategories();gallery()}
function checkImageDimensions(w,h){
 if(!Number.isInteger(w)||!Number.isInteger(h)||w<1||h<1||w>MAX_DIM||h>MAX_DIM)throw Error("Dimensiones fuera de límite (1–2000 px)");
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
async function composite(parts,width,height){
 const c=document.createElement("canvas");c.width=width;c.height=height;
 const ctx=c.getContext("2d");ctx.imageSmoothingEnabled=false;
 for(const part of parts){
  const layer=document.createElement("canvas");layer.width=part.width;layer.height=part.height;
  layer.getContext("2d").putImageData(new ImageData(part.rgba,part.width,part.height),0,0);
  ctx.drawImage(layer,part.x,part.y);
 }
 return toPNG(ctx.getImageData(0,0,width,height).data,width,height);
}
async function captured(){
 const data=bridge.capture();
 checkImageDimensions(data.width,data.height);
 if(data.parts.length>MAX_PARTS)throw Error("La pieza tiene demasiadas capas visibles (máximo 32)");
 const parts=[];
 for(const piece of data.parts){
  checkImageDimensions(piece.width,piece.height);
  parts.push({name:displayName(piece.name,48)||"Fragmento",x:piece.x,y:piece.y,width:piece.width,height:piece.height,
   png:await toPNG(piece.rgba,piece.width,piece.height)});
 }
 const preview=await composite(data.parts,data.width,data.height);
 return {id:id(),name:displayName($("graphicName").value)||"Pieza "+(all.length+1),
  category:displayName($("graphicCategory").value,32)||"General",type:parts.length>1?"composite":"simple",
  width:data.width,height:data.height,preview,parts,createdAt:Date.now()};
}
async function saveCurrent(){
 if(busy)return;
 busy=true;$("graphicCapture").disabled=true;status("Guardando pieza...");
 try{
  if(all.length>=MAX_PIECES)throw Error("Límite de 256 piezas. Exporta una biblioteca y libera espacio");
  const item=await captured();
  await writeItems([item]);await reload();
  $("graphicName").value="";status("Guardado: "+item.name+" · "+item.parts.length+" fragmento(s)");
 }catch(e){fail(e)}
 finally{busy=false;$("graphicCapture").disabled=false}
}
async function pngDimensions(bytes){
 if(!(bytes instanceof Uint8Array)||bytes.length<24||bytes.length>MAX_IMAGE)throw Error("Archivo PNG inválido");
 const sig=[137,80,78,71,13,10,26,10];
 if(!sig.every((b,i)=>bytes[i]===b)||bytes[12]!==73||bytes[13]!==72||bytes[14]!==68||bytes[15]!==82)throw Error("PNG sin cabecera IHDR válida");
 const v=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
 const w=v.getUint32(16),h=v.getUint32(20);checkImageDimensions(w,h);return {w,h};
}
async function fromPNG(blob,width,height){
 const bitmap=await createImageBitmap(blob);
 try{
  if(bitmap.width!==width||bitmap.height!==height)throw Error("El PNG no coincide con las dimensiones registradas");
  const c=document.createElement("canvas");c.width=width;c.height=height;
  const ctx=c.getContext("2d",{willReadFrequently:true});ctx.imageSmoothingEnabled=false;
  ctx.drawImage(bitmap,0,0);
  return ctx.getImageData(0,0,width,height).data;
 }finally{bitmap.close()}
}
async function place(item){
 try{
  status("");
  const rgba=await fromPNG(item.preview,item.width,item.height);
  bridge.place(rgba,item.width,item.height);
  ui.close();
 }catch(e){fail(e)}
}
async function erase(item){
 if(!confirm("¿Eliminar "+item.name+" de la biblioteca gráfica?"))return;
 try{await removeItem(item.id);await reload();status("Pieza eliminada")}catch(e){fail(e)}
}
async function exportPack(){
 if(busy)return;
 busy=true;$("graphicExport").disabled=true;status("Preparando paquete...");
 try{
  if(!all.length)throw Error("La biblioteca está vacía");
  const entries=[],assets=[],pieces=[];
  for(const item of all){
   const previewPath="images/"+item.id+".png";
   entries.push({path:previewPath,data:new Uint8Array(await item.preview.arrayBuffer())});
   assets.push({file:previewPath,role:"preview",width:item.width,height:item.height});
   const parts=[];
   for(let n=0;n<item.parts.length;n++){
    const part=item.parts[n],file="images/"+item.id+"/part-"+(n+1)+".png";
    entries.push({path:file,data:new Uint8Array(await part.png.arrayBuffer())});
    assets.push({file,role:"fragment",width:part.width,height:part.height});
    parts.push({file,name:part.name,x:part.x,y:part.y,width:part.width,height:part.height});
   }
   pieces.push({id:item.id,name:item.name,category:item.category,type:item.type,width:item.width,height:item.height,preview:previewPath,parts});
  }
  const manifest={format:"nexus-pixel-graphics",version:1,name:"Biblioteca gráfica Nexus Pixel",
   createdAt:new Date().toISOString(),assets,pieces};
  entries.unshift({path:"library.json",data:enc.encode(JSON.stringify(manifest,null,2))});
  const output=pack.encode(entries);
  const url=URL.createObjectURL(new Blob([output],{type:"application/zip"}));
  const link=document.createElement("a");link.href=url;link.download="nexus-pixel-biblioteca.nxpack";
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
  if(!m||m.format!=="nexus-pixel-graphics"||m.version!==1||!Array.isArray(m.assets)||!Array.isArray(m.pieces))throw Error("Biblioteca gráfica no válida");
  if(m.pieces.length<1||m.pieces.length>MAX_PIECES||all.length+m.pieces.length>MAX_PIECES)throw Error("El paquete supera el límite de 256 piezas");
  const registry=new Map();
  for(const entry of m.assets){
   if(!entry||typeof entry.file!=="string"||!pack.validPath(entry.file)||!files.has(entry.file)||registry.has(entry.file))throw Error("Recurso incompleto o repetido");
   if(!["preview","fragment"].includes(entry.role))throw Error("Tipo de recurso inválido");
   const actual=await pngDimensions(files.get(entry.file));
   if(actual.w!==entry.width||actual.h!==entry.height)throw Error("Dimensiones PNG incorrectas");
   registry.set(entry.file,entry);
  }
  if(registry.size!==files.size-1)throw Error("El paquete contiene recursos no declarados");
  const seen=new Set(),incoming=[];
  for(const piece of m.pieces){
   if(!piece||typeof piece.id!=="string"||seen.has(piece.id)
      ||!manifestLabel(piece.name,64)||!manifestLabel(piece.category,32)
      ||!manifestNumber(piece.width,MAX_DIM)||piece.width===0
      ||!manifestNumber(piece.height,MAX_DIM)||piece.height===0
      ||!["simple","composite"].includes(piece.type)
      ||!registry.has(piece.preview)||registry.get(piece.preview).role!=="preview"
      ||!Array.isArray(piece.parts)||piece.parts.length<1||piece.parts.length>MAX_PARTS)throw Error("Datos de pieza inválidos");
   seen.add(piece.id);
   const previewRef=registry.get(piece.preview);
   if(previewRef.width!==piece.width||previewRef.height!==piece.height)throw Error("Vista previa incompatible");
   const parts=[];
   for(const part of piece.parts){
    if(!part||!registry.has(part.file)||registry.get(part.file).role!=="fragment"
       ||!manifestLabel(part.name,48)||!manifestNumber(part.x,MAX_DIM)
       ||!manifestNumber(part.y,MAX_DIM)||!manifestNumber(part.width,MAX_DIM)
       ||!manifestNumber(part.height,MAX_DIM)||part.width<1||part.height<1
       ||part.x+part.width>piece.width||part.y+part.height>piece.height)throw Error("Fragmento incompatible");
    const declared=registry.get(part.file);
    if(part.width!==declared.width||part.height!==declared.height)throw Error("Tamaño de fragmento incompatible");
    parts.push({name:part.name,x:part.x,y:part.y,width:part.width,height:part.height,
     png:new Blob([files.get(part.file)],{type:"image/png"})});
   }
   incoming.push({id:id(),name:piece.name,category:piece.category,type:piece.type,
    width:piece.width,height:piece.height,
    preview:new Blob([files.get(piece.preview)],{type:"image/png"}),
    parts,createdAt:Date.now()});
  }
  // Se decodifican todos los PNG antes de guardar; la importación no queda a medias.
  for(const item of incoming){
   await fromPNG(item.preview,item.width,item.height);
   for(const part of item.parts)await fromPNG(part.png,part.width,part.height);
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