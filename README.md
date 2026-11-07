# Nexus Pixel Web

Editor de pixel art y animación. Versión **0.2.57** (reorganización para GitHub Pages).

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

## Capas y selección (v0.2.54)

- Reordena las capas mediante el asa ⠿ o los botones de subir y bajar.
- Se reordenan los píxeles de **todos los fotogramas de todas las animaciones**, y también la visibilidad y el bloqueo.
- El orden se conserva en el proyecto JSON. Las operaciones se pueden deshacer con Ctrl+Z según el límite de memoria del historial.
- Con una selección rectangular, libre o mágica activa, pulsa **Invertir selección** para alternar entre la zona elegida y el resto del lienzo.

## Tooltips (0.2.54)

- Los tooltips de botones se muestran como elementos flotantes sobre el lienzo y los paneles.
- No se recortan por el desplazamiento de las barras laterales, ni aparecen detrás del visor.
- Siguen el botón al desplazarse por los paneles, se ajustan a los bordes de la ventana y admiten navegación por teclado.
- `tooltip.js` gestiona estas etiquetas de ayuda. El service worker lo almacena para el modo offline.

## Confirmación al salir (0.2.54)

El editor solicita la confirmación **nativa de Chrome** al cerrar la pestaña, cerrar
la ventana PWA, recargar o navegar fuera de Nexus Pixel. El navegador decide si
mostrarla (generalmente exige una interacción previa) y utiliza su propio texto;
una página web no puede reemplazarlo por una ventana personalizada.

Esta confirmación **no guarda automáticamente** el proyecto. Sigue siendo
necesario guardar el archivo JSON si quieres conservar los cambios.

## Interfaz móvil (0.2.54)

La misma URL sirve en teléfonos y computadoras. En pantallas estrechas:
- El lienzo ocupa el área central y los paneles laterales se abren desde la barra inferior.
- **Herramientas**, **Colores** y **Capas** se abren como cajones que se pueden cerrar sin cambiar el dibujo.
- **Mover vista** permite arrastrar el lienzo con un dedo o ajustar el zoom con dos dedos; desactívalo para volver a pintar.
- El botón **Color 1/2** elige el color que usarán los toques, incluidos los valores de opacidad guardados.
- Controles rápidos de **deshacer**, **rehacer**, **zoom** y **ajustar**.
- La línea de tiempo y las ventanas de importación/exportación se adaptan a la pantalla.
- El diseño original de escritorio se conserva.

Los archivos `mobile.css` y `mobile.js` no modifican los proyectos existentes.
En dispositivos con recursos limitados, trabaja con lienzos y capas acordes a la memoria del teléfono.

## HTML separados para móvil y escritorio (0.2.54)

- `index.html`: interfaz PC, detección de móvil y redirección.
- `mobile.html`: interfaz móvil, con paneles táctiles, mover vista y zoom.
- `style.css` y `app.js`: estilos y motor de dibujo compartidos.
- `mobile.css` y `mobile.js`: distribución y gestos táctiles solo para móviles.

`https://wadorcrack.github.io/nexus-pixel/` detecta los dispositivos móviles y abre `mobile.html`.
Prueba manual en PC: `/?mobile=1`. Forzar PC en móvil: `/?desktop=1`.
`sw.js` incluye ambos HTML para uso sin conexión después de la primera visita.

## Arreglos móviles 0.2.54

- Un dedo pinta (o desplaza con «Mover vista»), pero **dos dedos siempre
  permiten pellizcar para ampliar, reducir y desplazar**.
- Cuando se inicia un gesto con dos dedos se cancela el trazo del primer dedo
  y se intenta restaurar su imagen anterior desde el historial disponible.
- El botón **✕ Sel.** aparece al usar una herramienta de selección
  o después de seleccionar píxeles. Elimina la máscara y vuelve al lápiz.
- Los controles táctiles se implementan solo en `mobile.js`; el mismo
  `app.js` y los formatos JSON continúan compartidos con PC.

## Ventanas modales protegidas (0.2.56)

En PC y móvil, los cuadros **Importar imagen**, **Exportar** y
**Redimensionar lienzo** no se cierran al hacer clic o tocar fuera de ellos.
También se evita el cierre por Escape para no perder configuraciones accidentales.

Se cierran únicamente mediante los botones de cerrar/cancelar o al
terminar la operación. Una importación pendiente se conserva en el diálogo
hasta que el usuario la cancele o confirme; el cuadro Exportar mantiene
el nombre y las opciones mientras permanece abierto.

Ninguna herramienta de dibujo ni formato de proyecto se modificó.

## Protección de ventanas de configuración (0.2.56)

Se añadió `dialog-guard.js` a las interfaces PC y móvil.
Los diálogos de **Importación**, **Exportación** y **Redimensionado** permanecen
abiertos aunque se haga clic sobre el fondo o se pulse Esc. Los botones internos
de cancelar, cerrar y confirmar siguen funcionando.

La protección intercepta manejadores heredados de clic y también puede reabrir
un cuadro cerrado de forma inesperada sin ejecutar la limpieza de una
importación pendiente, conservando sus campos y recursos.

El service worker ahora usa **network-first**: con Internet obtiene los recursos
actuales de GitHub Pages y los cachea; sin Internet recurre a los archivos
guardados, incluida la interfaz móvil. El nuevo archivo `dialog-guard.js`
queda precacheado. Esta mejora evita que futuras versiones queden atrapadas
en la caché anterior.

## Tema de la interfaz (0.2.57)

**Automático** sigue el tema del sistema y responde a cambios en directo.
**Oscuro** mantiene los colores originales. **Claro** usa una paleta legible.
La preferencia persiste en `localStorage`, clave `nexus-pixel-theme`, compartida
entre el editor PC y el móvil.

PC: selector **Tema** en la cabecera.
Móvil: **Colores → Apariencia → Tema**.

`theme.js` aplica el tema antes de cargar los estilos para evitar parpadeos;
`theme.css` define la paleta clara. Las variables de `style.css` y
`mobile.css` conservan como fallback el tema oscuro previo. Las imágenes,
las capas y las exportaciones no se modifican.
La PWA precachea ambos nuevos recursos para usarlos sin conexión.
