import React from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";
import { NavIcon } from "../../icons/resolveNavIcon.jsx";

export function ModuleContextCard({
  homeId,
  moduleTitle,
  moduleIconName,
  moduleIconNodes,
  optionCount,
  en,
  onSelectHome,
}) {
  return (
    <div className="rail-module-card">
      {homeId && (
        <button
          type="button"
          className="rail-back-pill"
          onClick={() => onSelectHome(homeId)}
        >
          <span className="rail-back-arrow">
            <SvgIcon name="arrowLeft" size={13} />
          </span>
          <span>{en ? "Return to home" : "Volver al inicio"}</span>
          <span className="rail-module-tag">{en ? "MODULE" : "MÓDULO"}</span>
        </button>
      )}
      {moduleTitle && (
        <div className="rail-module-hero">
          <span className="rail-module-icon">
            <NavIcon
              item={{
                label: moduleTitle,
                iconName: moduleIconName,
                iconNodes: moduleIconNodes,
              }}
              size={17}
            />
          </span>
          <div className="rail-module-copy">
            <strong>{moduleTitle}</strong>
            <small>
              {optionCount} {en ? "module options" : "opciones del módulo"}
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

