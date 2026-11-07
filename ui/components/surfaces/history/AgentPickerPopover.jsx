import React from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function AgentPickerPopover({
  en,
  agentQuery,
  setAgentQuery,
  agentFilter,
  setAgentFilter,
  activeIndex,
  setActiveIndex,
  searchInputRef,
  listRef,
  allAgents,
  hasBothTypes,
  filteredAgents,
  launchAgent,
  handlePickerKeyDown,
  onClose,
}) {
  return (
    <>
      <div
        className="picker-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <section
        className="agent-picker-popover"
        role="dialog"
        aria-label={
          en
            ? "Choose an agent or integration"
            : "Elegir agente o integración"
        }
        onKeyDown={handlePickerKeyDown}
      >
        <div className="picker-header">
          <div>
            <span className="picker-eyebrow">
              {en ? "NEW SESSION" : "NUEVA SESIÓN"}
            </span>
            <strong>
              {en ? "Who shall we work with?" : "¿Con quién trabajamos?"}
            </strong>
          </div>
          <button
            type="button"
            className="picker-close"
            onClick={onClose}
            aria-label={en ? "Close selector" : "Cerrar selector"}
          >
            <SvgIcon name="close" size={14} />
          </button>
        </div>

        <label className="picker-search">
          <SvgIcon name="search" size={14} />
          <input
            ref={searchInputRef}
            type="text"
            value={agentQuery}
            onChange={(e) => setAgentQuery(e.target.value)}
            placeholder={
              en
                ? "Search agent or integration…"
                : "Buscar agente o integración…"
            }
            aria-label={
              en
                ? "Search agent or integration"
                : "Buscar agente o integración"
            }
          />
          {agentQuery && (
            <button
              type="button"
              className="picker-clear"
              onClick={() => {
                setAgentQuery("");
                searchInputRef.current?.focus();
              }}
              aria-label={en ? "Clear search" : "Limpiar búsqueda"}
            >
              <SvgIcon name="close" size={12} />
            </button>
          )}
        </label>

        {hasBothTypes && (
          <div className="picker-tabs" role="tablist">
            {[
              ["all", en ? "All" : "Todos", allAgents.length],
              [
                "agents",
                en ? "Agents" : "Agentes",
                allAgents.filter((a) => !a.isPlugin).length,
              ],
              [
                "plugins",
                "Plugins",
                allAgents.filter((a) => a.isPlugin).length,
              ],
            ].map(([id, label, count]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={agentFilter === id}
                className={agentFilter === id ? "active" : ""}
                onClick={() => setAgentFilter(id)}
              >
                {label} <span>{count}</span>
              </button>
            ))}
          </div>
        )}

        <div
          className="picker-list"
          role="listbox"
          ref={listRef}
          aria-label={en ? "Available options" : "Opciones disponibles"}
        >
          {filteredAgents.map((a, index) => (
            <button
              type="button"
              role="option"
              aria-selected={index === activeIndex}
              key={a.id}
              className={`picker-option ${index === activeIndex ? "is-focused" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => launchAgent(a.id)}
            >
              <span className="picker-avatar">
                {a.emoji || (a.isPlugin ? "🔌" : "✧")}
              </span>
              <span className="picker-copy">
                <strong>{a.name}</strong>
                <small>
                  {a.description ||
                    (a.isPlugin
                      ? en
                        ? "MCP Integration"
                        : "Integración MCP"
                      : en
                        ? "AI Specialist"
                        : "Especialista IA")}
                </small>
              </span>
              <span className="picker-badge">
                {a.isPlugin ? "MCP" : en ? "Agent" : "Agente"}
              </span>
            </button>
          ))}

          {!filteredAgents.length && (
            <div className="picker-empty">
              <p>
                {agentQuery
                  ? en
                    ? `No results for "${agentQuery}"`
                    : `Sin resultados para "${agentQuery}"`
                  : en
                    ? "No agents available. Configure them from your workspace."
                    : "No hay agentes disponibles. Configúralos desde tu espacio."}
              </p>
            </div>
          )}
        </div>

        <div className="picker-footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> {en ? "navigate" : "navegar"}
          </span>
          <span>
            <kbd>↵</kbd> {en ? "open" : "abrir"}
          </span>
          <span>
            <kbd>Esc</kbd> {en ? "close" : "cerrar"}
          </span>
        </div>
      </section>
    </>
  );
}

