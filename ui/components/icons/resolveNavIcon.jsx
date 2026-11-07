import React from "react";
import { LucideNodes } from "./LucideNodes.jsx";
import { SvgIcon } from "./SvgIcon.jsx";

export function resolveNavIcon(label = "", id = "", iconName = "", index = 0) {
  const lower = `${id} ${iconName} ${label}`.toLowerCase();
  if (
    lower.startsWith("view:") ||
    lower.includes("noël") ||
    lower.includes("taller") ||
    lower.includes("workshop")
  )
    return "workshop";
  if (lower.includes("layoutdashboard") || lower.includes("dashboard") || lower.includes("tablero"))
    return "dashboard";
  if (lower.includes("bot") || lower.includes("agentes") || lower.includes("agents"))
    return "bot";
  if (lower.includes("bookopen") || lower.includes("skill") || lower.includes("guía") || lower.includes("guide"))
    return "book";
  if (lower.includes("sparkles") || lower.includes("proveedor") || lower.includes("provider"))
    return "sparkles";
  if (lower.includes("keyround") || lower.includes("secret") || lower.includes("mcp"))
    return "key";
  if (lower.includes("blocks") || lower.includes("integr"))
    return "integrations";
  if (lower.includes("inbox") || lower.includes("bandeja"))
    return "inbox";
  if (lower.includes("messagecircle") || lower.includes("canal") || lower.includes("channel"))
    return "channels";
  if (lower.includes("package") || lower.includes("pedido") || lower.includes("order") || lower.includes("catálogo"))
    return "package";
  if (lower.includes("phone") || lower.includes("llamada") || lower.includes("call"))
    return "phone";
  if (lower.includes("calendar") || lower.includes("tarea") || lower.includes("task") || lower.includes("agenda") || lower.includes("auditor"))
    return "calendar";
  if (lower.includes("scrolltext") || lower.includes("sesiones") || lower.includes("log"))
    return "logs";
  if (lower.includes("shield") || lower.includes("super") || lower.includes("resumen global"))
    return "shield";
  if (lower.includes("users") || lower.includes("organiz") || lower.includes("contacto") || lower.includes("cliente"))
    return "users";
  if (lower.includes("cpu") || lower.includes("modelo"))
    return "cpu";
  if (lower.includes("cloud") || lower.includes("radio") || lower.includes("uranoai") || lower.includes("nube"))
    return "cloud";
  if (lower.includes("link2") || lower.includes("conectar") || lower.includes("remote connect"))
    return "link";
  if (lower.includes("barchart") || lower.includes("analítica") || lower.includes("analytics"))
    return "analytics";
  if (lower.includes("harddrive") || lower.includes("almacenamiento") || lower.includes("storage"))
    return "storage";
  if (lower.includes("globe") || lower.includes("p2p"))
    return "globe";
  if (lower.includes("compass") || lower.includes("explorar") || lower.includes("explore") || lower.includes("getting started"))
    return "explore";
  if (lower.includes("perfil") || lower.includes("profile") || lower.includes("cuenta") || lower.includes("account") || lower.includes("user"))
    return "account";
  if (lower.includes("convers") || lower.includes("chat") || lower.includes("messagesquare") || lower.includes("inicio") || lower.includes("home"))
    return "chat";
  return ["dashboard", "bot", "integrations", "explore"][index % 4];
}

export function NavIcon({ item, index = 0, size = 16 }) {
  if (item?.iconNodes?.length > 0) {
    return <LucideNodes nodes={item.iconNodes} size={size} />;
  }
  return (
    <SvgIcon
      name={resolveNavIcon(item?.label, item?.id, item?.iconName, index)}
      size={size}
    />
  );
}

