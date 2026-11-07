import React, { useRef, useState } from "react";
import workSans from "../../fonts/WorkSans-Variable.ttf?url";
import { recipes } from "./recipes.js";
import { styles } from "./styles.js";
import { nativeScrollStyles } from './nativeScroll.js';

export function Star({ className = "", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="m20 2 4.5 13.5L38 20l-13.5 4.5L20 38l-4.5-13.5L2 20l13.5-4.5L20 2Z"
        fill="currentColor"
      />
      <path
        d="m7 7 13 9 13-9-9 13 9 13-13-9-13 9 9-13-9-13Z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function WinterArtwork() {
  return (
    <svg
      className="winter-art"
      viewBox="0 0 420 430"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="213"
        cy="393"
        rx="135"
        ry="13"
        fill="currentColor"
        opacity=".05"
      />
      <path
        d="M210 20v100M105 0v85M323 0v150"
        stroke="currentColor"
        opacity=".35"
      />
      <path
        d="m210 104 8 21 22 8-22 8-8 22-8-22-22-8 22-8 8-21Z"
        fill="#d8b565"
      />
      <circle cx="105" cy="105" r="25" fill="#8e3d48" />
      <path
        d="M88 88c3 22 13 34 34 32M94 82c0 21 12 44 25 43"
        stroke="#efdac0"
        opacity=".45"
      />
      <circle cx="323" cy="174" r="26" fill="#c8a660" />
      <path
        d="m305 156 36 36m-36-12 24-25m-12 39 25-25"
        stroke="#fff1d1"
        opacity=".5"
      />
      <path
        d="m210 150-63 79h31l-69 77h43l-62 71h240l-62-71h43l-69-77h31l-63-79Z"
        fill="#2e5d4c"
      />
      <path
        d="M210 190v184m-51-105 51 24 50-24m-80-40 30 15 30-15m-100 99 70 32 69-32"
        stroke="#acc0a1"
        opacity=".4"
      />
      <path d="M198 378h24v18h-24z" fill="#b18a57" />
      <circle cx="183" cy="278" r="6" fill="#e1c887" />
      <circle cx="239" cy="310" r="7" fill="#b65762" />
      <circle cx="177" cy="345" r="7" fill="#b65762" />
      <circle cx="229" cy="236" r="4" fill="#e1c887" />
      <path
        d="m58 218 4 11 11 4-11 4-4 11-4-11-11-4 11-4 4-11Zm293 65 4 11 11 4-11 4-4 11-4-11-11-4 11-4 4-11Z"
        fill="#c8a660"
      />
      <circle cx="139" cy="159" r="2" fill="currentColor" />
      <circle cx="283" cy="104" r="2" fill="currentColor" />
      <circle cx="67" cy="314" r="2" fill="currentColor" />
    </svg>
  );
}

function RecipeDetail({ recipe, en, close }) {
  const ref = useRef(null);
  const [selected, setSelected] = useState(false);
  const content = recipe[en ? "en" : "es"];
  return (
    <section className="recipe-detail" aria-labelledby="recipe-title">
      <div className="section-line">
        <span className="eyebrow">
          {en ? "YOUR STARTING POINT" : "TU PUNTO DE PARTIDA"}
        </span>
        <button className="text-button" onClick={close}>
          {en ? "Close" : "Cerrar"} <span aria-hidden="true">×</span>
        </button>
      </div>
      <h3 id="recipe-title">{content[0]}</h3>
      <p>
        {en
          ? "Bring this idea to a conversation with your agent. You decide what happens next."
          : "Lleva esta idea a una conversación con tu agente. Tú decides qué pasa después."}
      </p>
      <label htmlFor="recipe-prompt">
        {en ? "Prompt to adapt" : "Prompt para adaptar"}
      </label>
      <textarea id="recipe-prompt" ref={ref} readOnly value={content[2]} />
      <div className="prompt-actions">
        <button
          className="button primary"
          onClick={() => {
            ref.current.focus();
            ref.current.select();
            setSelected(true);
          }}
        >
          {en ? "Select prompt" : "Seleccionar prompt"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <span role="status">
          {selected
            ? en
              ? "Press Ctrl/Cmd + C to copy."
              : "Pulsa Ctrl/Cmd + C para copiar."
            : en
              ? "No automatic messages or actions."
              : "Sin mensajes ni acciones automáticas."}
        </span>
      </div>
    </section>
  );
}

export default function Workshop({ sdk, development = false }) {
  const { snapshot } = sdk;
  const en = snapshot.language === "en";
  const [section, setSection] = useState("workshop");
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const [done, setDone] = useState([]);
  const detailRef = useRef(null);
  const categories = en
    ? [
        ["all", "Everything"],
        ["reflect", "Reflect"],
        ["create", "Create"],
        ["organize", "Organize"],
      ]
    : [
        ["all", "Todo"],
        ["reflect", "Reflexionar"],
        ["create", "Crear"],
        ["organize", "Organizar"],
      ];
  const checklist = en
    ? [
        "Choose one thing to finish",
        "Thank someone who helped",
        "Leave a clear handoff",
        "Make space for a break",
      ]
    : [
        "Elige una cosa que quieras cerrar",
        "Agradece a alguien que te ayudó",
        "Deja un relevo claro",
        "Hazle espacio a una pausa",
      ];
  const choose = (recipe) => {
    setActive(recipe);
    requestAnimationFrame(() =>
      detailRef.current?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      }),
    );
  };
  return (
    <div className={`noel ${snapshot.theme === "dark" ? "dark" : ""}`}>
      <style>
        {`@font-face{font-family:NoelWork;src:url('${workSans}') format('truetype');font-display:swap}` +
        styles + nativeScrollStyles}
      </style>
      <a className="skip" href="#main">
        {en ? "Skip to content" : "Ir al contenido"}
      </a>
      <header className="masthead">
        <div className="wordmark">
          <Star />
          <span>
            noël<span className="edition">URANO / WINTER EDITION</span>
          </span>
        </div>
        <nav aria-label={en ? "Workshop sections" : "Secciones del taller"}>
          {[
            ["workshop", en ? "The workshop" : "El taller"],
            ["guide", en ? "Field notes" : "Guía de uso"],
          ].map(([id, label]) => (
            <button
              key={id}
              aria-pressed={section === id}
              onClick={() => setSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>
        <span className="edition-tag">
          {snapshot.preview
            ? en
              ? "PREVIEW"
              : "VISTA PREVIA"
            : "TEMPLATE SDK 2"}{" "}
          <span aria-hidden="true">✳</span>
        </span>
      </header>
      <main id="main" tabIndex={-1}>
        {section === "workshop" ? (
          <>
            <section className="hero" aria-labelledby="hero-title">
              <div className="hero-copy">
                <div className="eyebrow">
                  <span className="tiny-line" />{" "}
                  {en
                    ? "A LITTLE INTENTION. A NEW BEGINNING."
                    : "UN POCO DE INTENCIÓN. UN NUEVO COMIENZO."}
                </div>
                <h1 id="hero-title">
                  {en ? (
                    <>
                      Good ideas,
                      <br />
                      wrapped in <em>possibility.</em>
                    </>
                  ) : (
                    <>
                      Las buenas ideas
                      <br />
                      también se <em>regalan.</em>
                    </>
                  )}
                </h1>
                <p>
                  {en
                    ? "A winter workshop for pausing, creating and making room for what comes next. Together with your agents."
                    : "Un taller de invierno para hacer una pausa, crear y abrirle espacio a lo que viene. Junto a tus agentes."}
                </p>
                <div className="hero-actions">
                  <a className="button primary" href="#recipes">
                    {en ? "Find your next idea" : "Encuentra tu próxima idea"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="handnote">
                    {en
                      ? "Thoughtfully made. Yours to adapt."
                      : "Hecho con intención. Listo para hacerlo tuyo."}
                  </span>
                </div>
              </div>
              <div className="hero-picture">
                <span className="vertical-note">
                  SLOW DOWN · MAKE SOMETHING GOOD
                </span>
                <WinterArtwork />
                <span className="art-caption">
                  {en
                    ? "A season to reconnect."
                    : "Una temporada para reconectar."}
                </span>
              </div>
            </section>
            <div className="ribbon">
              <Star />
              <span>
                {en ? "Less rush. More meaning." : "Menos prisa. Más sentido."}
              </span>
              <span className="ribbon-end">
                {en ? "YOUR AGENTS. YOUR PACE." : "TUS AGENTES. A TU RITMO."}
              </span>
            </div>
            <section
              className="recipes-section"
              id="recipes"
              aria-labelledby="recipes-title"
            >
              <div className="section-line">
                <div>
                  <span className="eyebrow">
                    {en ? "THE IDEA COLLECTION" : "LA COLECCIÓN DE IDEAS"}
                  </span>
                  <h2 id="recipes-title">
                    {en
                      ? "Start with something small."
                      : "Empieza por algo pequeño."}
                  </h2>
                </div>
                <span className="collection-count">
                  06 / {en ? "STARTING POINTS" : "PUNTOS DE PARTIDA"}
                </span>
              </div>
              <div
                className="filters"
                role="group"
                aria-label={en ? "Filter ideas" : "Filtrar ideas"}
              >
                {categories.map(([id, label]) => (
                  <button
                    key={id}
                    aria-pressed={filter === id}
                    onClick={() => setFilter(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="recipe-grid">
                {recipes
                  .filter((r) => filter === "all" || r.category === filter)
                  .map((recipe) => {
                    const content = recipe[en ? "en" : "es"];
                    return (
                      <button
                        className="recipe-card"
                        key={recipe.id}
                        aria-pressed={active?.id === recipe.id}
                        aria-controls="recipe-details"
                        onClick={() => choose(recipe)}
                      >
                        <span className="card-top">
                          <span className="recipe-number">{recipe.symbol}</span>
                          <span aria-hidden="true">↗</span>
                        </span>
                        <h3>{content[0]}</h3>
                        <p>{content[1]}</p>
                        <span className="card-label">
                          {categories.find((c) => c[0] === recipe.category)[1]}{" "}
                          <span aria-hidden="true">—</span>
                        </span>
                      </button>
                    );
                  })}
              </div>
              <div ref={detailRef} id="recipe-details">
                {active && (
                  <RecipeDetail
                    key={active.id}
                    recipe={active}
                    en={en}
                    close={() => setActive(null)}
                  />
                )}
              </div>
            </section>
            <section className="closing-grid">
              <div className="checklist">
                <span className="eyebrow">
                  {en ? "BEFORE YOU SWITCH OFF" : "ANTES DE DESCONECTAR"}
                </span>
                <h2>
                  {en
                    ? "Leave room for the good stuff."
                    : "Deja espacio para lo bueno."}
                </h2>
                <p className="small-muted">
                  {en
                    ? "A personal checklist. Only kept while this panel stays open."
                    : "Una lista personal. Se conserva solo mientras este panel está abierto."}
                </p>
                <div className="checklist-items">
                  {checklist.map((label, index) => (
                    <label key={label}>
                      <input
                        type="checkbox"
                        checked={done.includes(index)}
                        onChange={() =>
                          setDone((old) =>
                            old.includes(index)
                              ? old.filter((n) => n !== index)
                              : [...old, index],
                          )
                        }
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                <p className="check-progress" role="status">
                  {done.length} / 4{" "}
                  {en ? "little things in place" : "pequeñas cosas en su lugar"}
                  <span className="progress-track">
                    <i style={{ width: `${done.length * 25}%` }} />
                  </span>
                </p>
              </div>
              <div className="workspace-links">
                <Star />
                <span className="eyebrow">
                  {en ? "BACK TO YOUR WORKSPACE" : "DE VUELTA A TU ESPACIO"}
                </span>
                <h2>
                  {en
                    ? "The next step is yours."
                    : "El siguiente paso es tuyo."}
                </h2>
                <p>
                  {en
                    ? "Your conversations and tools are still right where you left them."
                    : "Tus conversaciones y herramientas siguen justo donde las dejaste."}
                </p>
                {!snapshot.preview && snapshot.navigation.length > 0 ? (
                  <div className="authorized-links">
                    {snapshot.navigation.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => sdk.navigate(link.id)}
                      >
                        {link.label}
                        <span aria-hidden="true">↗</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="bridge-note">
                    {en
                      ? "Open your workspace through Urano’s navigation. This preview does not access your session."
                      : "Abre tu espacio desde la navegación de Urano. Esta vista previa no accede a tu sesión."}
                  </p>
                )}
              </div>
            </section>
          </>
        ) : (
          <section className="field-notes">
            <span className="eyebrow">NOËL / FIELD NOTES</span>
            <h1>
              {en ? (
                <>
                  Make it <em>your own.</em>
                </>
              ) : (
                <>
                  Hazlo <em>tuyo.</em>
                </>
              )}
            </h1>
            <p>
              {en
                ? "An open-source example, with honest boundaries."
                : "Un ejemplo open source, con un alcance claro."}
            </p>
            {(en
              ? [
                  [
                    "What changes in Urano?",
                    "The package provides its own navigation, header, history and welcome through SDK 2. Colors, font and loading text follow the winter theme. Composer, messages and execution remain in Urano.",
                  ],
                  [
                    "What is this panel?",
                    "A standalone React view under More. It does not replace the chat home. The ideas are curated prompts, not session data. Select a prompt, copy it and adapt it in your conversation.",
                  ],
                  [
                    "How do I develop it?",
                    "Link this folder from My environment → Templates. Edit template.json for host colors. Edit the React sources and run npm run build or npm run watch for this panel.",
                  ],
                  [
                    "How do I distribute it?",
                    "Run npm run build, npm test and npm run pack. Install the ZIP from release and then activate it. Source code uses MIT; the local font has its own OFL license.",
                  ],
                  [
                    "Does it store or send anything?",
                    "No network requests, automatic messages or persistent storage. The checklist and selected idea only live in this panel. Reloading can reset them.",
                  ],
                ]
              : [
                  [
                    "¿Qué cambia en Urano?",
                    "El paquete aporta navegación, cabecera, historial y bienvenida propios mediante SDK 2. Colores, fuente y loading siguen el tema de invierno. Compositor, mensajes y ejecución permanecen en Urano.",
                  ],
                  [
                    "¿Qué es este panel?",
                    "Una vista React propia dentro de Más. No reemplaza el inicio del chat. Las ideas son prompts editoriales, no datos de sesión. Selecciona uno, cópialo y adáptalo en tu conversación.",
                  ],
                  [
                    "¿Cómo lo desarrollo?",
                    "Vincula esta carpeta desde Mi entorno → Plantillas. Edita template.json para los colores del host. Edita las fuentes React y ejecuta npm run build o npm run watch para este panel.",
                  ],
                  [
                    "¿Cómo lo distribuyo?",
                    "Ejecuta npm run build, npm test y npm run pack. Instala el ZIP de release y después actívalo. El código usa MIT; la fuente local incluye su licencia OFL.",
                  ],
                  [
                    "¿Guarda o envía algo?",
                    "No hace peticiones, envía mensajes ni guarda datos persistentes. La lista y la idea seleccionada viven en este panel. Una recarga puede reiniciarlas.",
                  ],
                ]
            ).map(([title, text], i) => (
              <details key={title} open={i === 0 ? true : undefined}>
                <summary>
                  {title}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{text}</p>
              </details>
            ))}
            <button
              className="button primary"
              onClick={() => setSection("workshop")}
            >
              {en ? "Back to the workshop" : "Volver al taller"}{" "}
              <span aria-hidden="true">↗</span>
            </button>
          </section>
        )}
      </main>
      <footer className="footer">
        <span>
          <Star /> NOËL <span className="footer-divider">/</span>{" "}
          {en ? "Made to be shared." : "Hecho para compartir."}
        </span>
        <span>OPEN SOURCE · MIT · TEMPLATE SDK 2</span>
        {development && <span>DEV PREVIEW · ?theme=dark&amp;lang=en</span>}
      </footer>
    </div>
  );
}
