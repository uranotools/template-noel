/**
 * Styles for the Navigation surface (.noel-rail), including:
 * - Expanded sidebar mode (.is-expanded)
 * - Module Context Card (.rail-module-card)
 * - User Identity Card (.rail-user-card)
 * - Collapsible section groups (.rail-section)
 * - Collapsed 88px rail mode
 */
export const navigationStyles = `
/* =========================================================
   NAVIGATION RAIL & EXPANDED SIDEBAR (.noel-rail)
   ========================================================= */
.noel-rail{
  height:100%;
  display:flex;
  flex-direction:column;
  background:var(--rail);
  padding:16px 8px 12px;
  position:relative;
  overflow-x:hidden;
  overflow-y:auto;
  user-select:none;
}

.noel-rail.is-expanded{
  padding:14px 12px 12px;
  overflow:hidden;
}

.rail-expanded-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding-bottom:11px;
  border-bottom:1px solid var(--line);
  margin-bottom:10px;
  flex-shrink:0;
}

.noel-brand-row{
  border:0;
  background:none;
  padding:0;
  display:flex;
  align-items:center;
  gap:9px;
  min-width:0;
  text-align:left;
}

.brand-copy{
  display:flex;
  flex-direction:column;
  min-width:0;
}
.brand-copy strong{
  font:700 20px/1 Georgia,serif;
  letter-spacing:-.6px;
}
.brand-copy small{
  font-size:7px;
  letter-spacing:1.2px;
  text-transform:uppercase;
  color:var(--muted);
  font-weight:600;
  margin-top:3px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.rail-toggle-btn{
  border:1px solid var(--line);
  background:var(--panel);
  width:28px;
  height:28px;
  border-radius:8px;
  display:grid;
  place-items:center;
  color:var(--muted);
  flex-shrink:0;
  transition:background-color .15s ease,color .15s ease,border-color .15s ease;
}
.rail-toggle-btn:hover{
  background:var(--selected);
  color:var(--ink);
  border-color:var(--gold);
}

/* Module Context Card (when inside a module like UranoAI, SalesAgent, CRM) */
.rail-module-card{
  background:linear-gradient(155deg,var(--panel) 0%,color-mix(in srgb,var(--selected) 55%,var(--panel)) 100%);
  border:1px solid var(--line);
  border-radius:12px;
  margin-bottom:10px;
  overflow:hidden;
  flex-shrink:0;
  box-shadow:0 4px 14px -4px rgba(0,0,0,.18);
}

.rail-back-pill{
  width:100%;
  border:0;
  border-bottom:1px solid var(--line-soft);
  background:color-mix(in srgb,var(--bg) 55%,transparent);
  color:var(--muted);
  padding:6px 10px;
  display:flex;
  align-items:center;
  gap:6px;
  font-size:10.5px;
  font-weight:600;
  text-align:left;
  transition:background-color .15s ease,color .15s ease;
}
.rail-back-pill:hover{
  background:var(--selected);
  color:var(--ink);
}
.rail-back-arrow{
  display:inline-flex;
  color:var(--wine);
  transition:transform .15s ease;
}
.rail-back-pill:hover .rail-back-arrow{
  transform:translateX(-2px);
}
.rail-module-tag{
  margin-left:auto;
  font-size:7.5px;
  font-weight:700;
  letter-spacing:1px;
  padding:2px 5px;
  border-radius:4px;
  background:color-mix(in srgb,var(--wine) 16%,var(--panel));
  color:var(--wine);
}

.rail-module-hero{
  display:flex;
  align-items:center;
  gap:10px;
  padding:9px 10px;
}
.rail-module-icon{
  width:32px;
  height:32px;
  border-radius:9px;
  background:color-mix(in srgb,var(--wine) 18%,var(--bg));
  border:1px solid color-mix(in srgb,var(--wine) 42%,var(--line));
  color:var(--wine);
  display:grid;
  place-items:center;
  flex-shrink:0;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
}
.rail-module-copy{
  display:flex;
  flex-direction:column;
  min-width:0;
  flex:1;
}
.rail-module-copy strong{
  font-size:12.5px;
  font-weight:700;
  letter-spacing:-.1px;
  color:var(--ink);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-module-copy small{
  font-size:9.5px;
  color:var(--muted);
  margin-top:1px;
}

/* User Identity Card (Home Mode, guided by Sidebar.tsx ProfileHeader) */
.rail-user-card{
  width:100%;
  border:1px solid var(--line-soft);
  background:color-mix(in srgb,var(--panel) 80%,transparent);
  border-radius:11px;
  padding:7px 9px;
  margin-bottom:10px;
  display:flex;
  align-items:center;
  gap:9px;
  text-align:left;
  flex-shrink:0;
  transition:background-color .15s ease,border-color .15s ease;
}
.rail-user-card:hover{
  background:var(--panel);
  border-color:var(--line);
}
.rail-user-avatar{
  position:relative;
  width:28px;
  height:28px;
  border-radius:50%;
  background:var(--selected);
  border:1px solid var(--line);
  color:var(--gold);
  font-size:10px;
  font-weight:700;
  display:grid;
  place-items:center;
  flex-shrink:0;
}
.rail-user-dot{
  position:absolute;
  right:-1px;
  bottom:-1px;
  width:8px;
  height:8px;
  border-radius:50%;
  background:#22c55e;
  border:1.5px solid var(--rail);
}
.rail-user-dot.is-guest{
  background:#f59e0b;
}
.rail-user-copy{
  display:flex;
  flex-direction:column;
  min-width:0;
  flex:1;
}
.rail-user-copy strong{
  font-size:11.5px;
  font-weight:600;
  color:var(--ink);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-user-copy small{
  font-size:9px;
  color:var(--muted);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-user-chevron{
  color:var(--muted);
  opacity:.6;
  transition:transform .15s ease,opacity .15s ease;
}
.rail-user-card:hover .rail-user-chevron{
  opacity:1;
  transform:translateX(2px);
}

/* Recessed Filter / Search Bar */
.rail-search{
  display:flex;
  align-items:center;
  gap:7px;
  background:color-mix(in srgb,var(--bg) 70%,var(--rail));
  border:1px solid var(--line-soft);
  border-radius:8px;
  padding:5px 9px;
  margin-bottom:10px;
  color:var(--muted);
  flex-shrink:0;
  transition:border-color .15s ease,background-color .15s ease;
}
.rail-search:focus-within{
  background:var(--panel);
  border-color:var(--gold);
  color:var(--ink);
}
.rail-search input{
  flex:1;
  min-width:0;
  border:0;
  background:none;
  color:var(--ink);
  font-size:11px;
  outline:none;
}
.rail-search input::placeholder{
  color:var(--muted);
  opacity:.75;
}
.rail-search-clear{
  border:0;
  background:var(--selected);
  color:var(--ink);
  width:15px;
  height:15px;
  border-radius:50%;
  display:grid;
  place-items:center;
  padding:0;
}

/* Scrollable Navigation Area */
.rail-scroll-area{
  flex:1;
  min-height:0;
  overflow-y:auto;
  overflow-x:hidden;
  display:flex;
  flex-direction:column;
  gap:10px;
  padding-right:2px;
  padding-bottom:6px;
}

.rail-top-items{
  display:flex;
  flex-direction:column;
  gap:3px;
}

/* Menu Item Row (shared by top-level items & section items, with real Lucide icons) */
.rail-item-row{
  position:relative;
  width:100%;
  border:1px solid transparent;
  background:transparent;
  border-radius:9px;
  padding:6px 8px;
  display:flex;
  align-items:center;
  gap:9px;
  text-align:left;
  font-size:11.5px;
  font-weight:500;
  color:color-mix(in srgb,var(--ink) 88%,var(--muted));
  transition:background-color .15s ease,border-color .15s ease,color .15s ease;
}
.rail-item-row.is-primary-row{
  padding:7px 9px;
  font-weight:600;
  color:var(--ink);
}
.rail-item-row:hover{
  background:var(--panel);
  border-color:var(--line-soft);
  color:var(--ink);
}
.rail-item-row[aria-current=page]{
  background:var(--selected);
  border-color:color-mix(in srgb,var(--wine) 38%,var(--line));
  color:var(--ink);
  font-weight:600;
  box-shadow:0 2px 8px -2px rgba(0,0,0,.14);
}
.rail-item-row[aria-current=page]::before{
  content:'';
  position:absolute;
  left:-1px;
  top:7px;
  bottom:7px;
  width:3px;
  border-radius:99px;
  background:var(--wine);
}

.rail-item-icon{
  width:25px;
  height:25px;
  border-radius:7px;
  background:color-mix(in srgb,var(--panel) 88%,transparent);
  border:1px solid var(--line-soft);
  display:grid;
  place-items:center;
  color:var(--green);
  flex-shrink:0;
  transition:background-color .15s ease,border-color .15s ease,color .15s ease,transform .15s ease;
}
.rail-item-row:hover .rail-item-icon{
  border-color:var(--line);
  color:var(--gold);
  transform:scale(1.03);
}
.rail-item-row[aria-current=page] .rail-item-icon{
  background:color-mix(in srgb,var(--wine) 18%,var(--panel));
  color:var(--wine);
  border-color:color-mix(in srgb,var(--wine) 45%,var(--line));
}
.rail-workshop-row .rail-item-icon{
  color:var(--gold);
}

.rail-item-text{
  flex:1;
  min-width:0;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

.rail-item-arrow{
  color:var(--muted);
  opacity:0;
  transform:translateX(-3px);
  transition:opacity .15s ease,transform .15s ease,color .15s ease;
  flex-shrink:0;
}
.rail-item-row.is-module-entry .rail-item-arrow{
  opacity:.45;
  transform:translateX(0);
}
.rail-item-row:hover .rail-item-arrow,
.rail-item-row[aria-current=page] .rail-item-arrow{
  opacity:.85;
  transform:translateX(0);
  color:var(--gold);
}
.rail-item-row[aria-current=page] .rail-item-arrow{
  color:var(--wine);
}

/* Section Groups (Clean typographic divider when open; badge pill when closed) */
.rail-section{
  display:flex;
  flex-direction:column;
  gap:4px;
}

.rail-section-header{
  width:100%;
  border:1px solid transparent;
  background:transparent;
  border-radius:7px;
  padding:4px 6px 3px;
  display:flex;
  align-items:center;
  gap:6px;
  text-align:left;
  transition:background-color .15s ease,border-color .15s ease;
}
.rail-section-header.is-closed{
  background:color-mix(in srgb,var(--panel) 75%,transparent);
  border-color:var(--line-soft);
  padding:6px 8px;
}
.rail-section-header:hover{
  background:color-mix(in srgb,var(--panel) 65%,transparent);
}

.rail-section-dot{
  width:4px;
  height:4px;
  border-radius:50%;
  background:var(--gold);
  opacity:.75;
  flex-shrink:0;
}
.rail-section-header.is-closed .rail-section-dot{
  background:var(--wine);
}

.rail-section-title{
  font-size:9px;
  font-weight:700;
  letter-spacing:1.25px;
  text-transform:uppercase;
  color:var(--muted);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.rail-section-header.is-open .rail-section-title{
  color:var(--gold);
}

.rail-section-line{
  flex:1;
  height:1px;
  background:var(--line-soft);
  min-width:10px;
}

.rail-section-meta{
  display:flex;
  align-items:center;
  gap:4px;
  flex-shrink:0;
}
.rail-section-count{
  font-size:8.5px;
  font-weight:700;
  padding:1px 5px;
  border-radius:5px;
  background:var(--selected);
  color:var(--wine);
  border:1px solid color-mix(in srgb,var(--wine) 30%,transparent);
}
.rail-section-chevron{
  color:var(--muted);
  opacity:.7;
  transition:transform .18s cubic-bezier(.22,1,.36,1),opacity .15s ease;
}
.rail-section-header:hover .rail-section-chevron{
  opacity:1;
}
.rail-section-chevron.is-open{
  transform:rotate(180deg);
}

.rail-section-items{
  display:flex;
  flex-direction:column;
  gap:2px;
  padding-left:6px;
  margin-left:7px;
  border-left:1px solid var(--line-soft);
}

.rail-empty{
  font:italic 11.5px Georgia,serif;
  color:var(--muted);
  text-align:center;
  padding:18px 8px;
}

.rail-expanded-footer{
  margin-top:6px;
  padding-top:8px;
  border-top:1px solid var(--line);
  flex-shrink:0;
}
.rail-footer-actions{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:5px;
}
.rail-footer-actions>button{
  border:1px solid var(--line-soft);
  background:var(--panel);
  border-radius:8px;
  padding:6px 4px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:3px;
  font-size:9px;
  font-weight:600;
  color:var(--muted);
  transition:all .15s ease;
}
.rail-footer-actions>button:hover{
  background:var(--selected);
  color:var(--ink);
  border-color:var(--line);
}
.rail-footer-actions>button.danger:hover{
  color:var(--wine);
  border-color:color-mix(in srgb,var(--wine) 40%,var(--line));
}

/* Collapsed 88px Rail Mode */
.noel-brand{
  background:none;
  border:0;
  padding:0 0 12px;
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:4px;
  transition:transform .2s cubic-bezier(.22,1,.36,1);
}
.noel-brand:hover{transform:translateY(-1px)}
.brand-crest{
  width:34px;
  height:34px;
  border-radius:11px;
  display:grid;
  place-items:center;
  background:var(--panel);
  border:1px solid var(--line);
  box-shadow:0 2px 6px rgba(0,0,0,.06);
}
.brand-crest svg{width:20px;height:20px;color:var(--wine)}
.noel-brand strong{font:700 22px/1 Georgia,serif;letter-spacing:-.8px;margin-top:2px}
.noel-brand small{font-size:6px;letter-spacing:1.4px;color:var(--muted);font-weight:600}

.rail-rule{
  height:1px;
  background:var(--line);
  margin:0 4px 10px;
  flex-shrink:0;
}

.rail-links{
  display:flex;
  flex-direction:column;
  gap:4px;
}

.rail-collapsed-back{
  border-color:var(--line-soft)!important;
  background:color-mix(in srgb,var(--panel) 60%,transparent)!important;
}
.rail-collapsed-back .rail-glyph{
  color:var(--wine)!important;
}

.rail-links>button,
.rail-bottom>button{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:4px;
  width:100%;
  min-width:0;
  border:1px solid transparent;
  background:transparent;
  border-radius:11px;
  padding:7px 4px 6px;
  color:var(--muted);
  transition:background-color .18s ease,color .18s ease,border-color .18s ease,transform .18s cubic-bezier(.22,1,.36,1);
}

.rail-links>button:hover,
.rail-bottom>button:hover{
  background:var(--panel);
  color:var(--ink);
  border-color:var(--line-soft);
}

.rail-links>button:active,
.rail-bottom>button:active{
  transform:scale(.96);
}

.rail-links>button[aria-current=page]{
  background:var(--selected);
  color:var(--ink);
  border-color:var(--line);
  box-shadow:0 2px 8px rgba(0,0,0,.06);
}

.rail-links>button[aria-current=page]::before{
  content:'';
  position:absolute;
  left:-4px;
  top:12px;
  bottom:12px;
  width:3px;
  border-radius:99px;
  background:var(--wine);
}

.rail-glyph{
  width:28px;
  height:28px;
  border-radius:8px;
  display:grid;
  place-items:center;
  color:var(--green);
  transition:transform .2s cubic-bezier(.22,1,.36,1),color .18s ease;
}

.rail-links>button[aria-current=page] .rail-glyph{
  color:var(--wine);
  transform:scale(1.06);
}

.rail-workshop-btn .rail-glyph{
  color:var(--gold);
}

.rail-label{
  display:block;
  max-width:100%;
  font-size:9.5px;
  font-weight:500;
  line-height:1.15;
  letter-spacing:.1px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  text-align:center;
}

.rail-bottom{
  margin-top:auto;
  padding-top:12px;
  display:flex;
  flex-direction:column;
  gap:4px;
  align-items:center;
}

.rail-season{
  color:var(--wine);
  opacity:.75;
  padding:2px 0 4px;
}

.rail-signout{
  margin-top:4px;
  padding-top:8px!important;
  border-top:1px solid var(--line)!important;
  border-radius:0 0 10px 10px!important;
}
.rail-signout:hover{
  color:var(--wine)!important;
}

.rail-bottom .rail-close{display:none}
.noel-rail.is-open .rail-close{display:flex}
`;

