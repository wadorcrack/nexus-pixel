// Nexus Pixel PWA: registro offline e instalación opcional de Chrome.
(() => {
  "use strict";
  const installButton = document.getElementById("installPwa");
  let deferredPrompt = null;
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(error => {
        console.warn("Nexus Pixel: no se pudo registrar el modo sin conexión:", error);
      });
    });
  }
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    if (installButton && !window.matchMedia("(display-mode: standalone)").matches) {
      installButton.hidden = false;
    }
  });
  if (installButton) installButton.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    const promptEvent = deferredPrompt;
    deferredPrompt = null;
    installButton.hidden = true;
    try {
      await promptEvent.prompt();
      await promptEvent.userChoice;
    } catch (error) {
      console.warn("Nexus Pixel: no se pudo iniciar la instalación:", error);
    }
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    if (installButton) installButton.hidden = true;
  });
})();
