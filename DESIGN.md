# Noël · Guía de diseño

## Dirección

Taller editorial de invierno: cálido, sereno y con detalles hechos a mano.
La Navidad se expresa en el abeto ilustrado, adornos, tonos de bosque y papel,
sin nieve permanente, temporizadores, confeti o efectos que compitan con el chat.

## Sistema

- Fondo claro: papel `#F7F4ED`. Oscuro: bosque `#111C17`.
- Acción principal: abeto `#254D3E`; en oscuro, latón claro `#DDC68E`.
- Borgoña `#873745` para énfasis; en oscuro usa su equivalente rosado legible.
- Tipografía funcional: Work Sans variable local, con su licencia OFL.
- Titulares: Georgia, serif del dispositivo. No se descarga ninguna fuente.
- Bordes finos, radio 4px, sombras mínimas; la jerarquía depende del espacio.
- Escala: 8/12/16/24/32/48. El protagonista es el contenido, no el cromo.

Los HSL del host viven en `template.json`. Los colores del frame se concentran
en variables `.noel` y `.noel.dark` en `styles.js`. Mantener ambas capas coherentes;
los estilos del frame no se filtran al host.

## Componentes de referencia

- `Star`: SVG original decorativo, oculto de lectores de pantalla.
- `WinterArtwork`: ilustración vectorial original del árbol y adornos.
- `RecipeDetail`: panel de prompt, textarea seleccionable y estado de copia manual.
- `Workshop`: compone navegación, hero, filtros, tarjetas, checklist y guía.
- `Navigation`, `History`, `Header`, `Welcome`: superficies del entorno de SDK 2;
  se implementan en `SurfaceApp.jsx` y reciben modelos reactivos del host.
- `.button.primary`: acción principal con contraste abeto/papel o latón/bosque.
- `.recipe-card`: tarjeta que es un botón real; expone selección con `aria-pressed`.
- `.checklist`: controles checkbox nativos, etiquetas y avance anunciable.

No exponer botones que simulen datos reales. Las recetas son contenido editorial
de ejemplo; la checklist no representa tareas del agente. Los enlaces operativos
solo se muestran cuando el SDK aporta navegación autorizada y no está en preview.

## Adaptación y accesibilidad

Tres columnas de ideas en escritorio, dos hasta 900px, una hasta 550px.
El hero apila texto/ilustración y la checklist se coloca sobre la navegación en móvil.
Nada usa ancho fijo superior al contenedor; textarea admite redimensionado vertical.

Todos los controles conservan foco visible. Filtros y secciones usan botones;
la guía usa details/summary. Los prompts se copian mediante selección manual:
no depende de permisos de clipboard de un frame aislado. Movimiento reducido
desactiva animaciones y scroll suave. No añadir nieve intermitente ni luces parpadeantes.

## Límites del ejemplo

### Nieve y scrollbars

`presentation.composerDecoration: "snow"` selecciona el preset seguro del host:
pequeñas acumulaciones en las esquinas del compositor, más abundantes en modo
compacto. Usa siluetas vectoriales estáticas, con borde frío en claro y tono
blanco suave en oscuro. No captura clics, no tapa el texto ni desactiva el input.
En alto contraste se oculta la decoración. No hay nieve cayendo ni timers.

`presentation.scrollbars: "native"` conserva el desplazamiento nativo y utiliza
thumbs visibles y discretos, coherentes en el host y en los frames. El panel
de ejemplo incluye `nativeScroll.js` para reproducirlo también en su galería
independiente. No introducir librerías de scrollbar, ocultar el thumb ni
interceptar la rueda. La bienvenida mantiene el scroll exterior del chat.

SDK 2 sustituye la presentación de navegación, cabecera, historial y bienvenida
con React aislado del paquete. El compositor y mensajes conservan su JSX y
controladores en Urano. No importar módulos privados dentro del bundle.
Para añadir otro tipo de superficie hace falta un contrato nuevo en el host.
