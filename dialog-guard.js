// Nexus Pixel 0.2.56: las configuraciones de los dialogos no se descartan
// cuando se hace clic fuera, se pulsa Esc o se intenta cerrarlos accidentalmente.
(() => {
  "use strict";
  for (const id of ["resizeDialog", "importDialog", "exportDialog"]) {
    const dialog = document.getElementById(id);
    if (!dialog) continue;

    dialog.setAttribute("closedby", "none");
    if ("closedBy" in dialog) dialog.closedBy = "none";

    // Conservar la distinción entre el cierre solicitado por nuestros botones
    // y un cierre ajeno al editor. Esto protege importaciones aún sin confirmar.
    const nativeClose = dialog.close.bind(dialog);
    let explicitClose = false;
    dialog.close = (...args) => {
      explicitClose = true;
      try {
        return nativeClose(...args);
      } catch (error) {
        explicitClose = false;
        throw error;
      }
    };

    // Capturar la pulsación antes que posibles listeners heredados que cerraban
    // el diálogo al pulsar el fondo. Los botones internos no se interceptan.
    for (const type of ["pointerdown", "pointerup", "click"]) {
      dialog.addEventListener(type, event => {
        if (event.target === dialog) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      }, true);
    }

    dialog.addEventListener("cancel", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);

    dialog.addEventListener("close", event => {
      if (explicitClose) {
        explicitClose = false;
        return;
      }
      // El manejador antiguo de importación liberaba el archivo al cerrar.
      // Detener ese manejador y reabrir impide perder los ajustes pendientes.
      event.stopImmediatePropagation();
      queueMicrotask(() => {
        if (dialog.isConnected && !dialog.open) {
          try {
            dialog.showModal();
          } catch (error) {
            console.warn("Nexus Pixel: no se pudo restaurar la ventana", error);
          }
        }
      });
    }, true);
  }
})();
