import React, { useState } from "react";
import { Star, WinterArtwork } from "../../Workshop.jsx";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function Welcome({ model, en, act }) {
  const [query, setQuery] = useState("");
  const activeAgent = model.activeAgent || "";
  const activeEmoji = model.activeEmoji || "✦";
  const agents = (model.agents || []).filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      (a.description || "").toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <main className="noel-welcome">
      <div className="welcome-topline">
        <span>NOËL / WINTER WORKSHOP</span>
        <Star />
      </div>
      {activeAgent && (
        <section className="welcome-active-agent">
          <span className="welcome-active-avatar">{activeEmoji}</span>
          <div className="welcome-active-copy">
            <span className="overline">
              {en ? "ACTIVE SESSION READY" : "SESIÓN ACTIVA LISTA"}
            </span>
            <strong>{activeAgent}</strong>
            <p>
              {en
                ? "Write your first message in the composer below to start working with this specialist."
                : "Escribe tu primer mensaje en el compositor de abajo para comenzar con este especialista."}
            </p>
          </div>
        </section>
      )}
      <section className="welcome-hero">
        <div>
          <span className="overline">
            {en
              ? "YOUR IDEAS HAVE GOOD COMPANY"
              : "TUS IDEAS ESTÁN EN BUENA COMPAÑÍA"}
          </span>
          <h1>
            {en ? (
              <>
                A little magic.
                <br />
                <em>A real next step.</em>
              </>
            ) : (
              <>
                Un poco de magia.
                <br />
                <em>Un gran comienzo.</em>
              </>
            )}
          </h1>
          <p>
            {en
              ? "Give an idea a little room. Choose your agent, bring your context, and let’s make something worth sharing."
              : "Dale espacio a esa idea. Elige tu agente, trae tu contexto y hagamos algo que valga la pena compartir."}
          </p>
        </div>
        <WinterArtwork />
      </section>
      <section className="welcome-team">
        <div className="team-heading">
          <h2>{en ? "Who’s joining you?" : "¿Quién te acompaña?"}</h2>
          <span>
            {model.agents?.length || 0} {en ? "AVAILABLE" : "DISPONIBLES"}
          </span>
        </div>
        {(model.agents?.length || 0) > 4 && (
          <label className="welcome-search-wrap">
            <SvgIcon name="search" size={15} />
            <input
              className="agent-search"
              aria-label={en ? "Find an agent" : "Buscar agente"}
              placeholder={
                en
                  ? "Search an agent by name or specialty…"
                  : "Buscar un agente por nombre o especialidad…"
              }
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                className="welcome-search-clear"
                onClick={() => setQuery("")}
                aria-label={en ? "Clear" : "Limpiar"}
              >
                <SvgIcon name="close" size={13} />
              </button>
            )}
          </label>
        )}
        <div className="welcome-agents">
          {agents.map((a) => (
            <button
              type="button"
              key={a.id}
              onClick={() => act("launch", { id: a.id })}
            >
              <span>{a.emoji || "✧"}</span>
              <div>
                <strong>{a.name}</strong>
                <small>
                  {a.description ||
                    (en ? "Start a conversation" : "Iniciar conversación")}
                </small>
              </div>
              <span className="welcome-launch-arrow" aria-hidden="true">
                <SvgIcon name="arrowUpRight" size={15} />
              </span>
            </button>
          ))}
        </div>
        {!agents.length && (
          <p>
            {en
              ? "No agents match. Use your workspace tools to configure an agent, or start writing below."
              : "No hay agentes para mostrar. Configura uno desde las herramientas de tu espacio o empieza a escribir abajo."}
          </p>
        )}
      </section>
      <p className="welcome-note">
        {en
          ? "Your files, models and tools stay in the composer below."
          : "Tus archivos, modelos y herramientas siguen en el compositor de abajo."}
      </p>
    </main>
  );
}

