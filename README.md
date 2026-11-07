# Nexus Pixel Web

Editor de pixel art y animación. Versión **0.2.47** (reorganización para GitHub Pages).

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
