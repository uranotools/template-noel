export function compactRailLabel(label = "", en = false) {
  const lower = label.toLowerCase();
  if (lower.includes("conversaciones") || lower.includes("conversations"))
    return en ? "Chat" : "Chat";
  if (lower.includes("agentes") || lower.includes("agents"))
    return en ? "Agents" : "Agentes";
  if (lower.includes("integraciones") || lower.includes("integrations"))
    return en ? "Connect" : "Conectar";
  if (lower.includes("noël") || lower.includes("taller") || lower.includes("workshop"))
    return en ? "Workshop" : "Taller";
  if (lower.includes("mi perfil") || lower.includes("my profile"))
    return en ? "Profile" : "Perfil";
  if (lower.includes("guía") || lower.includes("guide"))
    return en ? "Guide" : "Guía";
  const firstWord = label.split(/\s+/)[0] || label;
  return firstWord.length > 10 ? firstWord.slice(0, 9) + "…" : firstWord;
}

export function getUserInitials(name = "") {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "U";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

