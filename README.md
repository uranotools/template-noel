# Noël · Winter Workshop

Una plantilla navideña open source para **Urano Desktop · Template SDK 2**.
Verde abeto, papel marfil, borgoña y latón. ES/EN, claro/oscuro y movimiento reducido.

![Entorno de desarrollo Noël con datos ficticios](docs/noel-light.png)

[Modo oscuro](docs/noel-dark.png) · [Historial móvil](docs/noel-mobile.png)

## Qué incluye

- Nieve estática en las esquinas del compositor, más visible al minimizarlo,
  y scrollbars nativos visibles en claro/oscuro. Se activa desde `presentation`
  en el manifiesto; requiere el host actualizado, sin reemplazar el input.

- Tema completo del host, fuente Work Sans local y texto de loading.
- **Navegación, header, historial y bienvenida React propios del paquete**,
  conectados con los modelos y acciones reales de Urano mediante SDK 2.
- Rail navideño con explorador de módulos, historial con búsqueda y acciones,
  selección de agentes/integraciones y bienvenida navideña con agentes reales.
- Panel React independiente **Noël · Taller de invierno**, accesible desde **Más**.
- Seis recetas bilingües de prompts, filtros, selección de texto para copiar,
  checklist de cierre y navegación basada únicamente en IDs autorizados del host.
- Fuentes editables, ilustración SVG original, scripts de build/ZIP y licencia MIT.

**La versión 2 ya no es solo una paleta de Studio.** Los cuatro componentes se
dibujan desde `ui/components/SurfaceApp.jsx` dentro de frames aislados; puedes
modificarlos en Dev Link y distribuirlos por ZIP sin recompilar Urano.
El compositor, mensajes, ejecución y confirmaciones siguen en el host para
conservar sus funciones. El botón nativo **Herramientas** mantiene disponibles
los controles originales de cada pantalla. No crea un agente ni le asigna
herramientas nuevas: permite trabajar con tus agentes configurados.

## Instalar el ejemplo

1. Abre **Mi entorno → Plantillas → Instalar ZIP** en Urano Desktop.
2. Selecciona `release/urano-noel-2.0.1.zip` (requiere host con SDK 2).
3. Pulsa **Usar plantilla** en la tarjeta **Noël · Winter Workshop**.
4. Usa **Explorar → Noël · Taller de invierno** para entrar al panel adicional.
5. Para volver, usa **Mi entorno → Plantillas → Urano · Original**.
   Recuperación nativa: **Ctrl/Cmd + Alt + Shift + U**.

Instalar no activa automáticamente. Este proyecto no se registra como MCP y no
modifica negocios, agentes, roles, permisos ni el flavor predeterminado.

## Vincular la carpeta / desarrollo

En **Mi entorno → Plantillas → DEV TOOLS → Vincular carpeta**, selecciona esta
carpeta, que contiene `template.json`. Usa **Vista previa** y después **Usar plantilla**.
Urano revalida el Dev Link aproximadamente cada dos segundos.

```powershell
npm install
npm run build
npm test
```

Los cambios de `template.json` no necesitan build. Para editar React:

```powershell
npm run watch
```

Eso reconstruye `ui/bundle.js`; Urano no ejecuta JSX directamente. Necesitas Node
compatible con Vite 8 (Node 22.12+ o una versión LTS posterior compatible).
No cambies el `id` de un enlace activo. Para un fork, cambia `id` y `name` antes
de vincular, y conserva los avisos de licencia.

## Galería local, sin Urano

```powershell
npm run preview
```

Abre la URL de Vite para ver el entorno completo con modelos ficticios.
Prueba `/?theme=dark&lang=en` y `/?theme=light&lang=es`.
`?surface=history|navigation|header|welcome` muestra una superficie individual;
`?surface=panel` muestra el taller adicional. Usa un solo valor, sin los separadores `|`.
El puente de demostración vive solo en `ui/preview.jsx`; no entra en el bundle
instalable. No ofrece navegación ni datos de sesión. La verificación real del
aislamiento se hace usando **Vista previa** en Urano Desktop.

## Crear un ZIP

```powershell
npm run build
npm test
npm run pack
```

El resultado va a `release/<id>-<version>.zip`, con `template.json` en la raíz.
El script usa una lista explícita de archivos: no incluye dependencias, `.git`,
cachés ni ZIPs anteriores. Incluye fuentes React y scripts para que el receptor
también pueda aprender y modificar el ejemplo. Para actualizar una instalación,
sube `version` en `template.json` y genera el ZIP otra vez.

## Dónde modificar

- `template.json`: identidad, ambos temas, loading, composición, contratos y vistas.
- `ui/components/Workshop.jsx`: panel, ilustración, checklist y detalle del prompt.
- `ui/components/SurfaceApp.jsx`: tus cuatro superficies React, con modelos y acciones del SDK.
- `ui/components/surfaceStyles.js`: diseño de navegación, cabecera, historial y bienvenida.
- `ui/components/styles.js`: CSS del frame, responsive y movimiento reducido.
- `ui/components/recipes.js`: recetas ES/EN de ejemplo, sin datos del usuario.
- `ui/Workshop.jsx`: punto de entrada del runtime real.
- `ui/preview.jsx`: puente de demostración exclusivo del desarrollo.
- `fonts/`: fuente del host y licencia; el build la embebe también en la vista.

La checklist editorial se conserva solo en memoria del panel. No se envían prompts: el usuario
selecciona el texto, lo copia y lo adapta en su chat. No hay red, almacenamiento
persistente, SDKs de terceros, timers, calendario, mensajes automáticos ni permisos
de herramientas. Los componentes solo reciben metadatos seleccionados del host:
agentes disponibles y títulos/estado de sesiones, sin mensajes ni credenciales.
Las acciones de carga, búsqueda, fijado y lanzamiento llaman al controlador de
Auth; eliminar y salir requieren confirmaciones del host. Los snapshots se
actualizan sin recargar el frame, conservando el foco durante la búsqueda.

## Licencia y documentación

Código y arte original: **MIT**, ver `LICENSE`. Fuente: SIL OFL, ver
`THIRD_PARTY_LICENSES.md`. Puedes copiar, modificar y redistribuir el proyecto.
No se ha publicado automáticamente en ningún marketplace ni repositorio remoto.

En el workspace Urano: [guía completa](../../UranoDesktop/docs/CREATE_TEMPLATE_GUIDE.md).
Reglas visuales: [DESIGN.md](DESIGN.md).
