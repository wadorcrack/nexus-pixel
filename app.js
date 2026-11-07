const NEXUS_LUCIDE_ICONS={'move':'<path d="M5 9V5h4M15 5h4v4M19 15v4h-4M9 19H5v-4"/><path d="m8 8 8 8m0-8-8 8"/>','pencil': '<path d="m18 2 4 4-14 14-6 2 2-6L18 2Z"/><path d="m14.5 5.5 4 4"/>', 'eraser': '<path d="m7 21-4-4a2 2 0 0 1 0-3l10-10a2 2 0 0 1 3 0l5 5a2 2 0 0 1 0 3l-9 9H7Z"/><path d="m5 12 7 7M12 21h9"/>', 'paint-bucket': '<path d="m3 3 8 8"/><path d="m12 2 9 9-9 9-9-9 9-9Z"/><path d="M2 21h17"/><path d="M20 16c0 1.5 1 2.5 2 3.5-.5.7-1.2 1-2 1s-1.5-.3-2-1c1-1 2-2 2-3.5Z"/>', 'pipette': '<path d="m2 22 1-5L17 3a3 3 0 0 1 4 4L7 21l-5 1Z"/><path d="m14 6 4 4"/>', 'minus': '<path d="M5 12h14"/>', 'square': '<rect x="4" y="4" width="16" height="16" rx="1"/>', 'circle': '<circle cx="12" cy="12" r="9"/>', 'undo-2': '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-2"/>', 'redo-2': '<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h2"/>', 'file-plus': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M12 12v6m-3-3h6"/>', 'save': '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/>', 'folder-open': '<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v2"/><path d="M3 20a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2l2-8H5l-2 8Z"/>', 'image': '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>', 'film': '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5m-5 8h5m10-8h5m-5 8h5"/>', 'clapperboard': '<path d="M4 11h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"/><path d="m3 11-1-6 18-3 1 6-18 3Zm5-7 3 6m4-7 3 6"/>', 'play': '<path d="m8 5 12 7-12 7V5Z"/>', 'plus': '<path d="M12 5v14M5 12h14"/>', 'copy': '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>', 'trash-2': '<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 4v7m4-7v7"/>', 'layers': '<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/>', 'maximize': '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"/>', 'download': '<path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"/>', 'x': '<path d="M18 6 6 18M6 6l12 12"/>', 'check': '<path d="m5 12 4 4L19 6"/>', 'eye': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>', 'eye-off': '<path d="M3 3l18 18M10.6 5.1A11 11 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.2 4.1M6.3 6.5C3.4 8.5 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4.3-.9"/>', 'lock': '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>', 'lock-open': '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0"/>', 'blend': '<circle cx="9" cy="12" r="8"/><path d="M9 4a8 8 0 0 1 0 16"/><path d="M9 4v16"/>', 'iso-diamond':'<path d="M12 3 22 12 12 21 2 12 12 3Z"/><path d="M2 12h20"/>', 'radial': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', 'refresh-cw': '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.5 9A7 7 0 0 1 18 6.5L20 12M4 12l2 5.5A7 7 0 0 0 18.5 15"/>', 'sparkles': '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Zm7 13 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"/>', 'selection-rect': '<rect x="4" y="4" width="16" height="16" rx="1" stroke-dasharray="3 2"/><path d="M9 9h6v6H9z"/>', 'lasso': '<path d="M4 10c0-3 3-6 8-6s8 3 8 6-3 6-8 6c-1.7 0-3.3-.4-4.6-1.1L4 20v-4.3A6.5 6.5 0 0 1 4 10Z" stroke-dasharray="3 2"/><circle cx="12" cy="10" r="1"/>', 'arrow-up': '<path d="M12 19V5m-7 7 7-7 7 7"/>', 'arrow-down': '<path d="M12 5v14m-7-7 7 7 7-7"/>', 'spray-can': '<path d="M6 9h7a2 2 0 0 1 2 2v9H8a2 2 0 0 1-2-2V9Z"/><path d="M9 4h4v3H9zM15 10l4-2"/><path d="M18 5h.01M20 8h.01M17 8h.01M19 11h.01"/>'};
function nexusIcon(name){return `<svg class="lucide-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${NEXUS_LUCIDE_ICONS[name]||NEXUS_LUCIDE_ICONS.square}</svg>`}

(()=>{'use strict';
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=nexusIcon(el.dataset.icon)});
const $=id=>document.getElementById(id), viewport=$('viewport'),canvas=$('canvas'),cx=canvas.getContext('2d',{willReadFrequently:true}),overlay=$('canvasOverlay'),oc=overlay.getContext('2d');
let animationEnabled=false,guideGridEnabled=false,guideCellWidth=32,guideCellHeight=32,guideGridColor='#5ac8ef',guideGridAlpha=55;
let isoMode=false,isoGrid=true,isoWidth=32,isoHeight=16,isoColor='#5ac8ef',isoOpacity=55,isoSnap=true;
let W=32,H=32,zoom=12,color='#38bdf8',colorEnd='#a855f7',alpha=255,alphaEnd=0,tool='pencil',grid=true,mirror=false,selected=0,activeLayer=0,playing=false,timer=null,dragging=false,start=null,last=null,preview=null;
let gradientStops=[{hex:'#38bdf8',alpha:255},{hex:'#a855f7',alpha:0}],selectedGradientStop=0,radialInvert=false;
let selectionMask=null,selectionPreview=null,lassoPoints=[],selectionAddMode=false,sprayRadius=4,sprayDensity=24;
let pixelClipboard=null,pastePlacement=null;
let moveOrigin=null,moveSource=null,moveLayers=[];
let panX=0,panY=0,panPointer=null,mobilePanEnabled=false,mobilePaintSide='left';
function actualZoom(mode=zoom){
 if(mode!==0)return Math.max(0.05,mode);
 return Math.max(0.01,Math.min(24,(Math.max(60,viewport.clientWidth)-28)/W,(Math.max(60,viewport.clientHeight)-28)/H));
}
function applyPan(){canvas.style.setProperty('--pan-x',panX+'px');canvas.style.setProperty('--pan-y',panY+'px');drawOverlay()}
function setZoom(next,clientX,clientY){
 const before=actualZoom();
 next=Number(next);next=next<=0?0:Math.max(0.05,Math.min(24,Math.round(next*100)/100));
 if(next===zoom)return;
 const box=viewport.getBoundingClientRect(),newActual=actualZoom(next);
 const dx=(clientX===undefined?box.left+box.width/2:clientX)-(box.left+box.width/2);
 const dy=(clientY===undefined?box.top+box.height/2:clientY)-(box.top+box.height/2);
 const ratio=newActual/before;
 panX=next===0?0:dx-(dx-panX)*ratio;
 panY=next===0?0:dy-(dy-panY)*ratio;
 zoom=next;$('zoom').value=zoom;
 $('zoomLabel').textContent=zoom===0?'Ajustar':zoom.toFixed(zoom%1===0?0:2).replace(/\.0+$/,'')+'×';
 canvas.style.width=W*actualZoom()+'px';canvas.style.height=H*actualZoom()+'px';
 applyPan();drawOverlay();
}
viewport.addEventListener('wheel',e=>{
 e.preventDefault();
 const dz=e.deltaMode===1?e.deltaY*16:e.deltaMode===2?e.deltaY*viewport.clientHeight:e.deltaY;
 const next=actualZoom()*Math.pow(1.0025,-dz);
 setZoom(Math.max(0.05,next),e.clientX,e.clientY);
},{passive:false});
viewport.addEventListener('pointerdown',e=>{
 if(e.button!==1)return;
 e.preventDefault();
 panPointer={id:e.pointerId,x:e.clientX,y:e.clientY,panX,panY};
 viewport.classList.add('panning');
 viewport.setPointerCapture(e.pointerId);
});
viewport.addEventListener('pointermove',e=>{
 if(!panPointer||panPointer.id!==e.pointerId)return;
 panX=panPointer.panX+e.clientX-panPointer.x;
 panY=panPointer.panY+e.clientY-panPointer.y;
 applyPan();
});
function stopPan(e){
 if(!panPointer||panPointer.id!==e.pointerId)return;
 panPointer=null;viewport.classList.remove('panning');
 if(viewport.hasPointerCapture(e.pointerId))viewport.releasePointerCapture(e.pointerId);
}
viewport.addEventListener('pointerup',stopPan);
viewport.addEventListener('pointercancel',stopPan);
viewport.addEventListener('auxclick',e=>{if(e.button===1)e.preventDefault()});
let layerNames=['Capa 1'];
let layerVisible=[true],layerLocked=[false];
const blank=()=>new Uint8ClampedArray(W*H*4);
let frames=[{duration:150,layers:[blank()]}];
let undo=[],redo=[];
let characterPack=null, currentAnimation='Animación 1';
let animationTracks=[{name:currentAnimation,frames}];
const cloneFrames=fs=>fs.map(f=>({duration:f.duration,layers:f.layers.map(a=>new Uint8ClampedArray(a))}));
function clonePack(p){return p?{colors:{...p.colors}}:null}
function totalFrameCount(){return animationTracks.reduce((n,t)=>n+t.frames.length,0)}
function activeTrack(){return animationTracks.find(t=>t.name===currentAnimation)||animationTracks[0]}
function setAnimationFrames(next){frames=next;activeTrack().frames=next}
function setAnimationTracks(tracks,activeName){
 animationTracks=tracks;
 const active=animationTracks.find(t=>t.name===activeName)||animationTracks[0];
 currentAnimation=active.name;frames=active.frames;selected=0;
}
function animationNameUnique(name,ignore){return !animationTracks.some(t=>t!==ignore&&t.name.toLowerCase()===name.toLowerCase())}
function makeNewAnimationName(){let i=1;while(!animationNameUnique('Animación '+i))i++;return 'Animación '+i}
function switchAnimation(name){
 if(currentAnimation===name)return;
 const track=animationTracks.find(t=>t.name===name);if(!track)return;
 if(playing)togglePlay();if(moveOrigin)endMove(false);
 currentAnimation=name;frames=track.frames;selected=0;preview=null;resetSelection();updateAnimationUI();refresh();
}
function updateAnimationUI(){
 const count=totalFrameCount();$('animationTag').textContent=animationTracks.length+' líneas · '+count+' fotogramas';
 $('deleteAnimation').disabled=animationTracks.length<2;
}

const DEFAULT_PALETTE=['#000000','#ffffff','#ef4444','#fb923c','#facc15','#22c55e','#38bdf8','#2563eb','#8b5cf6','#ec4899','#92400e','#94a3b8','#475569','#a3e635','#14b8a6'];
let palette=DEFAULT_PALETTE.map(hex=>({hex,alpha:255}));
let paletteLibrary=NexusPixelPaletteLibrary.load(palette);
palette=NexusPixelPaletteLibrary.active(paletteLibrary).swatches;
let selectedSwatch=palette.findIndex(s=>s.hex===color&&s.alpha===alpha);
let selectedSwatchRight=palette.findIndex(s=>s.hex===colorEnd&&s.alpha===alphaEnd);
let activeColorSide='left',strokeSide='left',randomColorEnabled=false;
// Cada pulsación deposita pintura como máximo una vez sobre cada píxel.
let strokePainted=null;
let brushSize=1;
function setBrushSize(n){brushSize=Math.max(1,Math.min(32,Math.round(Number(n)||1)));$('brushSize').value=brushSize;document.querySelectorAll('[data-brush-size]').forEach(b=>b.classList.toggle('active',Number(b.dataset.brushSize)===brushSize))}
$('brushSize').addEventListener('change',e=>setBrushSize(e.target.value));document.querySelectorAll('[data-brush-size]').forEach(b=>b.onclick=()=>setBrushSize(b.dataset.brushSize));
function brushStamp(x,y,callback){const offset=Math.floor((brushSize-1)/2);for(let yy=0;yy<brushSize;yy++)for(let xx=0;xx<brushSize;xx++)callback(x-offset+xx,y-offset+yy)}
let msgTimeout;
function msg(t){$('message').textContent=t;clearTimeout(msgTimeout);msgTimeout=setTimeout(()=>$('message').textContent='',4000)}
function syncSelectionControls(){
 const selected=selectionMask !== null && selectionMask.length===W*H;
 $('invertSelection').disabled=!selected;
 $('selectionControls').hidden=!selected && !tool.startsWith('select-');
 document.dispatchEvent(new CustomEvent('nexus-selection-change'));
}
function resetSelection(){selectionMask=null;selectionPreview=null;lassoPoints=[];selectionAddMode=false;endPaintStroke();syncSelectionControls()}
function invertSelection(){
 if(!selectionMask){msg('Primero crea una selección');return}
 for(let i=0;i<selectionMask.length;i++)selectionMask[i]=selectionMask[i]?0:1;
 selectionPreview=null;
 syncSelectionControls();draw();
 msg('Selección invertida · '+selectionCount(selectionMask)+' píxeles');
}
$('invertSelection').onclick=invertSelection;
// Une las máscaras sin perder regiones existentes. Sin Shift se reemplazan.
function combineSelectionMasks(previous,incoming,additive){
 if(!additive||!previous)return incoming;
 if(!incoming||previous.length!==incoming.length)return previous;
 const result=new Uint8Array(previous);
 for(let i=0;i<result.length;i++)if(incoming[i])result[i]=1;
 return result;
}
function inSelection(x,y){return !selectionMask || !!selectionMask[y*W+x]}
function buildRectMask(x0,y0,x1,y1){const mask=new Uint8Array(W*H);const minX=Math.max(0,Math.min(x0,x1)),maxX=Math.min(W-1,Math.max(x0,x1)),minY=Math.max(0,Math.min(y0,y1)),maxY=Math.min(H-1,Math.max(y0,y1));for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++)mask[y*W+x]=1;return mask}
function buildPolygonMask(points){if(!points||points.length<3)return null;const mask=new Uint8Array(W*H);const pts=points.map(p=>[Math.max(0,Math.min(W-1,p.x))+.5,Math.max(0,Math.min(H-1,p.y))+.5]);let minY=H,maxY=0;for(const [,y] of pts){if(y<minY)minY=y;if(y>maxY)maxY=y}for(let y=Math.max(0,Math.floor(minY));y<=Math.min(H-1,Math.ceil(maxY));y++){const py=y+.5;let xs=[];for(let i=0,j=pts.length-1;i<pts.length;j=i++){const [xi,yi]=pts[i],[xj,yj]=pts[j];if((yi>py)!==(yj>py)){const x=xi+(py-yi)*(xj-xi)/(yj-yi);xs.push(x)}}xs.sort((a,b)=>a-b);for(let k=0;k<xs.length;k+=2){const xStart=Math.max(0,Math.floor(xs[k]));const xEnd=Math.min(W-1,Math.floor((xs[k+1]??xs[k])-1e-6));for(let x=xStart;x<=xEnd;x++)mask[y*W+x]=1}}return mask}
function buildMagicMask(data,x,y){if(x<0||y<0||x>=W||y>=H)return null;const base=(y*W+x)*4,target=[data[base],data[base+1],data[base+2],data[base+3]],mask=new Uint8Array(W*H),seen=new Uint8Array(W*H),stack=[y*W+x];while(stack.length){const n=stack.pop();if(seen[n])continue;seen[n]=1;const px=n%W,py=(n/W)|0,i=n*4;if(data[i]!==target[0]||data[i+1]!==target[1]||data[i+2]!==target[2]||data[i+3]!==target[3])continue;mask[n]=1;if(px>0)stack.push(n-1);if(px+1<W)stack.push(n+1);if(py>0)stack.push(n-W);if(py+1<H)stack.push(n+W)}return mask}

function selectionCount(mask){if(!mask)return 0;let n=0;for(const v of mask)n+=v?1:0;return n}
function visiblePixelBounds(left,top,z){
 return {x0:Math.max(0,Math.floor(-left/z)-1),x1:Math.min(W-1,Math.ceil((viewport.clientWidth-left)/z)+1),
         y0:Math.max(0,Math.floor(-top/z)-1),y1:Math.min(H-1,Math.ceil((viewport.clientHeight-top)/z)+1)};
}
function outlineMask(mask,z,bounds){
 const {x0,x1,y0,y1}=bounds;
 if(z>=6){oc.fillStyle='rgba(85,216,243,.14)';for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)if(mask[y*W+x])oc.fillRect(x*z,y*z,z,z)}
 oc.strokeStyle='rgba(85,216,243,.95)';oc.lineWidth=1;oc.beginPath();
 for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)if(mask[y*W+x]){
   const i=y*W+x,xa=x*z,ya=y*z;
   if(y===0||!mask[i-W]){oc.moveTo(xa+.5,ya+.5);oc.lineTo(xa+z+.5,ya+.5)}
   if(y===H-1||!mask[i+W]){oc.moveTo(xa+.5,ya+z+.5);oc.lineTo(xa+z+.5,ya+z+.5)}
   if(x===0||!mask[i-1]){oc.moveTo(xa+.5,ya+.5);oc.lineTo(xa+.5,ya+z+.5)}
   if(x===W-1||!mask[i+1]){oc.moveTo(xa+z+.5,ya+.5);oc.lineTo(xa+z+.5,ya+z+.5)}
 }
 oc.stroke();
}
function drawSelection(z,bounds){
 if(selectionMask)outlineMask(selectionMask,z,bounds);
 if(!selectionPreview)return;
 oc.save();oc.strokeStyle='rgba(255,255,255,.95)';oc.lineWidth=1;oc.setLineDash([6,4]);
 if(selectionPreview.type==='rect'){
   const a=selectionPreview,minX=Math.min(a.x0,a.x1),minY=Math.min(a.y0,a.y1),w=Math.abs(a.x1-a.x0)+1,h=Math.abs(a.y1-a.y0)+1;
   oc.strokeRect(minX*z+.5,minY*z+.5,w*z,h*z);
 }else if(selectionPreview.type==='lasso'&&selectionPreview.points.length){
   oc.beginPath();selectionPreview.points.forEach((p,i)=>{const px=(p.x+.5)*z,py=(p.y+.5)*z;i?oc.lineTo(px,py):oc.moveTo(px,py)});oc.stroke()
 }
 oc.restore();
}
// Portapapeles interno: conserva píxeles RGBA y la máscara de selección libre.
function copySelectedPixels(cut=false){
 if(!selectionMask){msg('Primero crea una selección');return}
 const source=layer();
 let minX=W,minY=H,maxX=-1,maxY=-1;
 for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(selectionMask[y*W+x]){
   minX=Math.min(minX,x);minY=Math.min(minY,y);
   maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);
 }
 if(maxX<0){msg('La selección está vacía');return}
 if(cut&&(layerLocked[activeLayer]||layerVisible[activeLayer]===false)){
   msg('Desbloquea y muestra la capa antes de cortar');return;
 }
 const cw=maxX-minX+1,ch=maxY-minY+1,rgbaData=new Uint8ClampedArray(cw*ch*4);
 const selectedBits=new Uint8Array(cw*ch);
 for(let y=0;y<ch;y++)for(let x=0;x<cw;x++){
   const px=x+minX,py=y+minY,si=py*W+px,di=y*cw+x;
   if(!selectionMask[si])continue;
   selectedBits[di]=1;
   rgbaData.set(source.subarray(si*4,si*4+4),di*4);
 }
 pixelClipboard={width:cw,height:ch,data:rgbaData,mask:selectedBits,x:minX,y:minY};
 pastePlacement=null;
 if(cut){
   snapshot();
   for(let y=0;y<ch;y++)for(let x=0;x<cw;x++)if(selectedBits[y*cw+x])
     source.fill(0,((y+minY)*W+x+minX)*4,((y+minY)*W+x+minX)*4+4);
   refresh();
 }
 msg(cut?'Selección cortada (Ctrl+V para pegar)':'Selección copiada (Ctrl+V para pegar)');
}
function previewPastedPixels(z){
 if(!pastePlacement||!pixelClipboard)return;
 const clip=pixelClipboard;
 if(!clip.previewCanvas){
  const off=document.createElement('canvas');off.width=clip.width;off.height=clip.height;
  off.getContext('2d').putImageData(new ImageData(clip.data,clip.width,clip.height),0,0);
  clip.previewCanvas=off;
 }
 const ox=pastePlacement.x,oy=pastePlacement.y;
 oc.save();oc.imageSmoothingEnabled=false;oc.globalAlpha=.78;
 oc.drawImage(clip.previewCanvas,ox*z,oy*z,clip.width*z,clip.height*z);
 oc.globalAlpha=1;oc.strokeStyle='#63e2f8';oc.lineWidth=1;
 oc.setLineDash([4,3]);oc.strokeRect(ox*z+.5,oy*z+.5,clip.width*z,clip.height*z);
 oc.restore();
}
function startPaste(){
 if(!pixelClipboard){msg('No hay píxeles copiados');return}
 if(layerLocked[activeLayer]||layerVisible[activeLayer]===false){
   msg('Desbloquea y muestra la capa antes de pegar');return;
 }
 pastePlacement={x:pixelClipboard.x,y:pixelClipboard.y};
 resetSelection();
 draw();
 msg('Mueve el puntero para colocar y haz clic para pegar; Esc cancela');
}
function commitPaste(){
 if(!pastePlacement||!pixelClipboard)return;
 if(layerLocked[activeLayer]||layerVisible[activeLayer]===false){msg('La capa está bloqueada u oculta');return}
 snapshot();
 const {data,mask,width,height}=pixelClipboard,ox=pastePlacement.x,oy=pastePlacement.y;
 const dest=layer();
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
   if(!mask[y*width+x])continue;
   const px=ox+x,py=oy+y;
   if(px<0||py<0||px>=W||py>=H)continue;
   const srcIndex=(y*width+x)*4,rgbaColor=data.subarray(srcIndex,srcIndex+4);
   if(rgbaColor[3])blendPixel(dest,px,py,rgbaColor);
 }
 pastePlacement=null;refresh();msg('Selección pegada · Ctrl+Z para deshacer');
}

$('addAnimation').onclick=()=>{
 try{ensureProjectSize(W,H,layerNames.length,frames.length+1)}catch(e){msg(e.message);return}
 if(playing)togglePlay();snapshot();
 const name=makeNewAnimationName();
 const newFrames=[{duration:150,layers:layerNames.map(blank)}];
 animationTracks.push({name,frames:newFrames});
 switchAnimation(name);msg('Animación creada: '+name);
};
$('deleteAnimation').onclick=()=>{
 if(animationTracks.length<2){msg('Debe quedar al menos una animación');return}
 if(playing)togglePlay();snapshot();
 const ix=animationTracks.findIndex(t=>t.name===currentAnimation);
 animationTracks.splice(ix,1);
 const next=animationTracks[Math.min(ix,animationTracks.length-1)];
 currentAnimation='';switchAnimation(next.name);msg('Animación eliminada');
};
function rgba(hex,opacity=255){return [parseInt(hex.slice(1,3),16),parseInt(hex.slice(3,5),16),parseInt(hex.slice(5,7),16),opacity]}
function frame(){return frames[selected]}
function layer(){return frame().layers[activeLayer]}
function copyState(){return {animationTracks:animationTracks.map(t=>({name:t.name,frames:cloneFrames(t.frames)})),layerNames:[...layerNames],layerVisible:[...layerVisible],layerLocked:[...layerLocked],palette:palette.map(s=>({...s})),selectedSwatch,selectedSwatchRight,color,alpha,colorEnd,alphaEnd,activeColorSide,randomColorEnabled,gradientStops:gradientStops.map(s=>({...s})),selectedGradientStop,radialInvert,animationEnabled,guideGridEnabled,guideCellWidth,guideCellHeight,guideGridColor,guideGridAlpha,isoMode,isoGrid,isoWidth,isoHeight,isoColor,isoOpacity,isoSnap,selected,activeLayer,W,H,characterPack:clonePack(characterPack),currentAnimation}}
const MAX_PROJECT_BYTES=192*1024*1024;
function projectBytes(w=W,h=H,layerCount=layerNames.length,frameCount=totalFrameCount()){return w*h*4*layerCount*frameCount}
function ensureProjectSize(w,h,layerCount,frameCount){
 const total=totalFrameCount()-frames.length+frameCount;
 if(total>300)throw Error('El proyecto no admite más de 300 fotogramas en total.');
 if(projectBytes(w,h,layerCount,total)>MAX_PROJECT_BYTES)throw Error('La combinación de tamaño, capas y fotogramas supera el límite recomendado de memoria (192 MB).');
}
function snapshot(){
 const bytes=projectBytes();
 redo=[];
 if(bytes>96*1024*1024){undo=[];msg('Proyecto grande: historial desactivado para ahorrar memoria');return}
 const limit=Math.min(30,Math.max(1,Math.floor(64*1024*1024/Math.max(1,bytes))));
 while(undo.length>=limit)undo.shift();undo.push(copyState());
}
function restore(s){setAnimationTracks(s.animationTracks.map(t=>({name:t.name,frames:cloneFrames(t.frames)})),s.currentAnimation);layerNames=s.layerNames;layerVisible=s.layerVisible||layerNames.map(()=>true);layerLocked=s.layerLocked||layerNames.map(()=>false);selected=s.selected;activeLayer=s.activeLayer;W=s.W;H=s.H;characterPack=clonePack(s.characterPack);selected=Math.max(0,Math.min(s.selected??0,frames.length-1));if(s.palette){selectedSwatch=-1;selectedSwatchRight=-1;color=s.color;alpha=s.alpha;colorEnd=s.colorEnd??colorEnd;alphaEnd=s.alphaEnd??alphaEnd;activeColorSide=s.activeColorSide||'left';randomColorEnabled=!!s.randomColorEnabled;$('randomColor').checked=randomColorEnabled;renderPalette();renderColorPair()}if(Array.isArray(s.gradientStops)&&s.gradientStops.length){gradientStops=s.gradientStops.map(normalizeSwatch);selectedGradientStop=Math.max(0,Math.min(gradientStops.length-1,s.selectedGradientStop??0));radialInvert=!!s.radialInvert;renderGradientControls();syncToolPanels()}if(typeof s.guideGridEnabled==='boolean')guideGridEnabled=s.guideGridEnabled;
 guideCellWidth=Number.isInteger(s.guideCellWidth)?Math.max(1,Math.min(2000,s.guideCellWidth)):32;
 guideCellHeight=Number.isInteger(s.guideCellHeight)?Math.max(1,Math.min(2000,s.guideCellHeight)):32;
 guideGridColor=/^#[0-9a-f]{6}$/i.test(s.guideGridColor||'')?s.guideGridColor:'#5ac8ef';
 guideGridAlpha=Number.isFinite(s.guideGridAlpha)?Math.max(5,Math.min(100,s.guideGridAlpha)):55;
 loadIsometricSettings(s);
 loadGuideControls();setAnimationEnabled(s.animationEnabled===true);
 resetSelection();updateAnimationUI();$('width').value=W;$('height').value=H;const dimensionLabel=$('canvasDimensions');if(dimensionLabel)dimensionLabel.textContent=`${W} × ${H} px`;refresh()}
function compose(f){const visible=f.layers.filter((_,i)=>layerVisible[i]!==false);if(visible.length===1)return visible[0];const out=new Uint8ClampedArray(W*H*4);for(const l of visible){for(let i=0;i<out.length;i+=4){const a=l[i+3]/255;if(!a)continue;const b=out[i+3]/255,oa=a+b*(1-a);for(let c=0;c<3;c++)out[i+c]=Math.round((l[i+c]*a+out[i+c]*b*(1-a))/oa);out[i+3]=Math.round(oa*255)}}return out}
function imageData(data){return new ImageData(data,W,H)}
function translatedLayer(data,dx,dy){
 const result=new Uint8ClampedArray(W*H*4);
 for(let y=0;y<H;y++)for(let x=0;x<W;x++){
  const nx=x+dx,ny=y+dy;
  if(nx<0||ny<0||nx>=W||ny>=H)continue;
  const si=(y*W+x)*4,di=(ny*W+nx)*4;
  result[di]=data[si];result[di+1]=data[si+1];
  result[di+2]=data[si+2];result[di+3]=data[si+3];
 }
 return result;
}
function moveOffset(p,shiftHeld){
 let dx=p.x-moveOrigin.x,dy=p.y-moveOrigin.y;
 if(shiftHeld){if(Math.abs(dx)>=Math.abs(dy))dy=0;else dx=0}
 return {dx,dy};
}
function updateMovePreview(p,shiftHeld){
 if(!moveOrigin||!moveSource)return;
 const {dx,dy}=moveOffset(p,shiftHeld);
 moveLayers.forEach(i=>{frame().layers[i]=translatedLayer(moveSource[i],dx,dy)});
 draw();
}
function endMove(commit){
 if(!moveOrigin)return;
 if(!commit&&moveSource)moveLayers.forEach(i=>frame().layers[i]=moveSource[i]);
 moveOrigin=null;moveSource=null;moveLayers=[];dragging=false;
 refresh();
}
function drawOverlay(){
 const ow=Math.max(1,viewport.clientWidth),oh=Math.max(1,viewport.clientHeight);
 if(overlay.width!==ow||overlay.height!==oh){overlay.width=ow;overlay.height=oh}
 oc.clearRect(0,0,ow,oh);
 const z=actualZoom(),r=canvas.getBoundingClientRect(),vp=viewport.getBoundingClientRect();
 const left=r.left-vp.left,top=r.top-vp.top;
 if(left>=ow||top>=oh||left+W*z<=0||top+H*z<=0)return;
 const bounds=visiblePixelBounds(left,top,z);
 oc.save();oc.translate(left,top);oc.beginPath();oc.rect(0,0,W*z,H*z);oc.clip();
 if(grid&&z>=6){
  oc.strokeStyle='rgba(70,84,108,.44)';oc.lineWidth=1;oc.beginPath();
  for(let x=bounds.x0;x<=Math.min(W,bounds.x1+1);x++){const xx=x*z+.5;oc.moveTo(xx,0);oc.lineTo(xx,H*z)}
  for(let y=bounds.y0;y<=Math.min(H,bounds.y1+1);y++){const yy=y*z+.5;oc.moveTo(0,yy);oc.lineTo(W*z,yy)}
  oc.stroke();
 }
 // Cuadrícula de división independiente del píxel y de las exportaciones.
 // Dibujar solo las líneas visibles mantiene el coste bajo con lienzos de 2000 px.
 if(guideGridEnabled&&!isoMode){
  const sx=guideCellWidth*z,sy=guideCellHeight*z;
  oc.save();oc.strokeStyle=`rgba(${parseInt(guideGridColor.slice(1,3),16)},${parseInt(guideGridColor.slice(3,5),16)},${parseInt(guideGridColor.slice(5,7),16)},${guideGridAlpha/100})`;
  oc.lineWidth=1;oc.beginPath();
  if(sx>=3){
   const endX=Math.min(W,bounds.x1+1);
   for(let x=Math.max(0,Math.ceil(bounds.x0/guideCellWidth)*guideCellWidth);x<=endX;x+=guideCellWidth){
    const xp=Math.round(x*z)+.5;oc.moveTo(xp,0);oc.lineTo(xp,H*z);
   }
  }
  if(sy>=3){
   const endY=Math.min(H,bounds.y1+1);
   for(let y=Math.max(0,Math.ceil(bounds.y0/guideCellHeight)*guideCellHeight);y<=endY;y+=guideCellHeight){
    const yp=Math.round(y*z)+.5;oc.moveTo(0,yp);oc.lineTo(W*z,yp);
   }
  }
  oc.stroke();oc.restore();
 }
 if(isoMode&&isoGrid){
  const segments=NexusPixelIso.gridSegments(
    {x0:bounds.x0,y0:bounds.y0,x1:Math.min(W,bounds.x1+1),y1:Math.min(H,bounds.y1+1)},
    isoWidth,isoHeight,z);
  oc.save();
  oc.strokeStyle=`rgba(${parseInt(isoColor.slice(1,3),16)},${parseInt(isoColor.slice(3,5),16)},${parseInt(isoColor.slice(5,7),16)},${isoOpacity/100})`;
  oc.lineWidth=1;
  oc.beginPath();
  for(const line of segments){
    oc.moveTo(line.x0*z,line.y0*z);
    oc.lineTo(line.x1*z,line.y1*z);
  }
  oc.stroke();oc.restore();
 }
 drawSelection(z,bounds);previewPastedPixels(z);
 oc.restore();
}
function draw(){
 if(canvas.width!==W||canvas.height!==H){canvas.width=W;canvas.height=H}
 const z=actualZoom();canvas.style.width=W*z+'px';canvas.style.height=H*z+'px';
 const buf=preview||compose(frame());cx.putImageData(imageData(buf),0,0);
 drawOverlay();
}
function refresh(){draw();drawFrames();drawLayers();$('duration').value=frame().duration;updateAnimationUI();}
// Thumbnails sample 58px directly, avoiding 2000x2000 offscreen canvases per frame.
function makeThumbnail(f){
 const thumb=document.createElement('canvas');thumb.width=58;thumb.height=58;
 const data=new Uint8ClampedArray(58*58*4),scale=Math.min(58/W,58/H);
 const dw=W*scale,dh=H*scale,ox=(58-dw)/2,oy=(58-dh)/2;
 for(let ty=0;ty<58;ty++)for(let tx=0;tx<58;tx++){
  if(tx<ox||tx>=ox+dw||ty<oy||ty>=oy+dh)continue;
  const x=Math.min(W-1,Math.floor((tx-ox)/scale)),y=Math.min(H-1,Math.floor((ty-oy)/scale)),p=(y*W+x)*4,o=(ty*58+tx)*4;
  for(let li=0;li<f.layers.length;li++){
   if(layerVisible[li]===false)continue;
   const l=f.layers[li],a=l[p+3]/255;if(a===0)continue;
   const b=data[o+3]/255,oa=a+b*(1-a);
   data[o]=Math.round((l[p]*a+data[o]*b*(1-a))/oa);
   data[o+1]=Math.round((l[p+1]*a+data[o+1]*b*(1-a))/oa);
   data[o+2]=Math.round((l[p+2]*a+data[o+2]*b*(1-a))/oa);
   data[o+3]=Math.round(oa*255);
  }
 }
 thumb.getContext('2d').putImageData(new ImageData(data,58,58),0,0);
 return thumb;
}
function drawFrames(){
 if(!animationEnabled)return;
 const holder=$('frames');holder.replaceChildren();
 animationTracks.forEach((track,rowIndex)=>{
  const active=track.name===currentAnimation;
  const row=document.createElement('div');row.className='animation-track'+(active?' active':'');
  const info=document.createElement('div');info.className='animation-track-info';
  const select=document.createElement('button');select.type='button';select.className='animation-track-select';
  select.textContent=(active?'● ':'○ ')+'Fila '+(rowIndex+1);
  select.title='Seleccionar animación '+track.name;select.setAttribute('aria-pressed',String(active));
  select.onclick=()=>switchAnimation(track.name);
  const nameInput=document.createElement('input');nameInput.type='text';nameInput.className='animation-track-name';nameInput.value=track.name;
  nameInput.maxLength=40;nameInput.title='Nombre de la animación';nameInput.setAttribute('aria-label','Nombre de animación, fila '+(rowIndex+1));
  nameInput.onkeydown=e=>{if(e.key==='Enter')nameInput.blur();if(e.key==='Escape'){nameInput.value=track.name;nameInput.blur()}};
  nameInput.onchange=()=>{
   const next=nameInput.value.trim();
   if(!next||!animationNameUnique(next,track)){
    nameInput.value=track.name;msg(next?'Ya existe una animación con ese nombre':'Escribe un nombre para la animación');return;
   }
   if(next===track.name)return;
   snapshot();const wasActive=track.name===currentAnimation;
   track.name=next;if(wasActive)currentAnimation=next;
   updateAnimationUI();drawFrames();
  };
  info.append(select,nameInput);
  const strip=document.createElement('div');strip.className='frames';
  track.frames.forEach((f,i)=>{
   const b=document.createElement('button');b.type='button';b.className='frame'+(active&&i===selected?' active':'');
   b.title=track.name+' · fotograma '+(i+1)+' · '+f.duration+' ms';
   b.append(makeThumbnail(f),document.createTextNode(' '+(i+1)+' · '+f.duration+'ms'));
   b.onclick=()=>{
    if(track.name!==currentAnimation)switchAnimation(track.name);
    selected=i;activeLayer=Math.min(activeLayer,layerNames.length-1);preview=null;refresh();
   };
   strip.append(b);
  });
  row.append(info,strip);holder.append(row);
 });
}
let layerDragIndex=null;
function moveLayerItem(array,from,to){const [item]=array.splice(from,1);array.splice(to,0,item)}
function moveLayer(from,to){
 if(!Number.isInteger(from)||!Number.isInteger(to)||from===to||from<0||to<0||from>=layerNames.length||to>=layerNames.length)return;
 snapshot();
 const moving=layerNames[from];
 for(const array of [layerNames,layerVisible,layerLocked])moveLayerItem(array,from,to);
 for(const track of animationTracks)for(const f of track.frames)moveLayerItem(f.layers,from,to);
 if(activeLayer===from)activeLayer=to;
 else if(from<activeLayer&&to>=activeLayer)activeLayer--;
 else if(from>activeLayer&&to<=activeLayer)activeLayer++;
 layerDragIndex=null;refresh();
 msg('Capa «'+moving+'» movida '+(to>from?'hacia arriba':'hacia abajo'));
}
function drawLayers(){
 const holder=$('layers');holder.replaceChildren();
 layerNames.forEach((name,i)=>{
  const d=document.createElement('div');d.className='layer'+(i===activeLayer?' active':'')+(layerVisible[i]===false?' layer-hidden':'');
  const label=document.createElement('span');label.className='layer-name';label.textContent=name;label.title='Doble clic para cambiar el nombre';
  label.onclick=()=>{activeLayer=i;drawLayers()};
  label.ondblclick=()=>{const n=prompt('Nombre de capa',name);if(n){snapshot();layerNames[i]=n;drawLayers()}};
  const action=(icon,label,onClick,isActive)=>{const b=document.createElement('button');b.type='button';b.className='layer-action icon-btn'+(isActive?' active':'');b.innerHTML=nexusIcon(icon);b.dataset.tooltip=label;b.title=label;b.setAttribute('aria-label',label);b.setAttribute('aria-pressed',String(isActive));b.onclick=e=>{e.stopPropagation();onClick()};return b};
  const eye=action(layerVisible[i]===false?'eye-off':'eye',layerVisible[i]===false?'Mostrar capa':'Ocultar capa',()=>{snapshot();layerVisible[i]=!layerVisible[i];refresh()},layerVisible[i]!==false);
  const lock=action(layerLocked[i]?'lock':'lock-open',layerLocked[i]?'Desbloquear capa':'Bloquear capa',()=>{snapshot();layerLocked[i]=!layerLocked[i];refresh()},layerLocked[i]);
  const up=action('arrow-up','Subir capa',()=>moveLayer(i,i+1),false);
  const down=action('arrow-down','Bajar capa',()=>moveLayer(i,i-1),false);
  up.disabled=i===layerNames.length-1;down.disabled=i===0;
  const grip=document.createElement('span');grip.className='layer-grip';grip.draggable=true;
  grip.textContent='⠿';grip.title='Arrastrar para reorganizar capas';
  grip.setAttribute('aria-label','Arrastrar capa '+name);
  grip.ondragstart=e=>{layerDragIndex=i;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(i));d.classList.add('layer-dragging')};
  grip.ondragend=()=>{layerDragIndex=null;holder.querySelectorAll('.layer').forEach(el=>el.classList.remove('layer-dragging','layer-drop-target'))};
  d.ondragover=e=>{if(layerDragIndex===null)return;e.preventDefault();e.dataTransfer.dropEffect='move';d.classList.add('layer-drop-target')};
  d.ondragleave=e=>{if(!d.contains(e.relatedTarget))d.classList.remove('layer-drop-target')};
  d.ondrop=e=>{if(layerDragIndex===null)return;e.preventDefault();e.stopPropagation();const from=layerDragIndex;layerDragIndex=null;moveLayer(from,i)};
  d.append(grip,eye,lock,label,up,down);d.onclick=()=>{activeLayer=i;drawLayers()};holder.prepend(d)
 });
}
function blendPixel(data,x,y,rgbaColor){if(x<0||y<0||x>=W||y>=H||!inSelection(x,y))return;const p=(y*W+x)*4;const sr=rgbaColor[0],sg=rgbaColor[1],sb=rgbaColor[2],sa=(rgbaColor[3]??255)/255; if(sa<=0)return; const dr=data[p],dg=data[p+1],db=data[p+2],da=(data[p+3]??0)/255; const outA=sa + da*(1-sa); if(outA<=0){data[p]=data[p+1]=data[p+2]=data[p+3]=0;return} data[p]=Math.round((sr*sa + dr*da*(1-sa))/outA); data[p+1]=Math.round((sg*sa + dg*da*(1-sa))/outA); data[p+2]=Math.round((sb*sa + db*da*(1-sa))/outA); data[p+3]=Math.round(outA*255)}
function clearPixel(data,x,y){if(x<0||y<0||x>=W||y>=H||!inSelection(x,y))return;const p=(y*W+x)*4;data[p]=data[p+1]=data[p+2]=data[p+3]=0}
function setPixel(data,x,y,rgbaColor){blendPixel(data,x,y,rgbaColor)}
function beginPaintStroke(){strokePainted=new Uint8Array(W*H)}
function endPaintStroke(){strokePainted=null}
function strokeBlendPixel(data,x,y,rgbaColor){
 if(x<0||y<0||x>=W||y>=H||!inSelection(x,y))return;
 const i=y*W+x;
 if(strokePainted&&strokePainted[i])return;
 if(rgbaColor[3]===0)return;
 if(strokePainted)strokePainted[i]=1;
 blendPixel(data,x,y,rgbaColor);
}
function put(x,y,erase=false){const dst=layer(),col=paintColor();brushStamp(x,y,(px,py)=>{if(erase){clearPixel(dst,px,py);if(mirror)clearPixel(dst,W-1-px,py)}else{strokeBlendPixel(dst,px,py,col);if(mirror)strokeBlendPixel(dst,W-1-px,py,col)}})}
function line(x0,y0,x1,y1,cb){let dx=Math.abs(x1-x0),dy=Math.abs(y1-y0),sx=x0<x1?1:-1,sy=y0<y1?1:-1,e=dx-dy;while(true){cb(x0,y0);if(x0===x1&&y0===y1)break;const a=2*e;if(a>-dy){e-=dy;x0+=sx}if(a<dx){e+=dx;y0+=sy}}}
// Shift: mantener la misma anchura y altura desde el punto inicial.
// El límite de cada eje evita dibujar un círculo/cuadrado cortado por el borde.
function snapIsometricLine(p){
 if(!isoMode||!isoSnap||tool!=='line'||!start)return p;
 return NexusPixelIso.snapLine(start,p,isoWidth,isoHeight,W,H);
}
function squareShapeEnd(p,shiftHeld){
 if(!shiftHeld||!start||(tool!=='rect'&&tool!=='ellipse'))return p;
 const dx=p.x-start.x,dy=p.y-start.y;
 const sx=dx<0?-1:1,sy=dy<0?-1:1;
 const roomX=sx<0?start.x:W-1-start.x;
 const roomY=sy<0?start.y:H-1-start.y;
 const side=Math.min(Math.max(Math.abs(dx),Math.abs(dy)),roomX,roomY);
 return {x:start.x+sx*side,y:start.y+sy*side};
}
let lastShapePointer=null,shapeShiftHeld=false;
function renderShapePreview(p,shiftHeld){
 if(!start||!p||!dragging)return;
 const end=squareShapeEnd(p,shiftHeld);
 const saved=new Uint8ClampedArray(layer());
 shape(start.x,start.y,end.x,end.y,tool);
 preview=new Uint8ClampedArray(compose(frame()));
 layer().set(saved);draw();preview=null;
}
function shape(x0,y0,x1,y1,kind){const col=paintColor(),visited=new Uint8Array(W*H),set=(x,y)=>brushStamp(x,y,(px,py)=>{const stamp=(xx)=>{if(xx<0||xx>=W||py<0||py>=H||!inSelection(xx,py))return;const i=py*W+xx;if(visited[i])return;visited[i]=1;blendPixel(layer(),xx,py,col)};stamp(px);if(mirror)stamp(W-1-px)});if(kind==='line')line(x0,y0,x1,y1,set);if(kind==='iso-diamond'){const pts=NexusPixelIso.diamond({x:x0,y:y0},{x:x1,y:y1},isoWidth,isoHeight,W,H);for(let i=0;i<4;i++){const a=pts[i],b=pts[(i+1)%4];line(a.x,a.y,b.x,b.y,set)}}if(kind==='rect'){line(x0,y0,x1,y0,set);line(x1,y0,x1,y1,set);line(x1,y1,x0,y1,set);line(x0,y1,x0,y0,set)}if(kind==='ellipse'){let a=Math.min(x0,x1),b=Math.max(x0,x1),c=Math.min(y0,y1),d=Math.max(y0,y1),rx=Math.max((b-a)/2,.01),ry=Math.max((d-c)/2,.01),mx=(a+b)/2,my=(c+d)/2;let prev=null;for(let k=0;k<=Math.max(32,Math.ceil(2*Math.PI*Math.max(rx,ry)*3));k++){let t=k/Math.max(32,Math.ceil(2*Math.PI*Math.max(rx,ry)*3))*Math.PI*2,p=[Math.round(mx+rx*Math.cos(t)),Math.round(my+ry*Math.sin(t))];if(prev)line(prev[0],prev[1],p[0],p[1],set);else set(...p);prev=p}}}
function fill(x,y){if(!inSelection(x,y))return;const data=layer(),p=(y*W+x)*4,src=Array.from(data.subarray(p,p+4)),dst=paintColor();if(src.every((v,i)=>v===dst[i]))return;const st=[y*W+x],seen=new Uint8Array(W*H);while(st.length){const n=st.pop();if(seen[n])continue;seen[n]=1;const px=n%W,py=(n/W)|0;if(!inSelection(px,py))continue;const ix=n*4;if(!src.every((v,i)=>v===data[ix+i]))continue;data.set(dst,ix);if(px>0)st.push(n-1);if(px+1<W)st.push(n+1);if(py>0)st.push(n-W);if(py+1<H)st.push(n+W)}}
function gradientRGBAAt(t){
 t=Math.max(0,Math.min(1,t));
 if(!gradientStops.length)return [0,0,0,0];
 if(gradientStops.length===1){const s=gradientStops[0];return rgba(s.hex,s.alpha)}
 const seg=t*(gradientStops.length-1),i=Math.min(gradientStops.length-2,Math.floor(seg)),f=seg-i;
 const a=rgba(gradientStops[i].hex,gradientStops[i].alpha),b=rgba(gradientStops[i+1].hex,gradientStops[i+1].alpha);
 return a.map((v,c)=>Math.round(v+(b[c]-v)*f))
}
function applyGradient(x0,y0,x1,y1,kind){
 const dx=x1-x0,dy=y1-y0,length2=dx*dx+dy*dy;
 const radius=Math.sqrt(length2)||1,base=layer();
 for(let y=0;y<H;y++)for(let x=0;x<W;x++){
  if(!inSelection(x,y))continue;
  let f=0;
  if(kind==='gradient-linear'){
   const t=length2?((x-x0)*dx+(y-y0)*dy)/length2:0;
   f=Math.max(0,Math.min(1,t));
  }else{
   const dist=Math.hypot(x-x0,y-y0);
   if(radialInvert){
    if(dist>radius)continue;
    f=1-Math.max(0,Math.min(1,dist/radius));
   }else{
    f=Math.max(0,Math.min(1,dist/radius));
   }
  }
  // Un degradado es un tinte: la opacidad del color entrante
  // se compone sobre la pintura existente, nunca la reemplaza.
  // Alfa 0 no altera el color, ni vuelve transparentes los píxeles.
  const col=gradientRGBAAt(f);
  if(col[3]>0)blendPixel(base,x,y,col);
 }
}
function sprayAt(cx0,cy0){const dst=layer();const col=paintColor();for(let i=0;i<sprayDensity;i++){const ang=Math.random()*Math.PI*2;const dist=Math.sqrt(Math.random())*sprayRadius;const x=Math.round(cx0+Math.cos(ang)*dist),y=Math.round(cy0+Math.sin(ang)*dist);strokeBlendPixel(dst,x,y,col);if(mirror)strokeBlendPixel(dst,W-1-x,y,col)}}
function position(e){const b=canvas.getBoundingClientRect();return {x:Math.max(0,Math.min(W-1,Math.floor((e.clientX-b.left)/b.width*W))),y:Math.max(0,Math.min(H-1,Math.floor((e.clientY-b.top)/b.height*H)))}}
canvas.oncontextmenu=e=>e.preventDefault();canvas.onpointerdown=e=>{if((e.button!==0&&e.button!==2)||panPointer||(e.pointerType==='touch'&&mobilePanEnabled))return;if(pastePlacement){if(e.button===0)commitPaste();return}strokeSide=e.pointerType==='touch'?mobilePaintSide:(e.button===2?'right':'left');if(playing)togglePlay();const p=position(e);if(tool==='move'){
 if(e.button!==0)return;
 const targets=frame().layers.map((_,i)=>i).filter(i=>layerVisible[i]!==false);
 if(!targets.length){msg('No hay capas visibles para mover');return}
 if(targets.some(i=>layerLocked[i])){msg('Desbloquea las capas visibles antes de mover el dibujo');return}
 snapshot();moveLayers=targets;moveSource={};
 targets.forEach(i=>moveSource[i]=new Uint8ClampedArray(frame().layers[i]));
 moveOrigin=p;dragging=true;start=last=p;canvas.setPointerCapture(e.pointerId);
 return;
 }if(tool==='picker'){const d=compose(frame()),i=(p.y*W+p.x)*4;if(d[i+3]){selectColor('#'+Array.from(d.slice(i,i+3)).map(n=>n.toString(16).padStart(2,'0')).join(''));setAlpha(d[i+3])}return}if(tool==='select-magic'){if(e.button===2)return;const newMask=buildMagicMask(layer(),p.x,p.y);selectionMask=combineSelectionMasks(selectionMask,newMask,!!e.shiftKey);selectionPreview=null;syncSelectionControls();draw();msg('Selección mágica: '+selectionCount(selectionMask)+' px');return}if(tool==='select-rect'){if(e.button===2)return;dragging=true;start=last=p;selectionAddMode=!!e.shiftKey;selectionPreview={type:'rect',x0:p.x,y0:p.y,x1:p.x,y1:p.y};canvas.setPointerCapture(e.pointerId);draw();return}if(tool==='select-lasso'){if(e.button===2)return;dragging=true;start=last=p;selectionAddMode=!!e.shiftKey;lassoPoints=[p];selectionPreview={type:'lasso',points:[...lassoPoints]};canvas.setPointerCapture(e.pointerId);draw();return}if(shouldRandomizeColor(tool)){const side=strokeSide,val=sideValues(side);assignSide(side,randomHexColor(),val.alpha,-1)}if(layerLocked[activeLayer]){msg('Capa bloqueada: desbloquéala para editar');return}if(layerVisible[activeLayer]===false){msg('Capa oculta: muéstrala para editar');return}snapshot();dragging=true;canvas.setPointerCapture(e.pointerId);start=last=p;lastShapePointer=p;shapeShiftHeld=!!e.shiftKey;if(tool==='pencil'||tool==='spray')beginPaintStroke();else endPaintStroke();if(tool==='fill'){fill(p.x,p.y);dragging=false;endPaintStroke();refresh()}else if(tool==='pencil'||tool==='eraser'){put(p.x,p.y,tool==='eraser');draw()}else if(tool==='spray'){sprayAt(p.x,p.y);draw()}};
canvas.onpointermove=e=>{if(pastePlacement&&!panPointer){const p=position(e);pastePlacement.x=p.x;pastePlacement.y=p.y;draw();return}if(!dragging||panPointer)return;const p=position(e);if(tool==='move'){updateMovePreview(p,e.shiftKey);return}if(tool==='select-rect'){selectionPreview={type:'rect',x0:start.x,y0:start.y,x1:p.x,y1:p.y};draw();return}if(tool==='select-lasso'){let pts=[];line(last.x,last.y,p.x,p.y,(x,y)=>pts.push({x,y}));lassoPoints.push(...pts.slice(1));last=p;selectionPreview={type:'lasso',points:[...lassoPoints]};draw();return}if(tool==='spray'){sprayAt(p.x,p.y);last=p;draw();return}if(tool==='pencil'||tool==='eraser'){line(last.x,last.y,p.x,p.y,(x,y)=>put(x,y,tool==='eraser'));last=p;draw()}else{lastShapePointer=p;shapeShiftHeld=!!e.shiftKey;if(tool==='rect'||tool==='ellipse'||tool==='iso-diamond'){renderShapePreview(p,shapeShiftHeld)}else{const save=new Uint8ClampedArray(layer());if(tool.startsWith('gradient-'))applyGradient(start.x,start.y,p.x,p.y,tool);else{const end=snapIsometricLine(p);shape(start.x,start.y,end.x,end.y,tool)}preview=new Uint8ClampedArray(compose(frame()));layer().set(save);draw();preview=null}}};
canvas.onpointerup=e=>{if(!dragging||panPointer)return;const p=position(e);if(tool==='move'){updateMovePreview(p,e.shiftKey);endMove(true);msg('Dibujo movido');return}if(tool==='select-rect'){const newMask=buildRectMask(start.x,start.y,p.x,p.y);selectionMask=combineSelectionMasks(selectionMask,newMask,selectionAddMode||!!e.shiftKey);selectionPreview=null;dragging=false;selectionAddMode=false;syncSelectionControls();draw();msg('Selección rectangular: '+selectionCount(selectionMask)+' px');return}if(tool==='select-lasso'){let pts=[];line(last.x,last.y,p.x,p.y,(x,y)=>pts.push({x,y}));lassoPoints.push(...pts.slice(1));const newMask=buildPolygonMask(lassoPoints);selectionMask=combineSelectionMasks(selectionMask,newMask,selectionAddMode||!!e.shiftKey);selectionPreview=null;dragging=false;selectionAddMode=false;syncSelectionControls();draw();msg('Selección libre: '+selectionCount(selectionMask)+' px');return}if(tool==='spray'){dragging=false;endPaintStroke();preview=null;refresh();return}if(tool.startsWith('gradient-'))applyGradient(start.x,start.y,p.x,p.y,tool);else if(['line','rect','ellipse','iso-diamond'].includes(tool)){const end=tool==='line'?snapIsometricLine(p):squareShapeEnd(p,!!e.shiftKey||shapeShiftHeld);shape(start.x,start.y,end.x,end.y,tool)}dragging=false;lastShapePointer=null;shapeShiftHeld=false;endPaintStroke();preview=null;refresh()};
canvas.onpointercancel=()=>{selectionAddMode=false;if(moveOrigin){endMove(false);return}dragging=false;lastShapePointer=null;shapeShiftHeld=false;endPaintStroke();preview=null;selectionPreview=null;refresh()};
function normalizeSwatch(v){
 if(typeof v==='string')v={hex:v,alpha:255};
 if(!v||typeof v.hex!=='string'||!/^#[0-9a-fA-F]{6}$/.test(v.hex)||!Number.isFinite(Number(v.alpha)))throw Error('Muestra RGBA incorrecta');
 return {hex:v.hex.toLowerCase(),alpha:Math.max(0,Math.min(255,Math.round(Number(v.alpha))))};
}
function rgbaCSS(hex,a){return `linear-gradient(rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${a/255}),rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${a/255})),repeating-conic-gradient(#b8bcc5 0 25%,#f7f7f7 0 50%) 0 0 / 10px 10px`}
function sideValues(side){return side==='right'?{hex:colorEnd,alpha:alphaEnd}:{hex:color,alpha}}
function paintColor(){const v=sideValues(strokeSide);return rgba(v.hex,v.alpha)}
function renderColorPair(){
 for(const [side,id] of [['left','primaryColorPreview'],['right','secondaryColorPreview']]){
  const node=$(id),v=sideValues(side);node.classList.toggle('active',activeColorSide===side);
  node.querySelector('.chip-fill').style.background=rgbaCSS(v.hex,v.alpha);
  node.title=(side==='left'?'Izquierdo':'Derecho')+' · '+v.hex+' · '+Math.round(v.alpha/255*100)+'%';
 }
 const v=sideValues(activeColorSide);$('editingColorLabel').textContent='Color · '+(activeColorSide==='left'?'Izquierdo':'Derecho');
 $('activeColor').value=v.hex;$('activeAlpha').value=Math.round(v.alpha/255*100);$('activeAlphaValue').textContent=Math.round(v.alpha/255*100)+'%';
}
function chooseColorSide(side){activeColorSide=side;renderColorPair()}
function assignSide(side,hex,a,index=-1){
 hex=hex.toLowerCase();a=Math.max(0,Math.min(255,Math.round(a)));
 if(side==='right'){colorEnd=hex;alphaEnd=a;selectedSwatchRight=index}
 else{color=hex;alpha=a;selectedSwatch=index}
 activeColorSide=side;renderPalette();renderColorPair();
}
function persistPaletteLibrary(){
 if(!NexusPixelPaletteLibrary.save(paletteLibrary))msg('No se pudo guardar la biblioteca en este navegador. Expórtala como respaldo.');
}
function renderPaletteLibrary(){
 const holder=$('paletteLibrarySelect');holder.replaceChildren();
 for(const item of paletteLibrary.palettes){
  const option=document.createElement('option');
  option.value=item.id;option.textContent=item.name;holder.append(option);
 }
 holder.value=paletteLibrary.activeId;
 $('paletteLibraryCount').textContent=paletteLibrary.palettes.length+'/48 paletas';
 $('deletePalette').disabled=paletteLibrary.palettes.length===1;
}
function activatePaletteLibrary(id,save=true){
 const entry=NexusPixelPaletteLibrary.choose(paletteLibrary,id);
 palette=entry.swatches;
 selectedSwatch=-1;selectedSwatchRight=-1;
 renderPaletteLibrary();renderPalette();renderColorPair();
 if(save)persistPaletteLibrary();
}
function addPaletteLibrary(name,colors){
 const item=NexusPixelPaletteLibrary.add(paletteLibrary,name,colors);
 activatePaletteLibrary(item.id);
 return item;
}
function importProjectPalette(v){
 if(!Array.isArray(v.palette)||v.palette.length>128)return;
 const fromProject=NexusPixelPaletteLibrary.swatches(v.palette);
 const byId=paletteLibrary.palettes.find(p=>p.id===v.paletteLibraryId);
 const same=(p)=>p&&JSON.stringify(p.swatches)===JSON.stringify(fromProject);
 let selected=same(byId)?byId:NexusPixelPaletteLibrary.matching(paletteLibrary,fromProject);
 if(!selected){
  try{
   const projectName=typeof v.paletteName==='string'&&v.paletteName.trim()
     ?v.paletteName.trim().slice(0,48):'Paleta del proyecto';
   selected=NexusPixelPaletteLibrary.add(paletteLibrary,projectName,fromProject);
  }catch(error){msg('Biblioteca llena: no se pudo añadir la paleta del proyecto');return;}
 }
 activatePaletteLibrary(selected.id);
}
$('paletteLibrarySelect').onchange=e=>{
 try{activatePaletteLibrary(e.target.value);msg('Paleta activa: '+NexusPixelPaletteLibrary.active(paletteLibrary).name)}
 catch(err){alert(err.message);renderPaletteLibrary()}
};
$('newPalette').onclick=()=>{
 const title=prompt('Nombre para la nueva paleta:','Nueva paleta');
 if(title===null)return;
 try{const item=addPaletteLibrary(title,[]);msg('Nueva paleta activa: '+item.name)}
 catch(error){alert(error.message)}
};
$('renamePalette').onclick=()=>{
 const current=NexusPixelPaletteLibrary.active(paletteLibrary);
 const title=prompt('Renombrar paleta:',current.name);
 if(title===null)return;
 try{NexusPixelPaletteLibrary.rename(paletteLibrary,current.id,title);renderPaletteLibrary();persistPaletteLibrary();msg('Paleta renombrada')}
 catch(error){alert(error.message)}
};
$('deletePalette').onclick=()=>{
 const current=NexusPixelPaletteLibrary.active(paletteLibrary);
 if(!confirm('¿Eliminar la paleta «'+current.name+'» de la biblioteca?'))return;
 try{NexusPixelPaletteLibrary.remove(paletteLibrary,current.id);activatePaletteLibrary(paletteLibrary.activeId);msg('Paleta eliminada')}
 catch(error){alert(error.message)}
};
$('exportPaletteLibrary').onclick=()=>{
 download(JSON.stringify(paletteLibrary,null,2),'nexus-pixel-biblioteca-paletas.json','application/json');
 msg('Biblioteca exportada: '+paletteLibrary.palettes.length+' paletas');
};
$('importPaletteLibrary').onclick=()=>$('paletteLibraryFile').click();
$('paletteLibraryFile').onchange=async e=>{
 try{
  const file=e.target.files[0];if(!file)return;
  if(file.size>512*1024)throw Error('El archivo supera 512 KB');
  const incoming=JSON.parse(await file.text());
  NexusPixelPaletteLibrary.importLibrary(paletteLibrary,incoming);
  activatePaletteLibrary(paletteLibrary.activeId);
  msg('Biblioteca importada: '+paletteLibrary.palettes.length+' paletas disponibles');
 }catch(error){alert('No se pudo importar la biblioteca: '+error.message)}
 finally{e.target.value=''}
};
function renderPalette(){
 const holder=$('palette');holder.replaceChildren();
 palette.forEach((entry,i)=>{
  const b=document.createElement('button');b.type='button';b.className='swatch'+(selectedSwatch===i?' is-primary':'')+(selectedSwatchRight===i?' is-secondary':'');
  b.title=entry.hex+' · '+Math.round(entry.alpha/255*100)+'% · Izquierdo/ derecho para asignar';
  b.setAttribute('aria-label',b.title);
  const preview=document.createElement('span');preview.className='swatch-color';preview.style.background=rgbaCSS(entry.hex,entry.alpha);
  b.append(preview);b.onclick=()=>assignSide('left',entry.hex,entry.alpha,i);
  b.oncontextmenu=e=>{e.preventDefault();assignSide('right',entry.hex,entry.alpha,i)};
  holder.append(b);
 });
}
function applyColor(c,a=alpha){assignSide('left',c,a,-1)}
function selectSwatch(i,side='left'){if(!palette[i])return;assignSide(side,palette[i].hex,palette[i].alpha,i)}
function selectColor(c){assignSide(strokeSide,c,sideValues(strokeSide).alpha,-1)}
function randomHexColor(){return '#'+Math.floor(Math.random()*16777216).toString(16).padStart(6,'0')}
function shouldRandomizeColor(currentTool){return randomColorEnabled && ['pencil','spray','fill','line','rect','ellipse'].includes(currentTool)}
$('randomColor').onchange=e=>{randomColorEnabled=e.target.checked;msg(randomColorEnabled?'Color aleatorio activado':'Color aleatorio desactivado')}
function setAlpha(value){const v=sideValues(strokeSide);assignSide(strokeSide,v.hex,value,-1)}
function openColorPopup(side){
 const popup=$('colorPopup'), wasOpen=!popup.hidden, same=activeColorSide===side;
 chooseColorSide(side);
 popup.hidden=wasOpen&&same;
}
$('primaryColorPreview').onclick=()=>openColorPopup('left');
$('secondaryColorPreview').onclick=()=>openColorPopup('right');
$('closeColorPopup').onclick=()=>$('colorPopup').hidden=true;
document.addEventListener('pointerdown',e=>{
 if(!$('colorPopup').hidden&&!e.target.closest('#colorPopup')&&!e.target.closest('.color-pair'))$('colorPopup').hidden=true;
});
$('swapColors').onclick=()=>{const left={hex:color,alpha},right={hex:colorEnd,alpha:alphaEnd};const leftIndex=selectedSwatch;assignSide('left',right.hex,right.alpha,selectedSwatchRight);assignSide('right',left.hex,left.alpha,leftIndex);msg('Colores intercambiados')};
$('activeColor').oninput=e=>{const v=sideValues(activeColorSide);assignSide(activeColorSide,e.target.value,v.alpha,-1)};
$('activeAlpha').oninput=e=>{const v=sideValues(activeColorSide);assignSide(activeColorSide,v.hex,Math.round(Number(e.target.value)*255/100),-1)};
$('addSwatch').onclick=()=>{if(palette.length>=128){msg('Máximo de 128 muestras');return}const v=sideValues(activeColorSide);palette.push({...v});selectSwatch(palette.length-1,activeColorSide);persistPaletteLibrary();msg('Color de pintura guardado en la paleta activa')};
$('removeSwatch').onclick=()=>{const i=activeColorSide==='left'?selectedSwatch:selectedSwatchRight;if(i<0||i>=palette.length){msg('Selecciona una muestra de la paleta');return}palette.splice(i,1);selectedSwatch=selectedSwatch===i?-1:selectedSwatch>i?selectedSwatch-1:selectedSwatch;selectedSwatchRight=selectedSwatchRight===i?-1:selectedSwatchRight>i?selectedSwatchRight-1:selectedSwatchRight;renderPalette();persistPaletteLibrary();msg('Muestra eliminada')};
$('savePalette').onclick=()=>{
 const active=NexusPixelPaletteLibrary.active(paletteLibrary);
 download(JSON.stringify({type:'nexus-pixel-palette',version:1,name:active.name,swatches:palette},null,2),'nexus-pixel-paleta.json','application/json');
 msg('Paleta «'+active.name+'» exportada');
};
$('openPalette').onclick=()=>$('paletteFile').click();
$('paletteFile').onchange=async e=>{try{
 const file=e.target.files[0];if(!file)return;
 if(file.size>512*1024)throw Error('El archivo supera 512 KB');
 const obj=JSON.parse(await file.text());
 const displayName=(file.name||'Paleta importada').replace(/\.json$/i,'').slice(0,48);
 const imported=NexusPixelPaletteLibrary.importPalette(paletteLibrary,obj,displayName);
 activatePaletteLibrary(imported.id);
 msg('Paleta importada y activada: '+imported.name);
}catch(err){alert('Error al importar la paleta: '+err.message)}finally{e.target.value=''}};
renderPaletteLibrary();renderPalette();renderColorPair();persistPaletteLibrary();
function renderGradientControls(){
 const strip=$('gradientStrip');strip.replaceChildren();
 gradientStops.forEach((stop,i)=>{const b=document.createElement('button');b.type='button';b.className='gradient-stop'+(selectedGradientStop===i?' active':'');b.title='Color '+(i+1)+' · '+stop.hex+' · '+Math.round(stop.alpha/255*100)+'%';const fill=document.createElement('span');fill.className='swatch-color';fill.style.background=rgbaCSS(stop.hex,stop.alpha);b.append(fill);b.onclick=()=>{selectedGradientStop=i;renderGradientControls()};strip.append(b)});
 const current=gradientStops[selectedGradientStop]||gradientStops[0];
 $('gradientColor').value=current.hex;$('gradientAlpha').value=Math.round(current.alpha/255*100);$('gradientAlphaValue').textContent=Math.round(current.alpha/255*100)+'%';
 $('invertRadial').checked=radialInvert;
 const stopsCss=gradientStops.map((s,i)=>{const pos=(gradientStops.length===1?0:i/(gradientStops.length-1))*100;return `rgba(${parseInt(s.hex.slice(1,3),16)},${parseInt(s.hex.slice(3,5),16)},${parseInt(s.hex.slice(5,7),16)},${s.alpha/255}) ${pos}%`}).join(', ');
 $('gradientPreviewBar').style.background=`linear-gradient(90deg, ${stopsCss}), repeating-conic-gradient(#9aa1ac 0 25%,#fff 0 50%) 50%/10px 10px`;
}
function updateGradientStop(partial){if(!gradientStops.length)gradientStops=[{hex:'#38bdf8',alpha:255}];gradientStops[selectedGradientStop]={...gradientStops[selectedGradientStop],...partial};renderGradientControls()}
$('addGradientStop').onclick=()=>{if(gradientStops.length>=8){msg('Máximo de 8 colores en el degradado');return}const src=sideValues(activeColorSide);gradientStops.splice(selectedGradientStop+1,0,{hex:src.hex,alpha:src.alpha});selectedGradientStop=Math.min(gradientStops.length-1,selectedGradientStop+1);renderGradientControls();msg('Color añadido al degradado')};
$('removeGradientStop').onclick=()=>{if(gradientStops.length<=2){msg('El degradado necesita al menos 2 colores');return}gradientStops.splice(selectedGradientStop,1);selectedGradientStop=Math.max(0,Math.min(selectedGradientStop,gradientStops.length-1));renderGradientControls();msg('Color eliminado del degradado')};
$('gradientColor').oninput=e=>updateGradientStop({hex:e.target.value.toLowerCase()});
$('gradientAlpha').oninput=e=>updateGradientStop({alpha:Math.round(Number(e.target.value)*255/100)});
$('invertRadial').onchange=e=>{radialInvert=e.target.checked};
renderGradientControls();
selectSwatch(selectedSwatch);
syncToolPanels();
$('sprayRadius').oninput=e=>{sprayRadius=Number(e.target.value);$('sprayRadiusValue').textContent=sprayRadius};
$('sprayDensity').oninput=e=>{sprayDensity=Number(e.target.value);$('sprayDensityValue').textContent=sprayDensity};
function isGradientTool(t){return t==='gradient-linear'||t==='gradient-radial'}
function syncToolPanels(){const showGradient=isGradientTool(tool),showSpray=tool==='spray';$('gradientSection').hidden=!showGradient;$('colorSection').hidden=showGradient;$('sprayControls').hidden=!showSpray;syncSelectionControls();if(showGradient)$('colorPopup').hidden=true}
function selectTool(t){if(t==='iso-diamond'&&!isoMode)return;tool=t;canvas.classList.toggle('move-tool',t==='move');document.querySelectorAll('[data-tool]').forEach(b=>b.classList.toggle('active',b.dataset.tool===t));syncToolPanels()}
document.querySelectorAll('[data-tool]').forEach(b=>b.onclick=()=>selectTool(b.dataset.tool));
new ResizeObserver(()=>{if(zoom===0){panX=0;panY=0;applyPan()}draw()}).observe(viewport);
$('zoom').oninput=e=>setZoom(Number(e.target.value));$('grid').onchange=e=>{grid=e.target.checked;draw()};$('mirror').onchange=e=>mirror=e.target.checked;
$('undo').onclick=()=>{if(!undo.length)return;redo.push(copyState());restore(undo.pop())};$('redo').onclick=()=>{if(!redo.length)return;undo.push(copyState());restore(redo.pop())};
$('addFrame').onclick=()=>{try{ensureProjectSize(W,H,layerNames.length,frames.length+1)}catch(e){msg(e.message);return}snapshot();const duration=frame().duration;frames.splice(++selected,0,{duration,layers:layerNames.map(blank)});refresh()};
$('duplicateFrame').onclick=()=>{try{ensureProjectSize(W,H,layerNames.length,frames.length+1)}catch(e){msg(e.message);return}snapshot();const f=frame();frames.splice(++selected,0,{duration:f.duration,layers:f.layers.map(l=>new Uint8ClampedArray(l))});refresh()};
$('deleteFrame').onclick=()=>{if(frames.length===1){msg('Debe existir al menos un fotograma');return}snapshot();frames.splice(selected,1);selected=Math.min(selected,frames.length-1);refresh()};
$('duration').onchange=e=>{frame().duration=Math.max(20,Math.min(5000,Number(e.target.value)||150));drawFrames();if(playing){clearTimeout(timer);tick()}};
function tick(){if(!playing)return;timer=setTimeout(()=>{selected=(selected+1)%frames.length;refresh();tick()},frame().duration)}
function setAnimationEnabled(next){
 animationEnabled=!!next;
 if(!animationEnabled&&playing)togglePlay();
 $('animationPanel').hidden=!animationEnabled;
 const button=$('toggleAnimation');
 button.setAttribute('aria-pressed',String(animationEnabled));
 const label=animationEnabled?'Ocultar animación':'Mostrar animación';
 button.dataset.tooltip=label;button.setAttribute('aria-label',label);
 if(!animationEnabled)$('frames').replaceChildren();
 // The viewport may change height when the timeline appears/disappears.
 requestAnimationFrame(()=>{if(zoom===0){panX=0;panY=0;applyPan()}draw();if(animationEnabled)drawFrames()});
}
$('toggleAnimation').onclick=()=>setAnimationEnabled(!animationEnabled);
function loadIsometricSettings(state){
 if(state){
  isoMode=state.isoMode===true;
  isoGrid=state.isoGrid!==false;
  isoWidth=NexusPixelIso.step(state.isoWidth,32);
  isoHeight=NexusPixelIso.step(state.isoHeight,16);
  isoColor=/^#[0-9a-f]{6}$/i.test(state.isoColor||'')?state.isoColor:'#5ac8ef';
  isoOpacity=Number.isFinite(state.isoOpacity)?Math.max(5,Math.min(100,state.isoOpacity)):55;
  isoSnap=state.isoSnap!==false;
 }
 $('isoMode').checked=isoMode;
 $('isoSettings').hidden=!isoMode;
 $('isoGrid').checked=isoGrid;
 $('isoWidth').value=isoWidth;$('isoHeight').value=isoHeight;
 $('isoColor').value=isoColor;$('isoOpacity').value=isoOpacity;
 $('isoOpacityValue').textContent=isoOpacity+'%';
 $('isoSnap').checked=isoSnap;
 $('isoDiamondTool').hidden=!isoMode;
 if(!isoMode&&tool==='iso-diamond')selectTool('pencil');
 drawOverlay();
}
function applyIsometricSettings(){
 isoMode=$('isoMode').checked;
 isoGrid=$('isoGrid').checked;
 isoWidth=NexusPixelIso.step($('isoWidth').value,32);
 isoHeight=NexusPixelIso.step($('isoHeight').value,16);
 isoColor=$('isoColor').value;
 isoOpacity=Math.max(5,Math.min(100,Number($('isoOpacity').value)||55));
 isoSnap=$('isoSnap').checked;
 loadIsometricSettings();
}
for(const id of ['isoMode','isoGrid','isoWidth','isoHeight','isoColor','isoOpacity','isoSnap']){
 $(id).addEventListener(id==='isoWidth'||id==='isoHeight'?'change':'input',applyIsometricSettings);
}
function applyGuideControls(){
 guideGridEnabled=$('guideGrid').checked;
 $('guideGrid').closest('.line').nextElementSibling.hidden=!guideGridEnabled;
 guideCellWidth=Math.max(1,Math.min(2000,Math.round(Number($('guideWidth').value)||32)));
 guideCellHeight=Math.max(1,Math.min(2000,Math.round(Number($('guideHeight').value)||32)));
 $('guideWidth').value=guideCellWidth;$('guideHeight').value=guideCellHeight;
 guideGridColor=$('guideColor').value;
 guideGridAlpha=Math.max(5,Math.min(100,Number($('guideOpacity').value)||55));
 $('guideOpacityValue').textContent=guideGridAlpha+'%';
 drawOverlay();
}
function loadGuideControls(){
 $('guideGrid').checked=guideGridEnabled;$('guideWidth').value=guideCellWidth;$('guideHeight').value=guideCellHeight;
 $('guideColor').value=guideGridColor;$('guideOpacity').value=guideGridAlpha;
 $('guideOpacityValue').textContent=guideGridAlpha+'%';
 $('guideGrid').closest('.line').nextElementSibling.hidden=!guideGridEnabled;
 drawOverlay();
}
for(const id of ['guideGrid','guideWidth','guideHeight','guideColor','guideOpacity']){
 $(id).addEventListener(id==='guideWidth'||id==='guideHeight'?'change':'input',applyGuideControls);
}
setAnimationEnabled(false);
loadGuideControls();
loadIsometricSettings();
function togglePlay(){playing=!playing;$('play').innerHTML=nexusIcon(playing?'square':'play');$('play').dataset.tooltip=playing?'Detener animación':'Reproducir animación';$('play').setAttribute('aria-label',$('play').dataset.tooltip);clearTimeout(timer);if(playing)tick()}
$('play').onclick=togglePlay;
$('addLayer').onclick=()=>{try{ensureProjectSize(W,H,layerNames.length+1,frames.length)}catch(e){msg(e.message);return}snapshot();layerNames.push('Capa '+(layerNames.length+1));layerVisible.push(true);layerLocked.push(false);animationTracks.forEach(t=>t.frames.forEach(f=>f.layers.push(blank())));activeLayer=layerNames.length-1;refresh()};
$('deleteLayer').onclick=()=>{if(layerNames.length===1){msg('Debe existir una capa');return}snapshot();layerNames.splice(activeLayer,1);layerVisible.splice(activeLayer,1);layerLocked.splice(activeLayer,1);animationTracks.forEach(t=>t.frames.forEach(f=>f.layers.splice(activeLayer,1)));activeLayer=Math.min(activeLayer,layerNames.length-1);refresh()};
const resizeDialog=$('resizeDialog');
let resizeAnchorX=1,resizeAnchorY=1,resizeMode='size',resizeManualW=32,resizeManualH=32;
function resizeOffset(oldSize,newSize,anchor){const d=newSize-oldSize;return anchor===0?0:anchor===2?d:Math.floor(d/2)}
function resizePlan(){
 if(resizeMode==='add'){
  const amount=Number($('resizeAddPixels').value);
  const useWidth=resizeAnchorX!==1||resizeAnchorY===1;
  const useHeight=resizeAnchorY!==1||resizeAnchorX===1;
  const nw=W+(useWidth?amount:0),nh=H+(useHeight?amount:0);
  // En este modo las flechas representan hacia dónde se añaden los píxeles.
  const dx=useWidth?(resizeAnchorX===0?amount:resizeAnchorX===2?0:Math.floor(amount/2)):0;
  const dy=useHeight?(resizeAnchorY===0?amount:resizeAnchorY===2?0:Math.floor(amount/2)):0;
  const valid=Number.isInteger(amount)&&amount>=1&&amount<=2000&&nw<=2000&&nh<=2000;
  return {nw,nh,dx,dy,valid};
 }
 const nw=Number($('resizeWidth').value),nh=Number($('resizeHeight').value);
 const valid=Number.isInteger(nw)&&Number.isInteger(nh)&&nw>=1&&nw<=2000&&nh>=1&&nh<=2000;
 return {nw,nh,dx:resizeOffset(W,nw,resizeAnchorX),dy:resizeOffset(H,nh,resizeAnchorY),valid};
}
function resizeValid(){return resizePlan().valid}
function syncResizeMode(){
 $('resizeAddControls').hidden=resizeMode!=='add';
 $('resizeWidth').readOnly=resizeMode==='add';
 $('resizeHeight').readOnly=resizeMode==='add';
 const add=resizeMode==='add';
 const heading=document.querySelector('#resizeAnchor').previousElementSibling;
 if(heading)heading.textContent=add?'Dirección para añadir píxeles':'Dirección de expansión / recorte';
 const labels=[
  ['Arriba izquierda','Arriba','Arriba derecha'],
  ['Izquierda','Centro','Derecha'],
  ['Abajo izquierda','Abajo','Abajo derecha']
 ];
 document.querySelectorAll('#resizeAnchor button').forEach(b=>{
  const [x,y]=b.dataset.anchor.split(',').map(Number);
  b.title=add?'Añadir hacia '+labels[y][x].toLowerCase():'Anclar '+labels[y][x].toLowerCase();
  b.setAttribute('aria-label',b.title);
 });
}
function renderResizePreview(){
 const plan=resizePlan(),{nw,nh,dx,dy,valid}=plan;
 if(resizeMode==='add'){
  $('resizeWidth').value=valid?nw:Math.min(nw,2000);
  $('resizeHeight').value=valid?nh:Math.min(nh,2000);
  const result=$('resizeAddResult');
  result.textContent=valid?`${W} × ${H} → ${nw} × ${nh} px`:'Límite: 2000 × 2000 px';
  result.style.color=valid?'#b8d6e4':'#ffad99';
 }
 $('applyResize').disabled=!valid;
 document.querySelectorAll('#resizeAnchor button').forEach(b=>{
  const [x,y]=b.dataset.anchor.split(',').map(Number);
  b.classList.toggle('active',x===resizeAnchorX&&y===resizeAnchorY);
  b.setAttribute('aria-pressed',String(x===resizeAnchorX&&y===resizeAnchorY));
 });
 const cv=$('resizePreview'),c=cv.getContext('2d');if(!c)return;
 const pw=cv.width,ph=cv.height;c.clearRect(0,0,pw,ph);
 c.fillStyle='#18212c';c.fillRect(0,0,pw,ph);
 for(let y=0;y<ph;y+=12)for(let x=0;x<pw;x+=12)if(((x+y)/12)%2===0){c.fillStyle='#25303e';c.fillRect(x,y,12,12)}
 if(!valid)return;
 const l=Math.min(0,dx),t=Math.min(0,dy),r=Math.max(nw,dx+W),b=Math.max(nh,dy+H);
 const scale=Math.min((pw-28)/(r-l),(ph-28)/(b-t));
 const originX=(pw-(r-l)*scale)/2-l*scale,originY=(ph-(b-t)*scale)/2-t*scale;
 const oldX=originX+dx*scale,oldY=originY+dy*scale;
 c.fillStyle='rgba(65,178,200,.17)';c.fillRect(originX,originY,nw*scale,nh*scale);
 c.fillStyle='rgba(193,207,228,.06)';c.fillRect(oldX,oldY,W*scale,H*scale);
 c.save();c.beginPath();c.rect(originX,originY,nw*scale,nh*scale);c.clip();
 try{
  const off=document.createElement('canvas');off.width=W;off.height=H;
  off.getContext('2d').putImageData(new ImageData(compose(frame()),W,H),0,0);
  c.imageSmoothingEnabled=false;c.drawImage(off,oldX,oldY,W*scale,H*scale);
 }catch(err){console.warn('Vista previa de contenido:',err)}
 c.restore();
 c.lineWidth=1.5;c.strokeStyle='#b8c4d8';c.setLineDash([5,4]);c.strokeRect(oldX,oldY,W*scale,H*scale);c.setLineDash([]);
 c.lineWidth=2;c.strokeStyle='#65dffa';c.strokeRect(originX,originY,nw*scale,nh*scale);
}
$('resize').onclick=()=>{
 if(playing)togglePlay();
 resizeMode='size';resizeManualW=W;resizeManualH=H;
 $('resizeWidth').value=W;$('resizeHeight').value=H;
 $('resizeAddPixels').value=32;
 document.querySelector('input[name=resizeMode][value=size]').checked=true;
 resizeAnchorX=1;resizeAnchorY=1;
 syncResizeMode();resizeDialog.showModal();
 requestAnimationFrame(renderResizePreview);
};
resizeDialog.addEventListener('cancel',e=>e.preventDefault());
$('closeResize').onclick=$('cancelResize').onclick=()=>resizeDialog.close();
document.querySelectorAll('input[name=resizeMode]').forEach(b=>b.onchange=()=>{
 if(!b.checked)return;
 if(resizeMode==='size'){resizeManualW=Number($('resizeWidth').value);resizeManualH=Number($('resizeHeight').value)}
 resizeMode=b.value;
 if(resizeMode==='size'){$('resizeWidth').value=resizeManualW;$('resizeHeight').value=resizeManualH}
 syncResizeMode();renderResizePreview();
});
$('resizeWidth').oninput=$('resizeHeight').oninput=()=>{
 if(resizeMode==='size'){resizeManualW=Number($('resizeWidth').value);resizeManualH=Number($('resizeHeight').value)}
 renderResizePreview();
};
$('resizeAddPixels').oninput=renderResizePreview;
document.querySelectorAll('#resizeAnchor button').forEach(b=>b.onclick=()=>{
 [resizeAnchorX,resizeAnchorY]=b.dataset.anchor.split(',').map(Number);
 renderResizePreview();
});
$('applyResize').onclick=()=>{
 const plan=resizePlan();if(!plan.valid)return;
 const {nw,nh,dx,dy}=plan;
 if(nw===W&&nh===H){resizeDialog.close();msg('El lienzo conserva su tamaño');return}
 const oldW=W,oldH=H;
 try{ensureProjectSize(nw,nh,layerNames.length,frames.length)}catch(e){msg(e.message);return}
 snapshot();
 const shiftLayer=old=>{
  const fresh=new Uint8ClampedArray(nw*nh*4);
  for(let y=0;y<oldH;y++){
   const ny=y+dy;if(ny<0||ny>=nh)continue;
   for(let x=0;x<oldW;x++){
    const nx=x+dx;if(nx<0||nx>=nw)continue;
    const si=(y*oldW+x)*4;fresh.set(old.subarray(si,si+4),(ny*nw+nx)*4)
   }
  }
  return fresh
 };
 animationTracks.forEach(t=>t.frames.forEach(f=>f.layers=f.layers.map(shiftLayer)));
 W=nw;H=nh;resetSelection();pastePlacement=null;preview=null;
 $('width').value=W;$('height').value=H;
 $('canvasDimensions').textContent=`${W} × ${H} px`;
 resizeDialog.close();
 if(W>256||H>256)setZoom(0);
 refresh();msg(`Lienzo redimensionado a ${W} × ${H} px`);
};
$('clear').onclick=()=>{
 if(playing)togglePlay();
 if(layerLocked[activeLayer]){msg('No se puede limpiar una capa bloqueada');return}
 const target=layer();
 if(!target.some(v=>v!==0)){msg('La capa actual ya está vacía');return}
 snapshot();target.fill(0);preview=null;dragging=false;refresh();
 msg('Capa «'+layerNames[activeLayer]+'» limpiada en el fotograma '+(selected+1)+' · Ctrl+Z para deshacer');
};
const exportDialog=$('exportDialog');
// Importación configurable, con muestras de color y tamaño conservados sin interpolación por defecto.
const importDialog=$('importDialog');
let pendingImport=null;
$('openImport').onclick=()=>{$('imageFile').value='';$('imageFile').click()};
$('imageFile').addEventListener('change',async e=>{
 const file=e.target.files?.[0];
 if(!file)return;
 if(pendingImport)releaseImport();
 if(file.size>20*1024*1024){alert('La imagen supera el límite de 20 MB');return}
 const url=URL.createObjectURL(file);
 const img=new Image();
 try{
  await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error('Formato de imagen no compatible'));img.src=url});
  if(!img.naturalWidth||!img.naturalHeight||img.naturalWidth>4096||img.naturalHeight>4096)throw new Error('La imagen debe medir entre 1 y 4096 píxeles por lado');
  pendingImport={img,file,url};
  $('importInfo').textContent=file.name+' · '+img.naturalWidth+' × '+img.naturalHeight+' px · Lienzo: '+W+' × '+H+' px';
  $('importPreview').src=url;
  $('importKind').value='image';$('singleCanvasMode').value='original';$('singleWidth').value=Math.min(2000,img.naturalWidth);$('singleHeight').value=Math.min(2000,img.naturalHeight);
  $('sheetW').value=Math.min(256,Math.max(1,Math.min(32,img.naturalWidth)));
  $('sheetH').value=Math.min(256,Math.max(1,Math.min(32,img.naturalHeight)));
  updateImportMode();
  if(!importDialog.open)importDialog.showModal();
 }catch(error){URL.revokeObjectURL(url);alert('No se pudo cargar la imagen: '+error.message)}
});
function releaseImport(){if(pendingImport){URL.revokeObjectURL(pendingImport.url);pendingImport=null}$('importPreview').removeAttribute('src');$('imageFile').value=''}
function sheetDetails(){
 const img=pendingImport?.img;
 const sw=Number($('sheetW').value),sh=Number($('sheetH').value);
 if(!img||!Number.isInteger(sw)||!Number.isInteger(sh)||sw<1||sh<1||sw>2000||sh>2000)return null;
 const cols=Math.floor(img.naturalWidth/sw),rows=Math.floor(img.naturalHeight/sh);
 return {sw,sh,cols,rows,total:cols*rows};
}
function updateSheetInfo(){
 const d=sheetDetails(),el=$('sheetInfo');
 if(!d){el.textContent='Introduce un tamaño válido de 1 a 2000 px por lado.'; $('confirmImport').disabled=true;return}
 const {sw,sh,cols,rows,total}=d;
 $('confirmImport').disabled=total===0||total>300||($('sheetTarget').value==='append'&&(sw!==W||sh!==H||totalFrameCount()+total>300));
 el.textContent=total?`${cols} columnas × ${rows} filas = ${total} fotogramas (${sw} × ${sh} px cada uno).`:'El fotograma es más grande que la imagen; no hay fotogramas completos.';
 if(total>300)el.textContent+=' Máximo permitido: 300 fotogramas.';
 if($('sheetTarget').value==='append'&&totalFrameCount()+total>300)el.textContent+=' El proyecto no admite más de 300 fotogramas en total.';
 if($('sheetTarget').value==='append'&&(sw!==W||sh!==H))el.textContent+=` Para añadir, los fotogramas deben medir ${W} × ${H} px.`;
}
function updateImportMode(){
 const sheet=$('importKind').value==='sheet';
 $('singleFields').hidden=sheet;$('sheetFields').hidden=!sheet;
 $('confirmImport').innerHTML=nexusIcon('check');
 $('confirmImport').disabled=false;
 if(sheet)updateSheetInfo();else updateSingleSize();

}
function singleImportDimensions(){
 const mode=$('singleCanvasMode').value,img=pendingImport?.img;
 if(!img)return null;
 const width=mode==='keep'?W:mode==='original'?img.naturalWidth:Number($('singleWidth').value);
 const height=mode==='keep'?H:mode==='original'?img.naturalHeight:Number($('singleHeight').value);
 return Number.isInteger(width)&&Number.isInteger(height)&&width>=1&&height>=1&&width<=2000&&height<=2000?{width,height,mode}:null;
}
function updateSingleSize(){
 const mode=$('singleCanvasMode').value,custom=mode==='custom',keep=mode==='keep';
 $('singleCustomSizes').hidden=!custom;
 $('singleExistingFit').hidden=!keep;
 $('singleSmoothRow').hidden=mode==='original';
 const dims=singleImportDimensions();
 $('confirmImport').disabled=!dims;
 const info=$('singleSizeInfo');
 info.hidden=!!dims;
 info.textContent='El lienzo debe tener de 1 a 2000 píxeles por lado. Elige Redimensionar para importar una imagen mayor.';
}
$('singleCanvasMode').onchange=updateSingleSize;
$('singleWidth').oninput=$('singleHeight').oninput=updateSingleSize;
$('importKind').onchange=updateImportMode;
['sheetW','sheetH','sheetTarget'].forEach(id=>$(id).addEventListener('input',updateSheetInfo));
function importSpritesheet(){
 if(!pendingImport)return;
 const d=sheetDetails();
 if(!d||d.total===0)throw Error('El tamaño elegido no permite extraer fotogramas completos');
 if(d.total>300)throw Error('El límite es de 300 fotogramas');
 const append=$('sheetTarget').value==='append';
 if(append&&(d.sw!==W||d.sh!==H))throw Error(`Para añadir fotogramas, el tamaño debe coincidir con el lienzo actual (${W} × ${H})`);
 if(append&&totalFrameCount()+d.total>300)throw Error('El proyecto no puede superar los 300 fotogramas');
 if(append)ensureProjectSize(d.sw,d.sh,layerNames.length,frames.length+d.total);
 else if(d.sw*d.sh*4*d.total>MAX_PROJECT_BYTES)throw Error('El spritesheet supera el límite recomendado de memoria (192 MB)');
 const duration=Number($('sheetDuration').value);
 if(!Number.isInteger(duration)||duration<20||duration>5000)throw Error('La duración debe ser de 20 a 5000 ms');
 const {img}=pendingImport;
 if(!img.complete||img.naturalWidth===0)throw Error('La imagen todavía no está disponible');
 const source=document.createElement('canvas');source.width=img.naturalWidth;source.height=img.naturalHeight;
 const sc=source.getContext('2d',{willReadFrequently:true});
 if(!sc)throw Error('No fue posible preparar la imagen para importarla');
 sc.imageSmoothingEnabled=false;sc.drawImage(img,0,0);
 const slices=[];
 const appendSlice=(x,y)=>{
  const rgba=sc.getImageData(x*d.sw,y*d.sh,d.sw,d.sh).data;
  const layers=append?layerNames.map(()=>new Uint8ClampedArray(d.sw*d.sh*4)):[new Uint8ClampedArray(d.sw*d.sh*4)];
  layers[append?Math.min(activeLayer,layers.length-1):0].set(rgba);
  slices.push({duration,layers});
 };
 if($('sheetOrder').value==='columns'){
  for(let x=0;x<d.cols;x++)for(let y=0;y<d.rows;y++)appendSlice(x,y);
 }else{
  for(let y=0;y<d.rows;y++)for(let x=0;x<d.cols;x++)appendSlice(x,y);
 }
 snapshot();
 if(append){const original=frames.length;frames.push(...slices);selected=original;resetSelection();}
 else{characterPack=null;W=d.sw;H=d.sh;setAnimationTracks([{name:'Animación 1',frames:slices}],'Animación 1');setZoom(0);layerNames=['Spritesheet'];layerVisible=[true];layerLocked=[false];activeLayer=0;selected=0;resetSelection();$('width').value=W;$('height').value=H;const dimensionLabel=$('canvasDimensions');if(dimensionLabel)dimensionLabel.textContent=`${W} × ${H} px`;}
 preview=null;refresh();
 importDialog.close();
 msg(`Spritesheet importado: ${d.total} fotogramas de ${d.sw} × ${d.sh} px`);
}
$('closeImport').onclick=()=>importDialog.close();
$('cancelImport').onclick=()=>importDialog.close();
importDialog.addEventListener('close',releaseImport);
// El diálogo conserva la selección y la configuración mientras se hace clic fuera.
importDialog.addEventListener('cancel',e=>e.preventDefault());
$('confirmImport').onclick=()=>{
 if(!pendingImport)return;
 try{
  if(playing)togglePlay();
  if($('importKind').value==='sheet'){importSpritesheet();return;}
  const {img,file}=pendingImport,target=$('importTarget').value;
  const dims=singleImportDimensions();
  if(!dims)throw new Error('Tamaño no válido: Nexus Pixel admite hasta 2000 × 2000 px.');
  const nw=dims.width,nh=dims.height,mode=dims.mode;
  if(target!=='new-layer'&&target!=='new-frame'&&(layerLocked[activeLayer]||layerVisible[activeLayer]===false))throw new Error('La capa de destino está bloqueada u oculta');
  const temp=document.createElement('canvas');temp.width=nw;temp.height=nh;
  const tc=temp.getContext('2d',{willReadFrequently:true});
  if(!tc)throw new Error('No se pudo procesar la imagen');
  tc.imageSmoothingEnabled=$('importSmooth').checked;
  let dw=img.naturalWidth,dh=img.naturalHeight;
  if(mode==='custom'){dw=nw;dh=nh}
  else if(mode==='keep'){
   const fit=$('importFit').value;
   if(fit==='stretch'){dw=nw;dh=nh}
   if(fit==='contain'){const scale=Math.min(nw/dw,nh/dh);dw*=scale;dh*=scale}
   if(fit==='cover'){const scale=Math.max(nw/dw,nh/dh);dw*=scale;dh*=scale}
  }
  tc.drawImage(img,(nw-dw)/2,(nh-dh)/2,dw,dh);
  const imported=tc.getImageData(0,0,nw,nh).data;
  // Una sola acción de deshacer incluye la adaptación del lienzo y la importación.
  ensureProjectSize(nw,nh,layerNames.length+(target==='new-layer'?1:0),frames.length+(target==='new-frame'?1:0));
  snapshot();
  if(nw!==W||nh!==H){
   const oldW=W,oldH=H;
   const adapt=old=>{
    const dst=new Uint8ClampedArray(nw*nh*4),dx=Math.floor((nw-oldW)/2),dy=Math.floor((nh-oldH)/2);
    for(let y=0;y<oldH;y++)for(let x=0;x<oldW;x++){
     const nx=x+dx,ny=y+dy;
     if(nx<0||ny<0||nx>=nw||ny>=nh)continue;
     dst.set(old.subarray((y*oldW+x)*4,(y*oldW+x)*4+4),(ny*nw+nx)*4);
    }
    return dst;
   };
   animationTracks.forEach(t=>t.frames.forEach(f=>f.layers=f.layers.map(adapt)));
   W=nw;H=nh;resetSelection();pastePlacement=null;preview=null;
   $('width').value=W;$('height').value=H;$('canvasDimensions').textContent=`${W} × ${H} px`;
   setZoom(0);
  }
  if(target==='new-frame'){
   const duration=frame().duration;
   frames.splice(++selected,0,{duration,layers:layerNames.map(()=>blank())});
  }else if(target==='new-layer'){
   layerNames.push(file.name.replace(/\.[^.]+$/,'').slice(0,32)||'Imagen importada');layerVisible.push(true);layerLocked.push(false);
   animationTracks.forEach(t=>t.frames.forEach(f=>f.layers.push(blank())));
   activeLayer=layerNames.length-1;
  }
  if(layerLocked[activeLayer])throw new Error('La capa de destino está bloqueada');
  if(layerVisible[activeLayer]===false)throw new Error('La capa de destino está oculta');
  const dst=layer();
  if(target==='replace'||target==='new-layer'||target==='new-frame')dst.fill(0);
  if(target==='overlay'){
   const over=document.createElement('canvas');over.width=W;over.height=H;
   const oc=over.getContext('2d');oc.putImageData(new ImageData(new Uint8ClampedArray(dst),W,H),0,0);
   oc.drawImage(temp,0,0);dst.set(oc.getImageData(0,0,W,H).data);
  }else dst.set(imported);
  preview=null;refresh();
  importDialog.close();
  msg('Imagen importada en '+(target==='new-frame'?'un fotograma nuevo':layerNames[activeLayer]));
 }catch(error){alert('Error al importar: '+error.message)}
};

function setSheetExportView(showSettings){
 $('sheetExportSettings').hidden=!showSettings;
 document.querySelector('#exportDialog .export-options').hidden=showSettings;
 $('exportIntro').hidden=showSettings;
 $('exportTitle').textContent=showSettings?'Exportar spritesheet':'Exportar imagen o animación';
 if(showSettings)updateSheetExportPreview();
}
$('openExport').onclick=()=>{setSheetExportView(false);exportDialog.showModal();$('exportFileName').focus();$('exportFileName').select()};
$('closeExport').onclick=()=>exportDialog.close();
$('sheetExportBack').onclick=()=>setSheetExportView(false);
// No cerrar una exportación configurada por un clic sobre el fondo.
exportDialog.addEventListener('cancel',e=>e.preventDefault());
$('new').onclick=()=>{if(!confirm('¿Crear proyecto nuevo? Se perderán los cambios no guardados.'))return;W=32;H=32;characterPack=null;setAnimationTracks([{name:'Animación 1',frames:[{duration:150,layers:[new Uint8ClampedArray(32*32*4)]}]}],'Animación 1');setAnimationEnabled(false);guideGridEnabled=false;guideCellWidth=32;guideCellHeight=32;guideGridColor='#5ac8ef';guideGridAlpha=55;isoMode=false;isoGrid=true;isoWidth=32;isoHeight=16;isoColor='#5ac8ef';isoOpacity=55;isoSnap=true;loadIsometricSettings();randomColorEnabled=false;$('randomColor').checked=false;loadGuideControls();updateAnimationUI();layerNames=['Capa 1'];layerVisible=[true];layerLocked=[false];selected=activeLayer=0;undo=[];redo=[];resetSelection();$('width').value=W;$('height').value=H;const dimensionLabel=$('canvasDimensions');if(dimensionLabel)dimensionLabel.textContent=`${W} × ${H} px`;setZoom(12);refresh()};
function exportFilename(extension){
 const input=$('exportFileName');
 const raw=input.value.trim().replace(/\.(?:png|gif)$/i,'');
 const stem=raw.replace(/[\\/:*?"<>|\x00-\x1f]/g,'-').replace(/[. ]+$/g,'').trim();
 if(!stem){input.setCustomValidity('Escribe un nombre para exportar.');input.reportValidity();input.focus();return null}
 input.setCustomValidity('');
 return `${stem}.${extension}`;
}
$('exportFileName').addEventListener('input',()=>{$('exportFileName').setCustomValidity('')});
function download(bytes,name,type){const blob=bytes instanceof Blob?bytes:new Blob([bytes],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
function raster(data,w,h){const cv=document.createElement('canvas');cv.width=w;cv.height=h;cv.getContext('2d').putImageData(new ImageData(data,w,h),0,0);return cv}
function canvasPNG(cv,name){cv.toBlob(b=>{if(b)download(b,name,'image/png')},'image/png')}
$('exportPNG').onclick=()=>{const name=exportFilename('png');if(!name)return;canvasPNG(raster(compose(frame()),W,H),name);exportDialog.close();msg('Exportado: '+name+' ('+W+'×'+H+')')};
const SHEET_MAX_SIDE=8192,SHEET_MAX_PIXELS=50*1024*1024;
function getSheetExportPlan(){
 const cols=Number($('sheetExportCols').value),rows=Number($('sheetExportRows').value);
 const validNumbers=Number.isSafeInteger(cols)&&Number.isSafeInteger(rows)&&cols>=1&&rows>=1;
 if(!validNumbers)return {valid:false,reason:'Indica números enteros mayores que cero para columnas y filas.'};
 const neededRows=animationTracks.length;
 const neededCols=Math.max(...animationTracks.map(t=>t.frames.length));
 const capacity=cols*rows,width=cols*W,height=rows*H;
 if(cols<neededCols)return {valid:false,cols,rows,capacity,width,height,reason:`Se necesitan al menos ${neededCols} columnas para que ningún fotograma pase a otra animación.`};
 if(rows<neededRows)return {valid:false,cols,rows,capacity,width,height,reason:`Se necesitan al menos ${neededRows} filas, una para cada animación.`};
 if(width>SHEET_MAX_SIDE||height>SHEET_MAX_SIDE)return {valid:false,cols,rows,capacity,width,height,reason:`El spritesheet supera ${SHEET_MAX_SIDE} px por lado.`};
 if(width*height>SHEET_MAX_PIXELS)return {valid:false,cols,rows,capacity,width,height,reason:'El spritesheet supera el límite de 50 megapíxeles.'};
 return {valid:true,cols,rows,capacity,width,height};
}
function updateSheetExportPreview(){
 const p=getSheetExportPlan(),cv=$('sheetExportPreview'),c=cv.getContext('2d');
 $('confirmSheetExport').disabled=!p.valid;
 const summary=$('sheetExportInfo');summary.classList.toggle('invalid',!p.valid);
 const names=animationTracks.map((t,i)=>`Fila ${i+1}: ${t.name} (${t.frames.length})`).join(' · ');
 summary.textContent=(p.reason||(totalFrameCount()+' fotogramas · '+p.cols+' columnas × '+p.rows+' filas · PNG '+p.width+' × '+p.height+' px'))+'\n'+names;
 const pw=cv.width,ph=cv.height;c.clearRect(0,0,pw,ph);
 c.fillStyle='#192330';c.fillRect(0,0,pw,ph);
 if(!p.cols||!p.rows||!Number.isSafeInteger(p.cols)||!Number.isSafeInteger(p.rows)||p.cols<1||p.rows<1)return;
 const availW=pw-24,availH=ph-20,scale=Math.min(availW/(p.cols*W),availH/(p.rows*H));
 if(!Number.isFinite(scale)||scale<=0)return;
 const cellW=W*scale,cellH=H*scale,x0=(pw-cellW*p.cols)/2,y0=(ph-cellH*p.rows)/2;
 const maxPreviewCells=500;
 for(let y=0;y<Math.min(p.rows,500);y++)for(let x=0;x<p.cols&&y*p.cols+x<maxPreviewCells;x++){
  const px=x0+x*cellW,py=y0+y*cellH,track=animationTracks[y];
  const filled=!!(track&&track.frames[x]);
  c.fillStyle=filled?(y%2?'#355d71':'#1c566b'):'#283342';
  c.fillRect(px+.5,py+.5,Math.max(0,cellW-1),Math.max(0,cellH-1));
  if(filled&&cellW>=23&&cellH>=16){c.fillStyle='#d6f4fc';c.font='11px system-ui';c.textAlign='center';c.textBaseline='middle';c.fillText(String(x+1),px+cellW/2,py+cellH/2)}
 }
 c.beginPath();c.strokeStyle='#70b6cb';c.lineWidth=1;
 if(p.cols<=80&&p.rows<=80){
  for(let x=0;x<=p.cols;x++){let v=Math.round(x0+x*cellW)+.5;c.moveTo(v,y0);c.lineTo(v,y0+p.rows*cellH)}
  for(let y=0;y<=p.rows;y++){let v=Math.round(y0+y*cellH)+.5;c.moveTo(x0,v);c.lineTo(x0+p.cols*cellW,v)}
  c.stroke();
 }
}
$('exportSheet').onclick=()=>{
 const maxCols=Math.floor(SHEET_MAX_SIDE/W),maxRows=Math.floor(SHEET_MAX_SIDE/H);
 const suggestedCols=Math.max(...animationTracks.map(t=>t.frames.length));
 $('sheetExportCols').max=maxCols;$('sheetExportRows').min=animationTracks.length;$('sheetExportRows').max=maxRows;
 $('sheetExportCols').value=suggestedCols;$('sheetExportRows').value=animationTracks.length;
 setSheetExportView(true);
};
$('sheetExportCols').oninput=$('sheetExportRows').oninput=updateSheetExportPreview;
$('confirmSheetExport').onclick=()=>{
 const p=getSheetExportPlan();if(!p.valid){updateSheetExportPreview();return}
 try{
  const cv=document.createElement('canvas');cv.width=p.width;cv.height=p.height;
  const cc=cv.getContext('2d');if(!cc)throw Error('No se pudo crear el lienzo de exportación');
  cc.imageSmoothingEnabled=false;
  animationTracks.forEach((t,row)=>t.frames.forEach((f,col)=>{
   cc.drawImage(raster(compose(f),W,H),col*W,row*H);
  }));
  const name=exportFilename('png');if(!name)return;canvasPNG(cv,name);exportDialog.close();
  msg('Spritesheet: '+animationTracks.length+' filas de animaciones, '+totalFrameCount()+' fotogramas');
 }catch(error){alert('No se pudo exportar el spritesheet: '+error.message)}
};
function encodePixelArray(a){
 if(a.length<=256*256*4)return Array.from(a);
 let str='';const batch=32768;
 for(let i=0;i<a.length;i+=batch)str+=String.fromCharCode(...a.subarray(i,i+batch));
 return {base64:btoa(str)};
}
function decodePixelArray(obj,size){
 if(Array.isArray(obj)){if(obj.length!==size)throw Error('Capa del proyecto con tamaño incorrecto');return new Uint8ClampedArray(obj)}
 if(!obj||typeof obj.base64!=='string')throw Error('Formato de capa no válido');
 const binary=atob(obj.base64);if(binary.length!==size)throw Error('Capa comprimida con tamaño incorrecto');
 const dst=new Uint8ClampedArray(size);for(let i=0;i<binary.length;i++)dst[i]=binary.charCodeAt(i);return dst;
}
function validPixelEncoding(obj,size){return (Array.isArray(obj)&&obj.length===size)||(obj&&typeof obj.base64==='string'&&obj.base64.length<=Math.ceil(size/3)*4+4)}
$('saveProject').onclick=()=>{
 try{
  const serialize=fs=>fs.map(f=>({duration:f.duration,layers:f.layers.map(encodePixelArray)}));
  const obj={version:3,width:W,height:H,layerNames,layerVisible,layerLocked,palette, paletteLibraryId:paletteLibrary.activeId,paletteName:NexusPixelPaletteLibrary.active(paletteLibrary).name,selectedSwatch,selectedSwatchRight,color,alpha,colorEnd,alphaEnd,activeColorSide,randomColorEnabled,gradientStops,selectedGradientStop,radialInvert,animationEnabled,guideGridEnabled,guideCellWidth,guideCellHeight,guideGridColor,guideGridAlpha,isoMode,isoGrid,isoWidth,isoHeight,isoColor,isoOpacity,isoSnap,animations:animationTracks.map(t=>({name:t.name,frames:serialize(t.frames)})),characterPack:characterPack?{colors:characterPack.colors}:null,currentAnimation};
  download(JSON.stringify(obj),'nexus-pixel-project.json','application/json');msg('Proyecto guardado: '+animationTracks.length+' animaciones');
 }catch(err){alert('No se pudo guardar el proyecto: '+err.message)}
};
$('openProject').onclick=()=>$('projectFile').click();
$('projectFile').onchange=async e=>{
 try{
  const file=e.target.files[0];if(!file)return;
  const v=JSON.parse(await file.text());
  if(!Number.isInteger(v.width)||!Number.isInteger(v.height)||v.width<1||v.height<1||v.width>2000||v.height>2000||!Array.isArray(v.layerNames)||!v.layerNames.length)throw Error('Proyecto no válido');
  let incoming;
  // Leer formato moderno (varias líneas) y proyectos antiguos (fotogramas y Humano base).
  if(Array.isArray(v.animations)&&v.animations.length){incoming=v.animations;}
  else if(v.characterPack&&v.characterPack.animations){
   const pack=v.characterPack.animations;
   incoming=Object.keys(pack).map(name=>({name,frames:name===v.currentAnimation&&Array.isArray(v.frames)?v.frames:pack[name]}));
  }else{incoming=[{name:v.currentAnimation||'Animación 1',frames:v.frames}];}
  if(incoming.length>300||incoming.some(t=>!t||typeof t.name!=='string'||!t.name.trim()||t.name.length>40||!Array.isArray(t.frames)||!t.frames.length))throw Error('Las animaciones no son válidas');
  const seen=new Set(),count=incoming.reduce((n,t)=>n+t.frames.length,0);
  for(const t of incoming){const key=t.name.trim().toLowerCase();if(seen.has(key))throw Error('Hay nombres de animación repetidos');seen.add(key)}
  if(count>300||v.width*v.height*4*v.layerNames.length*count>MAX_PROJECT_BYTES)throw Error('El proyecto supera el límite de memoria o de 300 fotogramas');
  for(const t of incoming)for(const f of t.frames){
   if(!Array.isArray(f.layers)||f.layers.length!==v.layerNames.length)throw Error('Capas incorrectas');
   for(const data of f.layers)if(!validPixelEncoding(data,v.width*v.height*4))throw Error('Datos de imagen incorrectos');
  }
  // Validar primero; modificar el proyecto actual solamente cuando los datos sean correctos.
  const decoded=incoming.map(t=>({name:t.name.trim(),frames:t.frames.map(f=>({duration:Math.max(20,Math.min(5000,f.duration||150)),layers:f.layers.map(data=>decodePixelArray(data,v.width*v.height*4))}))}));
  if(playing)togglePlay();W=v.width;H=v.height;layerNames=v.layerNames;
  layerVisible=Array.isArray(v.layerVisible)&&v.layerVisible.length===layerNames.length?v.layerVisible.map(Boolean):layerNames.map(()=>true);
  layerLocked=Array.isArray(v.layerLocked)&&v.layerLocked.length===layerNames.length?v.layerLocked.map(Boolean):layerNames.map(()=>false);
  setAnimationTracks(decoded,v.currentAnimation);activeLayer=0;undo=[];redo=[];
  characterPack=v.characterPack?.colors?{colors:v.characterPack.colors}:null;
  if(Array.isArray(v.palette)&&v.palette.length<=128){importProjectPalette(v)}
  if(typeof v.color==='string'&&/^#[0-9a-fA-F]{6}$/.test(v.color)){color=v.color;alpha=Math.max(0,Math.min(255,Number(v.alpha??255)))}
  if(typeof v.colorEnd==='string'&&/^#[0-9a-fA-F]{6}$/.test(v.colorEnd)){colorEnd=v.colorEnd;alphaEnd=Math.max(0,Math.min(255,Number(v.alphaEnd??255)))}
  selectedSwatchRight=Number.isInteger(v.selectedSwatchRight)?v.selectedSwatchRight:-1;activeColorSide=v.activeColorSide==='right'?'right':'left';
  randomColorEnabled=!!v.randomColorEnabled;$('randomColor').checked=randomColorEnabled;
  if(Array.isArray(v.gradientStops)&&v.gradientStops.length){gradientStops=v.gradientStops.map(normalizeSwatch);selectedGradientStop=Number.isInteger(v.selectedGradientStop)?Math.max(0,Math.min(v.selectedGradientStop,gradientStops.length-1)):0;radialInvert=!!v.radialInvert;}
  renderPalette();renderColorPair();renderGradientControls();syncToolPanels();
  guideGridEnabled=v.guideGridEnabled===true;
  guideCellWidth=Number.isInteger(v.guideCellWidth)?Math.max(1,Math.min(2000,v.guideCellWidth)):32;
  guideCellHeight=Number.isInteger(v.guideCellHeight)?Math.max(1,Math.min(2000,v.guideCellHeight)):32;
  guideGridColor=/^#[0-9a-f]{6}$/i.test(v.guideGridColor||'')?v.guideGridColor:'#5ac8ef';
  guideGridAlpha=Number.isFinite(v.guideGridAlpha)?Math.max(5,Math.min(100,v.guideGridAlpha)):55;
  loadIsometricSettings(v);
  loadGuideControls();setAnimationEnabled(v.animationEnabled===true);
  updateAnimationUI();resetSelection();if(W>256||H>256)setZoom(0);
  $('width').value=W;$('height').value=H;$('canvasDimensions').textContent=`${W} × ${H} px`;
  refresh();msg('Proyecto abierto · '+animationTracks.length+' animaciones');
 }catch(err){alert('No se pudo abrir el proyecto: '+err.message)}finally{e.target.value=''}
};
// GIF89a autónomo: paleta fija RGB 3-3-2, alfa indexado transparente y LZW GIF.
function makeGIF(){const bytes=[];const u8=n=>bytes.push(n&255),u16=n=>{u8(n);u8(n>>8)},str=s=>{for(const c of s)u8(c.charCodeAt(0))};str('GIF89a');u16(W);u16(H);u8(0xf7);u8(0);u8(0);
// Índice 0 transparente; 1..255 representan los cubos RGB 3-3-2, con fusión de los dos últimos.
u8(0);u8(0);u8(0);for(let i=1;i<256;i++){let k=i-1;u8(Math.round(((k>>5)&7)*255/7));u8(Math.round(((k>>2)&7)*255/7));u8(Math.round((k&3)*255/3))}
u8(0x21);u8(0xff);u8(11);str('NETSCAPE2.0');u8(3);u8(1);u16(0);u8(0);
for(const f of frames){const data=compose(f),ids=new Uint8Array(W*H);for(let p=0,i=0;p<ids.length;p++,i+=4){if(data[i+3]<128){ids[p]=0;continue}let r=Math.round(data[i]*7/255),g=Math.round(data[i+1]*7/255),b=Math.round(data[i+2]*3/255);ids[p]=1+Math.min(254,(r<<5)|(g<<2)|b)}
u8(0x21);u8(0xf9);u8(4);u8(0x09);u16(Math.max(2,Math.round(f.duration/10)));u8(0);u8(0);u8(0x2c);u16(0);u16(0);u16(W);u16(H);u8(0);u8(8);
const compressed=lzw(ids);for(let p=0;p<compressed.length;p+=255){let n=Math.min(255,compressed.length-p);u8(n);for(let j=0;j<n;j++)u8(compressed[p+j])}u8(0)}u8(0x3b);return new Uint8Array(bytes)}
function lzw(indices){const clear=256,end=257,out=[];let dict=new Map(),next=258,bitSize=9,bitBuffer=0,bitCount=0;
function write(code){bitBuffer|=code<<bitCount;bitCount+=bitSize;while(bitCount>=8){out.push(bitBuffer&255);bitBuffer>>>=8;bitCount-=8}}
function reset(){dict=new Map();next=258;bitSize=9}
write(clear);let prefix=indices[0];for(let i=1;i<indices.length;i++){const n=indices[i],key=prefix*256+n,found=dict.get(key);if(found!==undefined){prefix=found;continue}write(prefix);if(next<4096){dict.set(key,next++);if(next>(1<<bitSize)&&bitSize<12)bitSize++}else{write(clear);reset()}prefix=n}write(prefix);write(end);if(bitCount)out.push(bitBuffer&255);return out}
$('exportGIF').onclick=()=>{const name=exportFilename('gif');if(!name)return;try{const bytes=makeGIF();download(bytes,name,'image/gif');exportDialog.close();msg('GIF animado exportado: '+name+' ('+frames.length+' fotogramas)')}catch(e){alert('Error al exportar GIF: '+e.message)}};
document.addEventListener('keydown',e=>{
 if(e.key==='Shift'&&dragging&&lastShapePointer&&(tool==='rect'||tool==='ellipse')){
  if(!shapeShiftHeld){shapeShiftHeld=true;renderShapePreview(lastShapePointer,true)}
 }
});
document.addEventListener('keyup',e=>{
 if(e.key==='Shift'&&dragging&&lastShapePointer&&(tool==='rect'||tool==='ellipse')){
  shapeShiftHeld=false;renderShapePreview(lastShapePointer,false);
 }
});
document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA'].includes(e.target.tagName)||e.target.isContentEditable)return;if((e.ctrlKey||e.metaKey)&&!e.altKey){const k=e.key.toLowerCase();if(k==='c'||k==='x'||k==='v'){e.preventDefault();if(k==='v')startPaste();else copySelectedPixels(k==='x');return}}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();$('undo').click();return}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();$('redo').click();return}if(e.key==='['){setBrushSize(brushSize-1);return}if(e.key===']'){setBrushSize(brushSize+1);return}if(e.key==='Escape'){if(moveOrigin){endMove(false);msg('Movimiento cancelado');return}if(!$('colorPopup').hidden){$('colorPopup').hidden=true;return}if(pastePlacement){pastePlacement=null;draw();msg('Pegado cancelado')}else{resetSelection();draw();msg('Selección quitada')}return}const keys={b:'pencil',e:'eraser',g:'fill',i:'picker',l:'line',r:'rect',o:'ellipse',s:'spray',m:'select-rect',n:'select-lasso',w:'select-magic',v:'move'};if(e.key.toLowerCase()==='x'){const left={hex:color,alpha},right={hex:colorEnd,alpha:alphaEnd};const i=selectedSwatch;assignSide('left',right.hex,right.alpha,selectedSwatchRight);assignSide('right',left.hex,left.alpha,i);return}if(keys[e.key.toLowerCase()])selectTool(keys[e.key.toLowerCase()])});refresh();
// Interface for the independent mobile controller. All mutations stay inside the editor.
// Punto de retorno del primer dedo. Si aparece otro dedo, se descarta solo
// el trazo que acababa de empezar para que pellizcar no pinte accidentalmente.
let mobileTouchCheckpoint=null;
window.NexusPixelTouch={
 setPaintSide(side){mobilePaintSide=side==='right'?'right':'left'},
 getPaintSide(){return mobilePaintSide},
 setPanEnabled(on){mobilePanEnabled=!!on},
 isPanEnabled(){return mobilePanEnabled},
 isSelectionActive(){return selectionMask!==null||tool.startsWith('select-')},
 clearSelection(){
  resetSelection();
  selectTool('pencil');
  draw();
  msg('Selección quitada');
 },
 startTouchGesture(){
  mobileTouchCheckpoint={
   undoLast:undo.length?undo[undo.length-1]:null,
   selection:selectionMask?new Uint8Array(selectionMask):null
  };
 },
 finishTouchGesture(){mobileTouchCheckpoint=null},
 cancelTouchStroke(){
  if(moveOrigin)endMove(false);
  const previous=mobileTouchCheckpoint;
  const lastUndo=undo.length?undo[undo.length-1]:null;
  // La instantánea del trazo actual puede reemplazar la más antigua del
  // historial cuando se alcanza el límite, por eso comparamos por identidad.
  if(previous&&lastUndo&&lastUndo!==previous.undoLast){
   const track=lastUndo.animationTracks.find(t=>t.name===currentAnimation);
   const prevFrame=track?.frames[selected];
   if(prevFrame&&prevFrame.layers.length===frame().layers.length){
    frame().layers=prevFrame.layers.map(bytes=>new Uint8ClampedArray(bytes));
    undo.pop();
   }
  }
  if(previous)selectionMask=previous.selection;
  dragging=false;start=last=null;preview=null;
  selectionPreview=null;lassoPoints=[];lastShapePointer=null;
  shapeShiftHeld=false;endPaintStroke();
  syncSelectionControls();
  draw();
 },
 panBy(dx,dy){panX+=dx;panY+=dy;applyPan()},
 zoomAt(next,x,y){setZoom(next,x,y)},
 getZoom(){return actualZoom()},
 fit(){setZoom(0)}
};
})();
