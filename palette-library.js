// Nexus Pixel 0.2.60: biblioteca local, validación e importación segura de paletas.
const NexusPixelPaletteLibrary=(()=>{
 "use strict";
 const KEY="nexus-pixel-palette-library-v1", MAX_PALETTES=48, MAX_SWATCHES=128;
 function swatch(v){
  if(typeof v==="string")v={hex:v,alpha:255};
  if(!v||typeof v.hex!=="string"||!/^#[0-9a-fA-F]{6}$/.test(v.hex)||!Number.isFinite(Number(v.alpha)))throw Error("Muestra de color inválida");
  return {hex:v.hex.toLowerCase(),alpha:Math.max(0,Math.min(255,Math.round(Number(v.alpha))))};
 }
 function swatches(items){
  if(!Array.isArray(items)||items.length>MAX_SWATCHES)throw Error("Una paleta admite hasta 128 colores");
  return items.map(swatch);
 }
 function name(value){
  if(typeof value!=="string"||!value.trim()||value.trim().length>48)throw Error("El nombre debe tener entre 1 y 48 caracteres");
  return value.trim();
 }
 function initial(defaultColors){
  return {type:"nexus-pixel-palette-library",version:1,activeId:"palette-1",palettes:[
   {id:"palette-1",name:"Paleta básica",swatches:swatches(defaultColors)}
  ]};
 }
 function validated(data){
  if(!data||data.type!=="nexus-pixel-palette-library"||data.version!==1
     ||!Array.isArray(data.palettes)||!data.palettes.length||data.palettes.length>MAX_PALETTES)throw Error("Biblioteca de paletas no válida");
  const ids=new Set(),names=new Set();
  const entries=data.palettes.map(p=>{
   if(!p||typeof p.id!=="string"||!/^[A-Za-z0-9_-]{1,64}$/.test(p.id)||ids.has(p.id))throw Error("Identificador de paleta no válido");
   const displayName=name(p.name),key=displayName.toLocaleLowerCase();
   if(names.has(key))throw Error("Nombre de paleta repetido");
   ids.add(p.id);names.add(key);
   return {id:p.id,name:displayName,swatches:swatches(p.swatches)};
  });
  if(!ids.has(data.activeId))throw Error("No se encontró la paleta activa");
  return {type:"nexus-pixel-palette-library",version:1,activeId:data.activeId,palettes:entries};
 }
 function load(defaultColors){
  try{
   const saved=window.localStorage.getItem(KEY);
   if(saved&&saved.length<2000000)return validated(JSON.parse(saved));
  }catch(_){}
  return initial(defaultColors);
 }
 function save(state){
  try{window.localStorage.setItem(KEY,JSON.stringify(state));return true}
  catch(_){return false}
 }
 function active(state){
  return state.palettes.find(p=>p.id===state.activeId)||state.palettes[0];
 }
 function uniqueName(state,requested,exceptId=null){
  const base=name(requested).slice(0,48);
  const taken=n=>state.palettes.some(p=>p.id!==exceptId&&p.name.toLocaleLowerCase()===n.toLocaleLowerCase());
  if(!taken(base))return base;
  for(let i=2;i<=MAX_PALETTES+2;i++){
   const suffix=" ("+i+")",candidate=base.slice(0,48-suffix.length)+suffix;
   if(!taken(candidate))return candidate;
  }
  throw Error("No hay nombres de paletas disponibles");
 }
 function add(state,requested,values){
  if(state.palettes.length>=MAX_PALETTES)throw Error("La biblioteca admite como máximo 48 paletas");
  const normalized=swatches(values),displayName=uniqueName(state,requested);
  let i=1;
  while(state.palettes.some(p=>p.id==="palette-"+i))i++;
  const entry={id:"palette-"+i,name:displayName,swatches:normalized};
  state.palettes.push(entry);state.activeId=entry.id;
  return entry;
 }
 function choose(state,id){
  if(!state.palettes.some(p=>p.id===id))throw Error("La paleta solicitada no existe");
  state.activeId=id;return active(state);
 }
 function rename(state,id,value){
  const entry=state.palettes.find(p=>p.id===id);
  if(!entry)throw Error("La paleta no existe");
  entry.name=uniqueName(state,value,id);
  return entry;
 }
 function remove(state,id){
  if(state.palettes.length<=1)throw Error("Debes conservar al menos una paleta");
  const index=state.palettes.findIndex(p=>p.id===id);
  if(index<0)throw Error("La paleta no existe");
  state.palettes.splice(index,1);
  if(state.activeId===id)state.activeId=state.palettes[0].id;
  return active(state);
 }
 function matching(state,values){
  const normalized=swatches(values),signature=JSON.stringify(normalized);
  return state.palettes.find(p=>JSON.stringify(p.swatches)===signature)||null;
 }
 function importPalette(state,data,fallbackName){
  if(!data||data.type!=="nexus-pixel-palette"||data.version!==1)throw Error("Archivo de paleta no válido");
  const values=swatches(data.swatches);
  const title=typeof data.name==="string"&&data.name.trim()?data.name.trim().slice(0,48):name(fallbackName);
  return add(state,title,values);
 }
 function importLibrary(state,data){
  const incoming=validated(data);
  if(state.palettes.length+incoming.palettes.length>MAX_PALETTES)throw Error("No hay espacio para todas las paletas del archivo");
  const newItems=incoming.palettes.map(p=>({id:p.id,name:p.name,swatches:p.swatches}));
  const preview={...state,palettes:state.palettes.map(p=>({...p,swatches:p.swatches.map(v=>({...v}))}))};
  let lastActive=null;
  for(const item of newItems){
   const imported=add(preview,item.name,item.swatches);
   if(item.id===incoming.activeId)lastActive=imported.id;
  }
  if(lastActive)preview.activeId=lastActive;
  state.palettes=preview.palettes;
  state.activeId=preview.activeId;
  return active(state);
 }
 return {KEY,MAX_PALETTES,MAX_SWATCHES,swatch,swatches,name,initial,validated,load,save,active,uniqueName,add,choose,rename,remove,matching,importPalette,importLibrary};
})();
