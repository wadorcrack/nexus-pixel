# Nexus Pixel Web

Editor de pixel art y animación. Versión **0.2.49** (reorganización para GitHub Pages).

## Archivos

- `index.html` — interfaz y estructura.
- `style.css` — estilos de la aplicación.
- `app.js` — herramientas, animaciones, proyectos, importación y exportación.
- `.nojekyll` — indica a GitHub Pages que publique los archivos sin procesarlos con Jekyll.

## Abrir localmente

Abre `index.html` en Chrome o Chromium. Mantén los tres archivos juntos en la misma carpeta.

## Publicar mediante GitHub Pages

1. Crea un repositorio **público** llamado `nexus-pixel` en GitHub.
2. Sube los archivos de esta carpeta **a la raíz del repositorio**, no la carpeta contenedora.
3. Ve a **Settings → Pages → Build and deployment**.
4. En **Source**, selecciona **Deploy from a branch**; elige **main** y **/(root)**; guarda.
5. Una vez publicado, abre `https://TU_USUARIO.github.io/nexus-pixel/`.

No se necesita Node, un servidor de aplicaciones ni un proceso de compilación. GitHub Pages sirve archivos estáticos.

## Privacidad y proyectos

Los dibujos se editan en el navegador; para conservarlos, utiliza **Guardar proyecto** y guarda el archivo JSON en tu dispositivo. La publicación es estática: no incluye cuentas ni almacenamiento en servidores. Exportar PNG, GIF o spritesheet sigue funcionando desde el navegador.

## Licencias de terceros

La iconografía SVG incluida se basa en Lucide y conserva su referencia de licencia ISC en `index.html`.


## Instalar como aplicación (PWA)

Publica la rama `main` desde **Settings → Pages → Deploy from a branch → main → /(root)**.
Abre **https://wadorcrack.github.io/nexus-pixel/** en Chrome. Usa el botón de instalación
del navegador o el botón de descargar en el encabezado cuando aparezca.
Después de la primera visita con Internet, el editor puede abrirse sin conexión.

- `manifest.webmanifest` — identidad, iconos y modo de ventana independiente.
- `pwa.js` — registra el service worker y presenta el botón opcional de instalar.
- `sw.js` — almacena localmente los archivos esenciales.
- `icons/` — iconos PNG 192 × 192 y 512 × 512.

**Importante:** el modo sin conexión guarda la aplicación, **no los dibujos**.
Los usuarios deben guardar sus proyectos JSON y exportaciones mediante las opciones del editor.
Para desplegar nuevas versiones, actualiza la versión de caché en `sw.js`.

## Capas y selección (v0.2.49)

- Reordena las capas mediante el asa ⠿ o los botones de subir y bajar.
- Se reordenan los píxeles de **todos los fotogramas de todas las animaciones**, y también la visibilidad y el bloqueo.
- El orden se conserva en el proyecto JSON. Las operaciones se pueden deshacer con Ctrl+Z según el límite de memoria del historial.
- Con una selección rectangular, libre o mágica activa, pulsa **Invertir selección** para alternar entre la zona elegida y el resto del lienzo.
