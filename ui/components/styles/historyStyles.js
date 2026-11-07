/**
 * Styles for the History surface (.noel-history) and searchable Agent Picker popover.
 */
export const historyStyles = `
/* =========================================================
   CONVERSATION HISTORY & AGENT PICKER (.noel-history)
   ========================================================= */
.noel-history{
  height:100%;
  display:flex;
  flex-direction:column;
  background:var(--panel);
  padding:18px 13px 0;
  overflow:hidden;
  position:relative;
}

.history-heading{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:8px;
  margin-bottom:14px;
}

.overline{
  font-size:7.5px;
  font-weight:600;
  letter-spacing:1.4px;
  color:var(--muted);
  display:block;
}

.history-heading h2{
  font:600 21px/1.15 Georgia,serif;
  margin-top:4px;
  letter-spacing:-.4px;
  display:flex;
  align-items:baseline;
  gap:7px;
}

.history-heading h2>span{
  font:600 9.5px/1 NoelWork,sans-serif;
  color:var(--muted);
  background:var(--bg);
  border:1px solid var(--line);
  padding:2px 6px;
  border-radius:99px;
}

.history-collapse-btn{
  border:1px solid transparent;
  background:none;
  width:28px;
  height:28px;
  border-radius:8px;
  display:grid;
  place-items:center;
  color:var(--muted);
  transition:background-color .15s ease,color .15s ease,border-color .15s ease;
}
.history-collapse-btn:hover{
  background:var(--bg);
  border-color:var(--line);
  color:var(--ink);
}

.history-body{
  display:flex;
  flex-direction:column;
  flex:1;
  min-height:0;
  position:relative;
}

/* Primary New Chat Trigger + Popover Anchor */
.picker-anchor{
  position:relative;
  z-index:20;
}

.new-conversation{
  width:100%;
  border:1px solid var(--green);
  background:var(--green);
  color:var(--bg);
  border-radius:10px;
  min-height:40px;
  padding:0 12px;
  font-size:11.5px;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  box-shadow:0 3px 10px rgba(0,0,0,.12);
  transition:transform .16s cubic-bezier(.22,1,.36,1),box-shadow .16s ease,filter .16s ease;
}
.new-conversation:hover{
  filter:brightness(1.05);
  box-shadow:0 5px 14px rgba(0,0,0,.18);
}
.new-conversation:active{
  transform:scale(.985);
}
.new-conversation.is-open{
  outline:2px solid var(--wine);
  outline-offset:1px;
}
.new-conv-icon{
  width:20px;
  height:20px;
  border-radius:6px;
  background:rgba(255,255,255,.16);
  display:grid;
  place-items:center;
}
.noel-surface.dark .new-conv-icon{
  background:rgba(0,0,0,.16);
}
.new-conv-label{
  flex:1;
  text-align:left;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.new-conv-chevron{
  opacity:.75;
  transition:transform .2s cubic-bezier(.22,1,.36,1);
}
.new-conversation.is-open .new-conv-chevron{
  transform:rotate(180deg);
}

/* Backdrop to close popover on outside click */
.picker-backdrop{
  position:fixed;
  inset:0;
  z-index:18;
  background: rgba(0,0,0,.14);
  animation:noelFadeIn .15s ease-out;
}

/* Searchable MultiPurposePopover-style Agent Picker */
.agent-picker-popover{
  position:absolute;
  top:calc(100% + 6px);
  left:0;
  right:0;
  z-index:25;
  background:var(--elevated);
  border:1px solid var(--line);
  border-radius:12px;
  box-shadow:var(--shadow);
  display:flex;
  flex-direction:column;
  max-height:min(390px, calc(100vh - 150px));
  overflow:hidden;
  transform-origin:top center;
  animation:noelPopoverIn .2s cubic-bezier(.22,1,.36,1);
}

@keyframes noelFadeIn{
  from{opacity:0}
  to{opacity:1}
}
@keyframes noelPopoverIn{
  from{opacity:0;transform:translateY(-6px) scale(.97)}
  to{opacity:1;transform:translateY(0) scale(1)}
}

.picker-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:9px 11px 6px;
}
.picker-eyebrow{
  font-size:8px;
  font-weight:700;
  letter-spacing:1.2px;
  text-transform:uppercase;
  color:var(--muted);
}
.picker-close{
  border:0;
  background:none;
  width:22px;
  height:22px;
  border-radius:6px;
  display:grid;
  place-items:center;
  color:var(--muted);
}
.picker-close:hover{
  background:var(--selected);
  color:var(--ink);
}

.picker-search{
  display:flex;
  align-items:center;
  gap:7px;
  margin:0 9px 8px;
  padding:6px 9px;
  background:var(--bg);
  border:1px solid var(--line);
  border-radius:8px;
  color:var(--muted);
  transition:border-color .15s ease;
}
.picker-search:focus-within{
  border-color:var(--gold);
  color:var(--ink);
}
.picker-search input{
  flex:1;
  min-width:0;
  border:0;
  background:none;
  color:var(--ink);
  font-size:11.5px;
  outline:none;
}
.picker-search input::placeholder{
  color:var(--muted);
  opacity:.8;
}
.picker-clear{
  border:0;
  background:var(--selected);
  color:var(--ink);
  width:18px;
  height:18px;
  border-radius:50%;
  display:grid;
  place-items:center;
  padding:0;
}

.picker-tabs{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:4px;
  padding:0 9px 8px;
  border-bottom:1px solid var(--line-soft);
}
.picker-tabs button{
  border:1px solid transparent;
  background:var(--bg);
  color:var(--muted);
  border-radius:7px;
  padding:4px 4px;
  font-size:9.5px;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:4px;
  transition:all .15s ease;
}
.picker-tabs button:hover{
  color:var(--ink);
}
.picker-tabs button.active{
  background:var(--selected);
  color:var(--ink);
  border-color:var(--line);
}
.picker-tabs button span{
  font-size:8.5px;
  opacity:.75;
}

.picker-list{
  flex:1;
  min-height:0;
  overflow-y:auto;
  padding:6px;
  display:flex;
  flex-direction:column;
  gap:2px;
}

.picker-option{
  width:100%;
  border:1px solid transparent;
  background:transparent;
  border-radius:8px;
  padding:7px 8px;
  display:flex;
  align-items:center;
  gap:9px;
  text-align:left;
  transition:background-color .12s ease,border-color .12s ease;
}
.picker-option:hover,
.picker-option.is-active{
  background:var(--selected);
  border-color:var(--line);
}

.picker-avatar{
  width:28px;
  height:28px;
  border-radius:8px;
  background:var(--bg);
  border:1px solid var(--line);
  display:grid;
  place-items:center;
  font-size:13px;
  flex-shrink:0;
}

.picker-copy{
  flex:1;
  min-width:0;
}
.picker-copy strong{
  display:block;
  font-size:11.5px;
  font-weight:600;
  color:var(--ink);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.picker-copy small{
  display:block;
  font-size:9.5px;
  color:var(--muted);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-top:1px;
}

.picker-badge{
  font-size:8px;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.5px;
  padding:2px 5px;
  border-radius:5px;
  background:var(--bg);
  border:1px solid var(--line);
  color:var(--muted);
  flex-shrink:0;
}
.picker-badge.plugin{
  color:var(--gold);
  border-color:var(--gold);
}

.picker-empty{
  padding:20px 12px;
  text-align:center;
}
.picker-empty p{
  font-size:11px;
  color:var(--muted);
  margin-bottom:8px;
}
.picker-empty button{
  font-size:10.5px;
  font-weight:600;
  color:var(--wine);
  background:var(--bg);
  border:1px solid var(--line);
  border-radius:6px;
  padding:5px 10px;
}

.picker-footer{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:6px 10px;
  background:var(--bg);
  border-top:1px solid var(--line-soft);
  font-size:9px;
  color:var(--muted);
}
.picker-footer kbd{
  font:600 8.5px/1 monospace;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:4px;
  padding:2px 4px;
  margin-right:2px;
  color:var(--ink);
}

/* History thread search bar */
.history-search{
  display:flex;
  gap:8px;
  align-items:center;
  background:var(--bg);
  border:1px solid var(--line);
  border-radius:9px;
  margin:10px 0 12px;
  padding:7px 10px;
  color:var(--muted);
  transition:border-color .15s ease;
}
.history-search:focus-within{
  border-color:var(--gold);
  color:var(--ink);
}
.history-search input{
  width:100%;
  min-width:0;
  border:0;
  background:none;
  color:var(--ink);
  outline:none;
  font-size:11.5px;
}
.history-search input::placeholder{
  color:var(--muted);
  opacity:.8;
}
.history-search-clear{
  border:0;
  background:var(--selected);
  color:var(--ink);
  width:18px;
  height:18px;
  border-radius:50%;
  display:grid;
  place-items:center;
  padding:0;
}

/* History thread list */
.history-scroll{
  flex:1;
  min-height:0;
  overflow-y:auto;
  overflow-x:hidden;
  margin:0 -4px;
  padding:0 4px 12px;
}

.noel-thread{
  border:1px solid transparent;
  border-radius:9px;
  display:flex;
  align-items:center;
  position:relative;
  margin-bottom:5px;
  padding:2px 4px 2px 2px;
  transition:background-color .15s ease,border-color .15s ease;
}
.noel-thread:hover{
  background:var(--bg);
  border-color:var(--line-soft);
}
.noel-thread.active{
  background:var(--selected);
  border-color:var(--line);
}
.noel-thread.active::before{
  content:'';
  position:absolute;
  left:-1px;
  top:10px;
  bottom:10px;
  width:3px;
  border-radius:99px;
  background:var(--wine);
}

.thread-open{
  border:0;
  background:none;
  display:flex;
  align-items:center;
  gap:9px;
  text-align:left;
  flex:1;
  min-width:0;
  padding:7px 5px;
}

.thread-avatar{
  width:28px;
  height:30px;
  flex-shrink:0;
  display:grid;
  place-items:center;
  background:var(--bg);
  border:1px solid var(--line);
  border-radius:12px 12px 5px 5px;
  font-size:12.5px;
  font-weight:600;
}

.thread-open>span:last-child{min-width:0;flex:1}
.thread-open strong{
  font-size:11.5px;
  font-weight:500;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.thread-open small{
  font-size:9.5px;
  color:var(--muted);
  display:block;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-top:2px;
}

.thread-menu{
  background:none;
  border:0;
  width:24px;
  height:24px;
  border-radius:6px;
  display:grid;
  place-items:center;
  color:var(--muted);
  opacity:.65;
  transition:opacity .15s ease,background-color .15s ease;
}
.noel-thread:hover .thread-menu,
.thread-menu:focus-visible{
  opacity:1;
}
.thread-menu:hover{
  background:var(--panel);
  color:var(--ink);
}

.thread-options{
  position:absolute;
  right:4px;
  top:calc(100% + 2px);
  z-index:15;
  display:grid;
  min-width:155px;
  padding:5px;
  background:var(--elevated);
  border:1px solid var(--line);
  border-radius:9px;
  box-shadow:var(--shadow);
}
.thread-options button{
  font-size:11px;
  text-align:left;
  padding:8px 10px;
  border:0;
  border-radius:6px;
  background:none;
}
.thread-options button:hover{
  background:var(--selected);
}

.history-empty{
  font:italic 13.5px/1.6 Georgia,serif;
  color:var(--muted);
  padding:22px 10px;
  text-align:center;
}

.load-more{
  width:100%;
  background:var(--bg);
  border:1px solid var(--line);
  padding:8px;
  font-size:10.5px;
  font-weight:600;
  border-radius:8px;
  margin-top:4px;
}
.load-more:hover{
  background:var(--selected);
}

.noel-history footer{
  display:flex;
  align-items:center;
  gap:8px;
  border-top:1px solid var(--line);
  padding:12px 2px;
  color:var(--muted);
  font:italic 11px Georgia,serif;
  flex-shrink:0;
}
.noel-history footer svg{width:13px;height:13px;color:var(--wine)}

.noel-history.collapsed{padding:16px 6px}
.noel-history.collapsed .history-body,
.noel-history.collapsed .history-heading>div{display:none}
.noel-history.collapsed .history-heading{justify-content:center}
`;

