import React from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function ThreadRow({
  session,
  active,
  menuOpen,
  en,
  onLoad,
  onToggleMenu,
  onPin,
  onDelete,
}) {
  return (
    <div className={`noel-thread ${active ? "active" : ""}`}>
      <button
        type="button"
        className="thread-open"
        onClick={() => onLoad(session.id)}
      >
        <span className="thread-avatar">{session.emoji || "✦"}</span>
        <span>
          <strong>
            {session.title || (en ? "Conversation" : "Conversación")}
          </strong>
          <small>
            {session.agent || (en ? "Local session" : "Sesión local")}
            {session.pinned ? " · ◆" : ""}
            {session.scheduled ? " · ◷" : ""}
          </small>
        </span>
      </button>
      <button
        type="button"
        className="thread-menu"
        aria-label={
          en ? "Conversation actions" : "Acciones de conversación"
        }
        aria-expanded={menuOpen}
        onClick={() => onToggleMenu(session.id)}
      >
        ···
      </button>
      {menuOpen && (
        <div className="thread-options">
          <button type="button" onClick={() => onPin(session.id)}>
            <SvgIcon name="pin" size={13} />
            <span>
              {session.pinned
                ? en
                  ? "Unpin"
                  : "Desfijar"
                : en
                  ? "Pin conversation"
                  : "Fijar conversación"}
            </span>
          </button>
          <button
            type="button"
            className="danger"
            onClick={() => onDelete(session.id)}
          >
            <SvgIcon name="trash" size={13} />
            <span>{en ? "Delete…" : "Eliminar…"}</span>
          </button>
        </div>
      )}
    </div>
  );
}

