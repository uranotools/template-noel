import React, { useEffect, useState } from "react";
import { SvgIcon } from "../../icons/SvgIcon.jsx";
import { NavIcon } from "../../icons/resolveNavIcon.jsx";

export function CollapsibleNavSection({
  title,
  items,
  collapsible = false,
  defaultOpen = true,
  forceOpen = false,
  onSelect,
}) {
  const hasActiveChild = items.some((item) => item.active);
  const [open, setOpen] = useState(defaultOpen || hasActiveChild);

  useEffect(() => {
    if (hasActiveChild) setOpen(true);
  }, [hasActiveChild]);

  const isExpanded = forceOpen || open;

  return (
    <div
      className={`rail-section ${isExpanded ? "is-open" : "is-closed"} ${collapsible ? "is-collapsible-group" : ""}`}
    >
      <button
        type="button"
        className={`rail-section-header ${isExpanded ? "is-open" : "is-closed"}`}
        aria-expanded={isExpanded}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="rail-section-dot" aria-hidden="true" />
        <span className="rail-section-title">{title}</span>
        <span className="rail-section-line" aria-hidden="true" />
        <span className="rail-section-meta">
          {(!isExpanded || collapsible) && (
            <span className="rail-section-count">{items.length}</span>
          )}
          <span className={`rail-section-chevron ${isExpanded ? "is-open" : ""}`}>
            <SvgIcon name="chevron" size={11} />
          </span>
        </span>
      </button>
      {isExpanded && (
        <div className="rail-section-items">
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.id}
              aria-current={item.active ? "page" : undefined}
              className={`rail-item-row is-subitem ${item.kind === "module" ? "is-module-entry" : ""}`}
              onClick={() => onSelect(item.id)}
              title={item.label}
            >
              <span className="rail-item-icon">
                <NavIcon item={item} index={idx} size={15} />
              </span>
              <span className="rail-item-text">{item.label}</span>
              <span className="rail-item-arrow" aria-hidden="true">
                <SvgIcon name="chevronRight" size={12} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

