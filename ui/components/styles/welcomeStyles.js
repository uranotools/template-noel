/**
 * Styles for the Welcome surface (.noel-welcome).
 */
export const welcomeStyles = `
/* =========================================================
   WELCOME CANVAS (.noel-welcome)
   ========================================================= */
.noel-welcome{
  padding:28px 5% 40px;
  min-height:100%;
  max-width:1120px;
  margin:auto;
}

.welcome-topline{
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid var(--line);
  padding:0 0 14px;
  font-size:8px;
  font-weight:600;
  letter-spacing:2px;
  color:var(--muted);
}
.welcome-topline svg{width:17px;height:17px;color:var(--wine)}

.welcome-active-agent{
  display:flex;
  align-items:center;
  gap:14px;
  margin-top:18px;
  padding:15px 18px;
  background:var(--panel);
  border:1px solid var(--wine);
  border-radius:12px;
  box-shadow:0 6px 20px rgba(0,0,0,.08);
}
.welcome-active-avatar{
  width:44px;
  height:48px;
  border-radius:18px 18px 6px 6px;
  background:var(--selected);
  border:1px solid var(--line);
  display:grid;
  place-items:center;
  font-size:22px;
  flex-shrink:0;
}
.welcome-active-copy{
  flex:1;
  min-width:0;
}
.welcome-active-copy strong{
  display:block;
  font:600 18px/1.2 Georgia,serif;
  margin:3px 0 4px;
  color:var(--ink);
}
.welcome-active-copy p{
  font-size:11.5px;
  color:var(--muted);
  line-height:1.5;
}

.welcome-hero{
  display:grid;
  grid-template-columns:1.45fr 1fr;
  align-items:center;
  gap:16px;
  padding:24px 0;
}
.welcome-hero h1{
  font:400 clamp(32px,4.2vw,52px)/1.08 Georgia,serif;
  letter-spacing:-1.6px;
  margin:14px 0;
}
.welcome-hero h1 em{color:var(--wine)}
.welcome-hero p{
  max-width:410px;
  font-size:12.5px;
  line-height:1.8;
  color:var(--muted);
}
.winter-art{width:100%;max-height:230px;color:var(--ink)}

.team-heading{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  border-bottom:1px solid var(--line);
  padding-bottom:14px;
  margin-bottom:16px;
}
.team-heading h2{font:24px Georgia,serif}
.team-heading>span{font-size:8.5px;font-weight:600;color:var(--muted);letter-spacing:1.2px}

.welcome-search-wrap{
  display:flex;
  align-items:center;
  gap:9px;
  padding:9px 13px;
  margin-bottom:14px;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:10px;
  color:var(--muted);
  transition:border-color .15s ease;
}
.welcome-search-wrap:focus-within{
  border-color:var(--gold);
  color:var(--ink);
}
.welcome-search-wrap .agent-search{
  flex:1;
  min-width:0;
  border:0;
  background:none;
  color:var(--ink);
  padding:0;
  margin:0;
  outline:none;
  font-size:12.5px;
}
.welcome-search-clear{
  border:0;
  background:var(--selected);
  color:var(--ink);
  width:20px;
  height:20px;
  border-radius:50%;
  display:grid;
  place-items:center;
  padding:0;
}

.welcome-agents{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:10px;
}
.welcome-agents button{
  min-width:0;
  text-align:left;
  display:flex;
  align-items:center;
  gap:12px;
  padding:14px 15px;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:11px;
  transition:border-color .18s ease,transform .18s cubic-bezier(.22,1,.36,1),box-shadow .18s ease;
}
.welcome-agents button:hover{
  border-color:var(--wine);
  transform:translateY(-1px);
  box-shadow:0 6px 18px rgba(0,0,0,.08);
}
.welcome-agents button>span:first-child{
  width:36px;
  height:40px;
  flex-shrink:0;
  display:grid;
  place-items:center;
  font-size:19px;
  background:var(--selected);
  border:1px solid var(--line);
  border-radius:16px 16px 6px 6px;
}
.welcome-agents button>div{flex:1;min-width:0}
.welcome-agents strong{
  font-size:12.5px;
  font-weight:600;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.welcome-agents small{
  font-size:10px;
  display:block;
  margin-top:3px;
  color:var(--muted);
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.welcome-launch-arrow{
  color:var(--gold);
  opacity:.75;
  transition:transform .18s ease,opacity .18s ease;
}
.welcome-agents button:hover .welcome-launch-arrow{
  transform:translate(2px,-2px);
  opacity:1;
}

.welcome-note{
  font:italic 12px Georgia,serif;
  color:var(--muted);
  border-top:1px solid var(--line);
  padding-top:16px;
  margin-top:24px;
}
.welcome-team>p{font-size:12px;color:var(--muted)}
`;

