// Nexus Pixel Mobile 0.2.54 — vista táctil independiente de escritorio.
(() => {
  "use strict";
  const mq=window.matchMedia("(min-width:0px)");
  const api=window.NexusPixelTouch;
  const viewport=document.getElementById("viewport");
  const dock=document.getElementById("mobileDock");
  const backdrop=document.getElementById("mobileBackdrop");
  const left=document.querySelector(".sidebar.left");
  const right=document.querySelector(".sidebar.right");
  if(!api||!viewport||!dock||!backdrop||!left||!right)return;

  const $=id=>document.getElementById(id);
  let open=null,paintSide="left",panEnabled=false;
  const pointers=new Map();
  let pinchActive=false,pinchCenter=null,pinchDistance=0;
  const clearSelectionButton=$("mobileClearSelection");
  function syncClearSelection(){
    clearSelectionButton.hidden=!api.isSelectionActive();
  }
  clearSelectionButton.addEventListener("click",()=>{
    api.clearSelection();
    closePanels();
    syncClearSelection();
  });
  document.addEventListener("nexus-selection-change",syncClearSelection);
  syncClearSelection();

  function closePanels(){
    open=null;document.body.classList.remove("mobile-panel-tools","mobile-panel-options");
    backdrop.hidden=true;
    for(const id of ["mobileTools","mobileColors","mobileLayers"])$(id).classList.remove("active");
  }
  function openPanel(name){
    if(!mq.matches)return;
    if(open===name){closePanels();return;}
    closePanels();open=name;
    if(name==="tools"){document.body.classList.add("mobile-panel-tools");$("mobileTools").classList.add("active")}
    else{
      document.body.classList.add("mobile-panel-options");
      const btn=name==="layers"?$("mobileLayers"):$("mobileColors");
      btn.classList.add("active");
      requestAnimationFrame(()=>{
        if(name==="layers"){
          const heading=Array.from(right.querySelectorAll("h3")).find(el=>el.textContent.trim()==="CAPAS");
          if(heading)right.scrollTop=Math.max(0,heading.offsetTop-right.offsetTop-10);
        } else right.scrollTop=0;
      });
    }
    backdrop.hidden=false;
  }

  $("mobileTools").onclick=()=>openPanel("tools");
  $("mobileColors").onclick=()=>openPanel("colors");
  $("mobileLayers").onclick=()=>openPanel("layers");
  backdrop.onclick=closePanels;
  left.querySelectorAll("[data-tool]").forEach(btn=>btn.addEventListener("click",closePanels));

  function setPan(on){
    panEnabled=!!on;api.setPanEnabled(panEnabled);
    $("mobilePan").setAttribute("aria-pressed",String(panEnabled));
    $("mobilePan").classList.toggle("active",panEnabled);
    $("mobilePan").querySelector("small").textContent=panEnabled?"Mover: ACT.":"Mover vista";
    pointers.clear();
    pinchActive=false;pinchCenter=null;pinchDistance=0;
    api.finishTouchGesture();
  }
  $("mobilePan").onclick=()=>{closePanels();setPan(!panEnabled)};

  function updatePaintSide(){
    api.setPaintSide(paintSide);
    $("mobilePaintSide").querySelector("span").textContent=paintSide==="left"?"1":"2";
    $("mobilePaintSide").querySelector("small").textContent=paintSide==="left"?"Color 1":"Color 2";
    $("mobilePaintSide").setAttribute("aria-pressed",String(paintSide==="right"));
  }
  $("mobilePaintSide").onclick=()=>{paintSide=paintSide==="left"?"right":"left";updatePaintSide()};
  updatePaintSide();

  $("mobileUndo").onclick=()=>$("undo").click();
  $("mobileRedo").onclick=()=>$("redo").click();
  $("mobileZoomFit").onclick=()=>api.fit();
  function zoomBy(scale){
    const center=viewport.getBoundingClientRect();
    api.zoomAt(Math.max(0.05,Math.min(24,api.getZoom()*scale)),center.left+center.width/2,center.top+center.height/2);
  }
  $("mobileZoomIn").onclick=()=>zoomBy(1.3);
  $("mobileZoomOut").onclick=()=>zoomBy(1/1.3);

  function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
  function center(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2}}
  function gesturePair(){
    const values=[...pointers.values()];
    if(values.length<2)return null;
    const a=values[0],b=values[1];
    return {center:center(a,b),distance:Math.max(1,distance(a,b))};
  }
  function resetPinchReference(){
    const pair=gesturePair();
    pinchCenter=pair?.center||null;
    pinchDistance=pair?.distance||0;
  }
  function suppress(event){
    if(event.cancelable)event.preventDefault();
    event.stopImmediatePropagation();
  }
  // Registrar todos los dedos, incluso con Mover vista desactivado.
  // Un dedo dibuja; dos dedos siempre desplazan y amplían la vista.
  viewport.addEventListener("pointerdown",event=>{
    if(!mq.matches||event.pointerType!=="touch")return;
    pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(pointers.size===1){
      if(panEnabled){
        try{viewport.setPointerCapture(event.pointerId)}catch(_){}
        suppress(event);
      }else{
        api.startTouchGesture();
      }
      return;
    }
    if(!pinchActive){
      if(!panEnabled)api.cancelTouchStroke();
      pinchActive=true;
    }
    // Redirige también el primer dedo a la vista: el canvas ya no debe dibujar.
    for(const id of pointers.keys()){
      try{viewport.setPointerCapture(id)}catch(_){}
    }
    resetPinchReference();
    suppress(event);
  },true);

  viewport.addEventListener("pointermove",event=>{
    if(!mq.matches||event.pointerType!=="touch"||!pointers.has(event.pointerId))return;
    const before=pointers.get(event.pointerId);
    const after={x:event.clientX,y:event.clientY};
    pointers.set(event.pointerId,after);
    if(pinchActive){
      const pair=gesturePair();
      if(pair&&pinchCenter&&pinchDistance){
        // La distancia de los dedos determina el zoom; su centro desplaza el dibujo.
        const zoom=Math.max(.05,Math.min(24,api.getZoom()*pair.distance/pinchDistance));
        api.zoomAt(zoom,pair.center.x,pair.center.y);
        api.panBy(pair.center.x-pinchCenter.x,pair.center.y-pinchCenter.y);
      }
      if(pair){
        pinchCenter=pair.center;pinchDistance=pair.distance;
      }
      suppress(event);
    }else if(panEnabled){
      api.panBy(after.x-before.x,after.y-before.y);
      suppress(event);
    }
  },true);

  function stopGesture(event){
    if(event.pointerType!=="touch"||!pointers.has(event.pointerId))return;
    const intercept=pinchActive||panEnabled;
    pointers.delete(event.pointerId);
    if(pinchActive&&pointers.size>=2)resetPinchReference();
    if(!pointers.size){
      pinchActive=false;pinchCenter=null;pinchDistance=0;
      api.finishTouchGesture();
    }
    if(intercept)suppress(event);
    try{if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId)}catch(_){}
  }
  viewport.addEventListener("pointerup",stopGesture,true);
  viewport.addEventListener("pointercancel",stopGesture,true);

  mq.addEventListener("change",()=>{
    closePanels();pointers.clear();pinchActive=false;pinchCenter=null;pinchDistance=0;api.finishTouchGesture();
    if(!mq.matches)setPan(false);
    else requestAnimationFrame(()=>api.fit());
  });
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closePanels()});
  if(mq.matches)requestAnimationFrame(()=>api.fit());
})();
