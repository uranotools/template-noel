// Native scrollbars: visible in both modes; no overlay library or wheel interception.
export const nativeScrollStyles = `
html{--noel-scroll-thumb:#718a7b;color-scheme:light}
html:has(.noel-surface.dark),html:has(.noel.dark){--noel-scroll-thumb:#829f90;color-scheme:dark}
html,*{scrollbar-width:thin;scrollbar-color:var(--noel-scroll-thumb) transparent}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--noel-scroll-thumb);border:2px solid transparent;background-clip:padding-box;border-radius:10px}
`
