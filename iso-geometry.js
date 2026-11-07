// Funciones matemáticas de la guía isométrica, sin dependencias del editor.
// Las coordenadas están expresadas siempre en píxeles reales del documento.
const NexusPixelIso = (() => {
  "use strict";
  function step(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(2, Math.min(512, Math.round(n / 2) * 2)) : fallback;
  }
  function snapLine(start, target, tileWidth, tileHeight, width, height) {
    const dx = target.x - start.x, dy = target.y - start.y;
    if (!dx && !dy) return {x:start.x,y:start.y};
    const slope = step(tileHeight, 16) / step(tileWidth, 32);
    const axes = [[0, 1], [1, slope], [1, -slope]];
    let best = null, score = Infinity;
    for (const [ax, ay] of axes) {
      const t = (dx * ax + dy * ay) / (ax * ax + ay * ay);
      const x = Math.max(0, Math.min(width - 1, Math.round(start.x + t * ax)));
      const y = Math.max(0, Math.min(height - 1, Math.round(start.y + t * ay)));
      const error = (target.x - x) ** 2 + (target.y - y) ** 2;
      if (error < score) {
        score = error;
        best = {x,y};
      }
    }
    return best;
  }
  function diamond(start, end, tileWidth, tileHeight, width, height) {
    let x0 = Math.min(start.x,end.x),x1 = Math.max(start.x,end.x);
    let y0 = Math.min(start.y,end.y),y1 = Math.max(start.y,end.y);
    if (start.x === end.x && start.y === end.y) {
      const halfWidth = step(tileWidth,32)/2;
      const halfHeight = step(tileHeight,16)/2;
      x0 = start.x - halfWidth;x1 = start.x + halfWidth;
      y0 = start.y - halfHeight;y1 = start.y + halfHeight;
    }
    x0 = Math.max(0, Math.min(width-1, Math.round(x0)));
    x1 = Math.max(0, Math.min(width-1, Math.round(x1)));
    y0 = Math.max(0, Math.min(height-1, Math.round(y0)));
    y1 = Math.max(0, Math.min(height-1, Math.round(y1)));
    const mx=Math.round((x0+x1)/2),my=Math.round((y0+y1)/2);
    return [{x:mx,y:y0},{x:x1,y:my},{x:mx,y:y1},{x:x0,y:my}];
  }
  function gridSegments(bounds, tileWidth, tileHeight, zoom) {
    const tw=step(tileWidth,32),th=step(tileHeight,16),ratio=th/tw;
    const x0=Math.max(0,bounds.x0),y0=Math.max(0,bounds.y0),
      x1=Math.max(x0,bounds.x1),y1=Math.max(y0,bounds.y1);
    const lines=[];
    for(const sign of [-1,1]){
      const m=sign*ratio;
      const corners=[y0-m*x0,y0-m*x1,y1-m*x0,y1-m*x1];
      const kmin=Math.floor(Math.min(...corners)/th)-1;
      const kmax=Math.ceil(Math.max(...corners)/th)+1;
      // Evitar miles de trazos al alejarse en lienzos muy grandes.
      const stride=Math.max(1,Math.ceil(5/Math.max(.01,zoom*th)),
        Math.ceil((kmax-kmin+1)/350));
      const first=Math.ceil(kmin/stride)*stride;
      for(let k=first;k<=kmax;k+=stride){
        const offset=k*th;
        lines.push({x0,y0:m*x0+offset,x1,y1:m*x1+offset});
      }
    }
    return lines;
  }
  return {step,snapLine,diamond,gridSegments};
})();
