/**
 * Styles for the Context Header surface (.noel-context).
 */
export const headerStyles = `
/* =========================================================
   CONTEXT HEADER (.noel-context)
   ========================================================= */
.noel-context{
  height:100%;
  display:flex;
  align-items:center;
  padding:0 18px;
  gap:12px;
  background:var(--panel);
}

.context-title{flex:1;min-width:0}
.context-title small{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:7.5px;
  font-weight:600;
  letter-spacing:1.4px;
  color:var(--muted);
  margin-bottom:2px;
}
.context-dot{
  width:6px;
  height:6px;
  border-radius:50%;
  background:var(--wine);
  display:inline-block;
}
.context-title strong{
  display:block;
  font-weight:600;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  font-size:14px;
  letter-spacing:-.2px;
}

.context-actions{display:flex;align-items:center;gap:6px}
.context-actions button,
.context-menu{
  border:1px solid var(--line);
  border-radius:9px;
  width:32px;
  height:32px;
  background:var(--bg);
  display:grid;
  place-items:center;
  position:relative;
  color:var(--ink);
  transition:background-color .15s ease,border-color .15s ease,transform .15s ease;
}
.context-actions button:hover,
.context-menu:hover{
  background:var(--selected);
  border-color:var(--gold);
}
.context-actions button[aria-pressed=true]{
  background:var(--selected);
  border-color:var(--wine);
  color:var(--wine);
}
.context-actions sup{
  position:absolute;
  right:-4px;
  top:-4px;
  font-size:8px;
  font-weight:700;
  background:var(--wine);
  color:var(--bg);
  padding:1px 4px;
  min-width:14px;
  border-radius:99px;
  line-height:1.2;
}
.context-menu{display:none;flex-shrink:0}
`;

