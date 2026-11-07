// Nexus Pixel Mobile 0.2.52 — vista táctil independiente de escritorio.
(() => {
  "use strict";
  const mq=window.matchMedia("(max-width:760px)");
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
  // In moving mode, touches are captured before the canvas drawing handlers.
  // This keeps single-finger movement separate from painting and two-finger zoom.
  viewport.addEventListener("pointerdown",event=>{
    if(!mq.matches||!panEnabled||event.pointerType!=="touch")return;
    event.preventDefault();event.stopPropagation();
    pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    try{viewport.setPointerCapture(event.pointerId)}catch(_){}
  },true);
  viewport.addEventListener("pointermove",event=>{
    if(!mq.matches||!panEnabled||!pointers.has(event.pointerId))return;
    event.preventDefault();event.stopPropagation();
    const before=pointers.get(event.pointerId);
    const after={x:event.clientX,y:event.clientY};
    if(pointers.size===1)api.panBy(after.x-before.x,after.y-before.y);
    else{
      const other=Array.from(pointers.entries()).find(([id])=>id!==event.pointerId)?.[1];
      if(other){
        const prevD=distance(before,other),nextD=distance(after,other);
        const prevCenter=center(before,other),nextCenter=center(after,other);
        if(prevD>4&&nextD>4){
          api.zoomAt(Math.max(.05,Math.min(24,api.getZoom()*nextD/prevD)),nextCenter.x,nextCenter.y);
        }
        api.panBy(nextCenter.x-prevCenter.x,nextCenter.y-prevCenter.y);
      }
    }
    pointers.set(event.pointerId,after);
  },true);
  function stopGesture(event){
    if(!pointers.has(event.pointerId))return;
    if(mq.matches&&panEnabled){event.preventDefault();event.stopPropagation();}
    pointers.delete(event.pointerId);
    try{if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId)}catch(_){}
  }
  viewport.addEventListener("pointerup",stopGesture,true);
  viewport.addEventListener("pointercancel",stopGesture,true);

  mq.addEventListener("change",()=>{
    closePanels();pointers.clear();
    if(!mq.matches)setPan(false);
    else requestAnimationFrame(()=>api.fit());
  });
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closePanels()});
  if(mq.matches)requestAnimationFrame(()=>api.fit());
})();
