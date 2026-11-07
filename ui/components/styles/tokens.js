/**
 * Base resets, CSS custom properties (light & dark themes), and scrollbar styling.
 */
export const tokensStyles = `
*{box-sizing:border-box}
html,body,#root{margin:0;width:100%;height:100%}
button,input{font:inherit}
button{cursor:pointer;color:inherit;touch-action:manipulation}
button:disabled{cursor:default;opacity:.5}
button:focus-visible,input:focus-visible{outline:2px solid var(--gold);outline-offset:2px}
svg{display:block;flex-shrink:0}
p,h1,h2{margin:0}

.noel-surface{
  --bg:#f7f4ed;
  --panel:#fcfaf4;
  --elevated:#ffffff;
  --ink:#21392f;
  --muted:#5c6e63;
  --line:#d2d8cb;
  --line-soft:#e4e8de;
  --green:#274c3d;
  --wine:#873745;
  --gold:#9c773b;
  --selected:#ebe3d7;
  --rail:#e9efe6;
  --shadow:0 14px 34px -8px rgba(24,42,34,.18),0 4px 12px -2px rgba(24,42,34,.08);
  background:var(--bg);
  color:var(--ink);
  height:100%;
  font:13px/1.45 NoelWork,'Trebuchet MS',sans-serif;
  color-scheme:light;
  -webkit-font-smoothing:antialiased;
}

.noel-surface.dark{
  --bg:#17261f;
  --panel:#1e2f27;
  --elevated:#23382e;
  --ink:#eee9db;
  --muted:#a6b9ab;
  --line:#32473a;
  --line-soft:#26392e;
  --green:#dfc890;
  --wine:#e3a4ae;
  --gold:#d7b87b;
  --selected:#332a28;
  --rail:#15231c;
  --shadow:0 18px 40px -8px rgba(0,0,0,.62),0 6px 16px -4px rgba(0,0,0,.42);
  color-scheme:dark;
}

/* Custom subtle scrollbars */
.noel-surface ::-webkit-scrollbar{width:5px;height:5px}
.noel-surface ::-webkit-scrollbar-track{background:transparent}
.noel-surface ::-webkit-scrollbar-thumb{background:var(--line);border-radius:99px}
`;

