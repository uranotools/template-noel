import React from "react";
import { Star } from "../../Workshop.jsx";
import { compactRailLabel } from "../../config/i18n.js";
import { SvgIcon } from "../../icons/SvgIcon.jsx";
import { NavIcon } from "../../icons/resolveNavIcon.jsx";
import { CollapsibleNavSection } from "./CollapsibleNavSection.jsx";
import { ModuleContextCard } from "./ModuleContextCard.jsx";
import { UserIdentityCard } from "./UserIdentityCard.jsx";
import { useNavigationModel } from "./useNavigationModel.js";

export function Navigation({ model, en, act }) {
  const {
    query,
    setQuery,
    q,
    searchRef,
    inModule,
    moduleTitle,
    homeId,
    workshopView,
    isExpanded,
    moduleRouteEntries,
    topLevelItems,
    sections,
    collapsedLinks,
    userName,
    handleToggleSidebar,
    handleSelectEntry,
  } = useNavigationModel({ model, en, act });

  return (
    <nav
      className={`noel-rail ${isExpanded ? "is-expanded" : "is-collapsed"} ${model.open ? "is-open" : ""}`}
      aria-label={en ? "Workspace" : "Espacio de trabajo"}
      onKeyDown={(e) => {
        if (e.key === "Escape" && model.open) act("close");
      }}
    >
      {isExpanded ? (
        <>
          <div className="rail-expanded-header">
            <button
              type="button"
              className="noel-brand-row"
              onClick={() => homeId && handleSelectEntry(homeId)}
              title={model.business || "Noël · Winter Desk"}
            >
              <span className="brand-crest">
                <Star />
              </span>
              <span className="brand-copy">
                <strong>noël</strong>
                <small>{model.business || "WINTER DESK"}</small>
              </span>
            </button>
            <button
              type="button"
              className="rail-toggle-btn"
              onClick={handleToggleSidebar}
              title={en ? "Collapse sidebar" : "Contraer menú lateral"}
              aria-label={en ? "Collapse sidebar" : "Contraer menú lateral"}
            >
              <SvgIcon name="sidebar" size={15} />
            </button>
          </div>

          {inModule ? (
            <ModuleContextCard
              homeId={homeId}
              moduleTitle={moduleTitle}
              moduleIconName={model.moduleIconName}
              moduleIconNodes={model.moduleIconNodes}
              optionCount={moduleRouteEntries.length}
              en={en}
              onSelectHome={handleSelectEntry}
            />
          ) : (
            <UserIdentityCard
              userName={userName}
              guest={model.guest}
              business={model.business}
              en={en}
              onAccount={() => act("account")}
            />
          )}

          <label className="rail-search">
            <SvgIcon name="search" size={13} />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                inModule
                  ? en
                    ? "Filter module options…"
                    : "Filtrar opciones del módulo…"
                  : en
                    ? "Find module or tool…"
                    : "Buscar módulo o herramienta…"
              }
            />
            {query && (
              <button
                type="button"
                className="rail-search-clear"
                onClick={() => setQuery("")}
                aria-label={en ? "Clear" : "Limpiar"}
              >
                <SvgIcon name="close" size={11} />
              </button>
            )}
          </label>

          <div className="rail-scroll-area">
            {topLevelItems.length > 0 && (
              <div className="rail-top-items">
                {topLevelItems.map((item, i) => (
                  <button
                    type="button"
                    key={item.id}
                    aria-current={item.active ? "page" : undefined}
                    className={`rail-item-row is-primary-row ${item.kind === "module" ? "is-module-entry" : ""}`}
                    onClick={() => handleSelectEntry(item.id)}
                    title={item.label}
                  >
                    <span className="rail-item-icon">
                      <NavIcon item={item} index={i} size={16} />
                    </span>
                    <span className="rail-item-text">{item.label}</span>
                    <span className="rail-item-arrow" aria-hidden="true">
                      <SvgIcon name="chevronRight" size={13} />
                    </span>
                  </button>
                ))}
              </div>
            )}

            {sections.map((sec) => (
              <CollapsibleNavSection
                key={sec.title}
                title={sec.title}
                collapsible={sec.collapsible}
                items={sec.items}
                defaultOpen={sec.defaultOpen}
                forceOpen={Boolean(q)}
                onSelect={handleSelectEntry}
              />
            ))}

            {!inModule &&
              workshopView &&
              (!q || workshopView.label.toLowerCase().includes(q)) && (
                <div className="rail-top-items">
                  <button
                    type="button"
                    aria-current={workshopView.active ? "page" : undefined}
                    className="rail-item-row rail-workshop-row"
                    onClick={() => handleSelectEntry(workshopView.id)}
                  >
                    <span className="rail-item-icon">
                      <SvgIcon name="workshop" size={15} />
                    </span>
                    <span className="rail-item-text">{workshopView.label}</span>
                    <span className="rail-item-arrow" aria-hidden="true">
                      <SvgIcon name="chevronRight" size={13} />
                    </span>
                  </button>
                </div>
              )}

            {!topLevelItems.length && !sections.length && (
              <p className="rail-empty">
                {en ? "No matching options." : "Sin resultados."}
              </p>
            )}
          </div>

          <div className="rail-expanded-footer">
            <div className="rail-footer-actions">
              <button
                type="button"
                onClick={() => act("appearance")}
                title={en ? "Appearance & templates" : "Apariencia y plantillas"}
              >
                <SvgIcon name="appearance" size={15} />
                <span>{en ? "Style" : "Diseño"}</span>
              </button>
              <button
                type="button"
                onClick={() => act("account")}
                title={en ? "My account" : "Mi cuenta"}
              >
                <SvgIcon name="account" size={15} />
                <span>{en ? "Account" : "Cuenta"}</span>
              </button>
              <button
                type="button"
                className="danger"
                onClick={() => act("logout")}
                title={
                  model.guest
                    ? en
                      ? "Sign in"
                      : "Iniciar sesión"
                    : en
                      ? "Sign out"
                      : "Cerrar sesión"
                }
              >
                <SvgIcon name="logout" size={15} />
                <span>
                  {model.guest ? (en ? "Sign in" : "Entrar") : en ? "Exit" : "Salir"}
                </span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            className="noel-brand"
            onClick={() => homeId && handleSelectEntry(homeId)}
            title={model.business || "Noël · Winter Desk"}
          >
            <span className="brand-crest">
              <Star />
            </span>
            <strong>noël</strong>
            <small>WINTER DESK</small>
          </button>

          <div className="rail-rule" />

          <div className="rail-links">
            {inModule && homeId && (
              <button
                type="button"
                className="rail-collapsed-back"
                onClick={() => handleSelectEntry(homeId)}
                title={en ? "Return to home" : "Volver al inicio"}
              >
                <span className="rail-glyph">
                  <SvgIcon name="arrowLeft" size={17} />
                </span>
                <span className="rail-label">{en ? "Home" : "Inicio"}</span>
              </button>
            )}

            {collapsedLinks.map((item, i) => (
              <button
                type="button"
                key={item.id}
                aria-current={item.active ? "page" : undefined}
                onClick={() => handleSelectEntry(item.id)}
                title={item.label}
              >
                <span className="rail-glyph">
                  <NavIcon item={item} index={i} size={18} />
                </span>
                <span className="rail-label">{compactRailLabel(item.label, en)}</span>
              </button>
            ))}

            {!inModule && workshopView && (
              <button
                type="button"
                aria-current={workshopView.active ? "page" : undefined}
                onClick={() => handleSelectEntry(workshopView.id)}
                title={workshopView.label}
                className="rail-workshop-btn"
              >
                <span className="rail-glyph">
                  <SvgIcon name="workshop" size={18} />
                </span>
                <span className="rail-label">{en ? "Workshop" : "Taller"}</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleToggleSidebar}
              title={
                en
                  ? "Expand menu & explore modules"
                  : "Expandir menú y explorar módulos"
              }
            >
              <span className="rail-glyph">
                <SvgIcon name="explore" size={18} />
              </span>
              <span className="rail-label">{en ? "Explore" : "Explorar"}</span>
            </button>
          </div>

          <div className="rail-bottom">
            <span className="rail-season" aria-hidden="true">
              <Star />
            </span>
            <button
              type="button"
              onClick={() => act("appearance")}
              title={en ? "Appearance & templates" : "Apariencia y plantillas"}
            >
              <span className="rail-glyph">
                <SvgIcon name="appearance" size={17} />
              </span>
              <span className="rail-label">{en ? "Style" : "Diseño"}</span>
            </button>
            <button
              type="button"
              onClick={() => act("account")}
              title={en ? "My account" : "Mi cuenta"}
            >
              <span className="rail-glyph">
                <SvgIcon name="account" size={17} />
              </span>
              <span className="rail-label">{en ? "Account" : "Cuenta"}</span>
            </button>
            <button
              type="button"
              className="rail-close"
              onClick={() => act("close")}
            >
              {en ? "Close" : "Cerrar"} ×
            </button>
          </div>

          <button
            type="button"
            className="rail-signout"
            onClick={() => act("logout")}
            title={
              model.guest
                ? en
                  ? "Sign in"
                  : "Iniciar sesión"
                : en
                  ? "Sign out"
                  : "Cerrar sesión"
            }
          >
            <SvgIcon name="logout" size={14} />
            <span>
              {model.guest ? (en ? "Sign in" : "Entrar") : en ? "Sign out" : "Salir"}
            </span>
          </button>
        </>
      )}
    </nav>
  );
}

