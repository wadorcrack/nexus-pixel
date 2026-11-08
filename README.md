# Nexus Pixel Web

Editor de pixel art y animación. Versión **0.2.69** (reorganización para GitHub Pages).

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

## Enfoque PC y futuro Android (v0.2.64)

Esta edición es **solo web para PC**. Se eliminaron `mobile.html`,
`mobile.js` y `mobile.css`, y se quitó la redirección automática a la
interfaz móvil. Los recursos comunes del editor y la versión PWA para PC
se mantienen. La futura aplicación Android se desarrollará por separado;
**no hay actualmente versión Android publicada**.

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

## Modo isométrico (0.2.58)

- En la barra de **Herramientas → Vista**, activa **Modo isométrico**.
- Muestra una retícula de rombos 2:1 (32 × 16 px por defecto), con ancho,
  alto, color y opacidad configurables. La retícula es **solo visual**:
  no se escribe en la imagen, las capas ni las exportaciones.
- Activa **Ajustar líneas a ejes isométricos** para que la herramienta Línea
  siga la diagonal izquierda, derecha o la vertical, tomando el ángulo
  de la retícula actual.
- Con la herramienta **Rombo isométrico**, arrastra para delinear un rombo
  o toca una sola vez para crear una baldosa con las dimensiones elegidas.
- El tamaño siempre se normaliza a números pares para que los vértices
  cuadren con el píxel real (sin suavizado de la imagen exportada).
- La cuadrícula guía rectangular se oculta temporalmente cuando el modo
  isométrico está activo. Al desactivarlo, conserva todos sus valores.
- Las opciones isométricas se guardan dentro del proyecto JSON (compatible
  con proyectos anteriores), también se restauran en Deshacer/Rehacer y
  se reinician al crear un proyecto nuevo.
- Funciona tanto en `index.html` como en `mobile.html`, mediante el
  mismo motor y archivo compartido `iso-geometry.js`. No usa librerías
  externas ni cambia la lógica de zoom táctil.

## Selección aditiva con Shift (0.2.59)

Las tres herramientas de selección (rectangular, libre y mágica) reemplazan
la máscara anterior al seleccionar sin modificadores. Si se mantiene **Shift**
al iniciar una selección, el área nueva se une a la existente (OR binario),
sin eliminar ni duplicar regiones. En las selecciones de arrastre, el estado
de Shift se guarda desde que comienza el gesto y también se acepta si está
pulsado al soltarlo.

- Rectangular: Shift + arrastrar para sumar un rectángulo.
- Libre: Shift + dibujar el contorno para sumar la región.
- Mágica: Shift + clic para sumar los píxeles conectados coincidentes.
- Cancelar o reiniciar una selección restablece el estado de Shift.

No cambia la máscara guardada de proyectos ni las exportaciones. El editor
móvil conserva sus controles táctiles; los usuarios con teclado externo
también pueden usar Shift.

## Biblioteca de paletas (0.2.60)

- La sección **PALETA DE COLORES** ahora solo selecciona muestras almacenadas; editar el
  color u opacidad del pincel **no altera una muestra guardada**. El botón **+** agrega
  una copia exacta del color de pintura disponible (RGBA).
- **BIBLIOTECA DE PALETAS**: selector único, crear una paleta vacía, renombrar y eliminar;
  solo una está activa a la vez. Las modificaciones se guardan en `localStorage`
  (`nexus-pixel-palette-library-v1`) y la paleta activa continúa en los proyectos nuevos.
- Se admiten hasta **48 paletas**, con hasta **128 colores cada una**. La biblioteca nunca
  permite borrar su última paleta.
- **Exportar / importar una paleta** conserva el formato JSON v1 anterior
  (`type: nexus-pixel-palette`); importar crea una nueva entrada sin sobrescribir.
  **Exportar / importar biblioteca** utiliza un JSON adicional
  (`type: nexus-pixel-palette-library`, versión 1): al importar, las paletas se
  agregan sin borrar las anteriores, y se activa la que venía seleccionada.
- Los proyectos nuevos **no reinician** la biblioteca ni su selección. Al abrir un
  proyecto viejo con paleta incorporada, el editor busca una idéntica y, si no
  existe, crea una nueva en la biblioteca; se conserva la compatibilidad con
  proyectos JSON v3.
- El historial Deshacer/Rehacer se concentra en la edición; no revierte la biblioteca
  global por accidente. Los colores y los píxeles exportados no cambian.
- Se aplican las mismas funciones en PC y móvil; la PWA incluye
  `palette-library.js` para trabajar offline.
- Si el almacenamiento local está bloqueado, el editor sigue funcionando pero
  muestra un aviso para exportar la biblioteca como respaldo.

### Ajuste de estabilidad 0.2.61

Al iniciar, se recalcula la muestra seleccionada según el color de pintura
actual y el contenido real de la biblioteca guardada. Eliminar una muestra
requiere un índice válido, evitando borrar otra muestra si la biblioteca
activa se ha modificado o es más pequeña que la anterior.

### Biblioteca en ventana con tarjetas (0.2.62)

La sección **Paleta de colores** ahora muestra solo un acceso a **Biblioteca de paletas**,
el nombre de la paleta activa y sus muestras para pintar. Al pulsar ese acceso
se abre un diálogo propio, tanto en PC como en móvil, sin abandonar el lienzo.

En el diálogo aparece una lista de tarjetas, una por paleta. Cada una muestra
su **nombre, número de colores, muestras visuales RGBA, y estado de selección**.
La lista muestra 24 colores como vista previa, con **Ver todos** para expandir
las paletas grandes sin saturar el navegador en equipos modestos.
El botón **Usar paleta** activa exclusivamente esa paleta. Cada tarjeta permite
**Renombrar** y **Eliminar**, incluso si no es la activa.

Las opciones **Nueva paleta**, **Importar/Exportar paleta** y
**Importar/Exportar biblioteca** se movieron a la ventana. Se mantienen
el formato JSON de intercambio y el almacenamiento local de v0.2.60.
La ventana sigue la misma regla que otros diálogos: no se cierra al pulsar
fuera ni con Esc; se cierra con su botón X.

### Selección múltiple de capas y mover (0.2.63)

**Mover** actúa únicamente en las capas seleccionadas, visibles y desbloqueadas; las
demás capas no se modifican. Si todas las seleccionadas están bloqueadas u
ocultas, no comienza el movimiento y no se crea Deshacer. El dibujo se sigue
haciendo en la capa activa (una sola).

El panel CAPAS admite clic para seleccionar una capa, Ctrl/Cmd + clic para
añadir/quitar, Shift + clic para seleccionar un rango, y casillas independientes
para selección múltiple táctil en móvil. La última capa no puede desmarcarse.
Deshacer/Rehacer y los proyectos JSON guardan/restauran la selección de capas;
se conserva la compatibilidad con proyectos anteriores. Al crear, eliminar,
importar y reordenar capas se mantiene una selección válida.

## Organizar fotogramas en la línea de tiempo (v0.2.64)

- **PC:** arrastra la miniatura de un fotograma sobre otra de **la misma fila de animación**
  para moverlo a esa posición. No permite mezclar fotogramas entre filas diferentes.
- Selecciona un fotograma y usa las flechas **←** y **→** en la barra de la
  línea de tiempo para desplazarlo una posición sin utilizar arrastrar y soltar.
- La operación conserva el contenido RGBA y los milisegundos de cada fotograma,
  respeta el fotograma actual, admite Deshacer/Rehacer y queda incluida en el orden
  guardado en el proyecto JSON y en la exportación posterior de animaciones.
- La reproducción se detiene antes de cambiar el orden para que no se mezcle con el arrastre.

## Barra de la línea de tiempo (v0.2.65)

La barra se organiza en grupos visualmente diferenciados: **Filas** (crear/borrar
fila de animación), **Reproducir** (único botón Play/Detener con triángulo y
cuadrado sólidos), **Fotogramas** (crear, duplicar y borrar) y **Duración · ms**
(campo del fotograma seleccionado). Se quitaron las flechas de mover fotogramas
del encabezado; **arrastrar y soltar miniaturas dentro de la misma fila**
sigue siendo la forma de organizarlos, con Deshacer/Rehacer y persistencia del orden.

## Línea de tiempo mínima y atajo Espacio (0.2.66)

Barra de iconos separados únicamente por tres líneas verticales: operaciones
de filas, reproducción, operaciones de fotogramas y entrada numérica de duración.
Se retiran los textos/rectángulos de los grupos. El Play tiene iconos sólidos
y no adopta la apariencia de botón seleccionado durante la reproducción.

**Espacio** alterna reproducir/detener cuando la línea de tiempo está
habilitada y el foco no está en un campo, botón, selector, ventana u otro control.
Se ignoran eventos de repetición por tecla mantenida. El Play sigue admitiendo
clic y activación de teclado habitual; el arrastre para organizar fotogramas no cambia.

## Tema claro más cómodo y acentos consistentes (0.2.67)

Fondo y paneles pasan de blancos intensos a grises azulados suaves, con
controles claramente diferenciados. Los acentos de selección, enfoque, botones
activos, paletas y fotogramas emplean el mismo azul petróleo. Se conservan las
señales semánticas (naranja para el color secundario, rojo para alertas,
verde para éxito), el tema oscuro y todos los colores del lienzo y recursos.
El tema claro también ajusta el color de la barra del navegador.

## Limpieza de textos de ayuda en PC (0.2.68)

Se eliminaron los textos instructivos que ocupaban espacio permanente en la interfaz:
la explicación de selección con Shift, el párrafo isométrico, la nota de selección
de capas (incluida la referencia obsoleta a móvil), el aviso sobre extensiones
al exportar, el texto introductorio de exportación y la explicación redundante
de la biblioteca de paletas. Se mantienen títulos, nombres de campos, tooltips
al pasar el ratón, atributos de accesibilidad, mensajes de estado y
configuraciones necesarias. No cambian los archivos ni los colores de los dibujos.

## Biblioteca gráfica v1 · PC (0.2.69)

Nueva Biblioteca gráfica con galería de vistas previas. **Guardar dibujo**
captura todos los píxeles visibles del fotograma actual o solo los de la selección.
Cada capa visible con contenido se conserva como un fragmento independiente
con nombre, tamaño y coordenadas; el conjunto se previsualiza como un único
objeto compuesto. Piezas simples y edificios de varias capas conviven en
el mismo catálogo. Soporta categorías, búsqueda, eliminación y colocación
pixel perfect sobre la capa activa, con previsualización en el lienzo,
Enter no requerido, clic para confirmar, Escape para cancelar y Ctrl+Z
para deshacer. No modifica colores ni tamaño del lienzo automáticamente.

La biblioteca persiste en **IndexedDB**, separada de los proyectos:
hasta 256 piezas, máximo 32 fragmentos por pieza y dimensiones 2000×2000.
El paquete **.nxpack** es un ZIP independiente con `library.json`,
un PNG por vista previa y los PNG originales de cada fragmento, junto
a sus posiciones, categorías, nombres y dimensiones. Importación con
comprobaciones de estructura, dimensiones, tamaño y CRC del ZIP.
Se importan piezas sin sobrescribir la biblioteca actual. Los archivos
se exportan sin conexión y pueden reutilizarse en otros proyectos.

Limitación inicial: al colocar una composición se estampa su vista previa
en la capa activa; las piezas que la componen quedan conservadas en la
biblioteca y paquete, pero la edición de cada fragmento individual tras
insertar se habilitará en una versión posterior.
