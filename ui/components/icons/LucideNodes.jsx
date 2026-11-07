import React from "react";

const SAFE_SVG_TAGS = new Set([
  "path",
  "rect",
  "circle",
  "ellipse",
  "line",
  "polyline",
  "polygon",
]);

export function LucideNodes({ nodes, size = 16 }) {
  if (!Array.isArray(nodes) || !nodes.length) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {nodes.map((node, idx) => {
        if (!Array.isArray(node) || node.length < 2) return null;
        const [tag, attrs] = node;
        if (!SAFE_SVG_TAGS.has(tag) || !attrs || typeof attrs !== "object") {
          return null;
        }
        return React.createElement(tag, { ...attrs, key: idx });
      })}
    </svg>
  );
}

