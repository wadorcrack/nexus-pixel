// Nexus Pixel 0.2.50 — tooltips fuera de los contenedores con scroll.
(() => {
  "use strict";
  const tooltip = document.createElement("div");
  tooltip.id = "nexusFloatingTooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.setAttribute("popover", "manual");
  document.body.appendChild(tooltip);

  let active = null;
  let keyboardFocus = false;

  function isOpen() {
    return tooltip.matches(":popover-open") || tooltip.classList.contains("tooltip-fallback-open");
  }

  function hide() {
    active = null;
    if (tooltip.matches(":popover-open")) tooltip.hidePopover();
    tooltip.classList.remove("tooltip-fallback-open");
    tooltip.textContent = "";
  }

  function position() {
    if (!active || !active.isConnected || !isOpen()) return;
    if (active.closest("[hidden]")) { hide(); return; }

    const anchor = active.getBoundingClientRect();
    if (anchor.bottom <= 0 || anchor.top >= window.innerHeight ||
        anchor.right <= 0 || anchor.left >= window.innerWidth) {
      hide();
      return;
    }
    const box = tooltip.getBoundingClientRect();
    const gap = 8, margin = 8;
    const x = Math.max(margin, Math.min(
      window.innerWidth - box.width - margin,
      anchor.left + anchor.width / 2 - box.width / 2
    ));
    let y = anchor.top - box.height - gap;
    if (y < margin) y = anchor.bottom + gap;
    if (y + box.height > window.innerHeight - margin) {
      y = Math.max(margin, anchor.top - box.height - gap);
    }
    tooltip.style.left = Math.round(x) + "px";
    tooltip.style.top = Math.round(y) + "px";
  }

  function show(element) {
    if (!element || !element.isConnected || element.closest("[hidden]")) {
      hide();
      return;
    }
    const message = element.getAttribute("data-tooltip");
    if (!message) { hide(); return; }
    if (active !== element) hide();
    active = element;
    tooltip.textContent = message;
    if (!isOpen()) {
      try {
        if (typeof tooltip.showPopover === "function") tooltip.showPopover();
      } catch (error) {
        console.warn("Tooltip flotante:", error);
      }
      if (!tooltip.matches(":popover-open")) {
        tooltip.classList.add("tooltip-fallback-open");
      }
    }
    position();
  }

  document.addEventListener("pointerover", event => {
    const element = event.target instanceof Element
      ? event.target.closest("[data-tooltip]") : null;
    if (element) show(element);
  }, true);

  document.addEventListener("pointerout", event => {
    if (!active || !(event.target instanceof Node) ||
        !active.contains(event.target)) return;
    if (event.relatedTarget instanceof Node && active.contains(event.relatedTarget)) return;
    hide();
  }, true);

  document.addEventListener("pointerdown", () => {
    keyboardFocus = false;
    hide();
  }, true);

  document.addEventListener("keydown", event => {
    if (event.key === "Tab") keyboardFocus = true;
    if (event.key === "Escape") hide();
  }, true);

  document.addEventListener("focusin", event => {
    if (!keyboardFocus || !(event.target instanceof Element)) return;
    const element = event.target.closest("[data-tooltip]");
    if (element) show(element);
  }, true);

  document.addEventListener("focusout", event => {
    if (active && event.target instanceof Node && active.contains(event.target)) hide();
  }, true);

  document.addEventListener("scroll", position, true);
  window.addEventListener("resize", position);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) hide();
  });
})();
