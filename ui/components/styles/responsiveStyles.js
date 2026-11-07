/**
 * Responsive media queries and accessibility motion preferences.
 */
export const responsiveStyles = `
@media(max-width:650px){
  .context-menu{display:grid}
  .noel-context{padding:0 10px;gap:8px}
  .context-title small{font-size:6.5px;letter-spacing:.8px}
  .context-title strong{font-size:12.5px}
  .context-actions{gap:4px}
  .context-actions button{width:28px;height:28px}
  .noel-welcome{padding:22px 5%}
  .welcome-hero{grid-template-columns:1fr}
  .welcome-hero h1{font-size:40px}
  .welcome-hero>.winter-art{display:none}
  .welcome-agents{grid-template-columns:1fr}
  .welcome-topline{font-size:7px;letter-spacing:1px}
  .team-heading h2{font-size:22px}
}

/* A surface iframe has its own viewport: a normal 270px history is NOT a phone. */
@media(max-width:80px){
  .noel-history{padding:15px 5px}
  .history-heading>div,.noel-history .history-body{display:none}
  .history-heading{justify-content:center}
}

@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}
`;

