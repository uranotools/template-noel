import React from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function Header({ model, en, act }) {
  return (
    <header className="noel-context">
      <button
        type="button"
        className="context-menu"
        onClick={() => act("menu")}
        aria-label={en ? "Open navigation" : "Abrir navegación"}
      >
        <SvgIcon name="menu" size={16} />
      </button>
      <div className="context-title">
        <small>
          <span className="context-dot" aria-hidden="true" />
          NOËL / {en ? "YOUR WINTER WORKSPACE" : "TU ESPACIO DE INVIERNO"}
        </small>
        <strong title={model.title}>
          {model.title ||
            (en
              ? "A little room for good ideas"
              : "Un espacio para las buenas ideas")}
        </strong>
      </div>
      <div className="context-actions">
        <button
          type="button"
          onClick={() => act("theme")}
          aria-label={en ? "Switch color mode" : "Cambiar tema"}
          title={en ? "Switch color mode" : "Cambiar tema"}
        >
          <SvgIcon name="theme" size={15} />
        </button>
        {model.notificationsEnabled && (
          <button
            type="button"
            onClick={() => act("notifications")}
            aria-label={en ? "Notifications" : "Notificaciones"}
            title={en ? "Notifications" : "Notificaciones"}
          >
            <SvgIcon name="bell" size={15} />
            {model.badgeCount > 0 && <sup>{model.badgeCount}</sup>}
          </button>
        )}
        {model.assistantEnabled && (
          <button
            type="button"
            onClick={() => act("assistant")}
            aria-pressed={model.assistantOpen}
            aria-label={en ? "Assistant" : "Asistente"}
            title={en ? "Assistant" : "Asistente"}
          >
            <SvgIcon name="agents" size={15} />
          </button>
        )}
      </div>
    </header>
  );
}

