// Nexus Pixel: tema automático, claro y oscuro con persistencia local.
(() => {
  "use strict";
  const KEY="nexus-pixel-theme";
  const VALID=new Set(["auto","dark","light"]);
  const system=typeof window.matchMedia==="function"
    ?window.matchMedia("(prefers-color-scheme: dark)"):null;
  let mode="auto";
  try {
    const saved=window.localStorage.getItem(KEY);
    if(VALID.has(saved))mode=saved;
  }catch(_){}
  function effective(){return mode==="auto"?(system&&system.matches?"dark":"light"):mode}
  function apply(){
    const value=effective();
    document.documentElement.setAttribute("data-theme",value);
    document.documentElement.style.colorScheme=value;
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute("content",value==="light"?"#dce5ed":"#1d2430");
  }
  function syncPicker(){
    document.querySelectorAll("[data-theme-picker]").forEach(el=>{
      if(el.value!==mode)el.value=mode;
    });
  }
  function setMode(value){
    if(!VALID.has(value))return;
    mode=value;
    try{window.localStorage.setItem(KEY,value)}catch(_){}
    apply();
    syncPicker();
  }
  apply();
  if(system){
    const onSystemChange=()=>{if(mode==="auto")apply()};
    if(typeof system.addEventListener==="function")system.addEventListener("change",onSystemChange);
    else if(typeof system.addListener==="function")system.addListener(onSystemChange);
  }
  document.addEventListener("DOMContentLoaded",()=>{
    syncPicker();
    document.addEventListener("change",event=>{
      const input=event.target;
      if(input&&typeof input.matches==="function"&&input.matches("[data-theme-picker]")){
        setMode(input.value);
      }
    });
  });
  window.NexusPixelTheme={setMode,getMode:()=>mode,getEffectiveTheme:effective};
})();
