import React from "react";
import { getUserInitials } from "../../config/i18n.js";
import { SvgIcon } from "../../icons/SvgIcon.jsx";

export function UserIdentityCard({ userName, guest, business, en, onAccount }) {
  if (!userName) return null;
  return (
    <button
      type="button"
      className="rail-user-card"
      onClick={onAccount}
      title={en ? "Open profile & preferences" : "Abrir perfil y preferencias"}
    >
      <span className="rail-user-avatar">
        {getUserInitials(userName)}
        <span className={`rail-user-dot ${guest ? "is-guest" : ""}`} />
      </span>
      <span className="rail-user-copy">
        <strong>{userName}</strong>
        <small>
          {guest
            ? en
              ? "Guest session"
              : "Modo invitado"
            : business || (en ? "Active workspace" : "Espacio activo")}
        </small>
      </span>
      <span className="rail-user-chevron" aria-hidden="true">
        <SvgIcon name="chevronRight" size={13} />
      </span>
    </button>
  );
}

