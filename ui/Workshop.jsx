import React, { useSyncExternalStore } from "react";
import { createRoot } from "react-dom/client";
import Workshop from "./components/Workshop.jsx";
import SurfaceApp from "./components/SurfaceApp.jsx";

// No mock bridge or fallback: the installed view requires the real host SDK.
function App() {
  const sdk = window.uranoTemplate;
  const snapshot = useSyncExternalStore(sdk.subscribe, sdk.getSnapshot);
  return snapshot.surface ? (
    <SurfaceApp sdk={sdk} snapshot={snapshot} />
  ) : (
    <Workshop sdk={sdk} />
  );
}
createRoot(document.getElementById("root")).render(<App />);
