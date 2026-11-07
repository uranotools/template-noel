import { useRef, useState } from "react";

export function useNavigationModel({ model, en, act }) {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  const entries = model.entries || [];
  const inModule = Boolean(model.inModule);
  const moduleTitle = model.moduleTitle || "";
  const homeId = model.homeId || entries[0]?.id || "";
  const routeEntries = entries.filter((item) => !String(item.id).startsWith("view:"));
  const viewEntries = entries.filter((item) => String(item.id).startsWith("view:"));
  const workshopView = viewEntries[0];

  // Respect host's effectiveCollapsed state (or mobile drawer open state)
  const isExpanded = !model.collapsed || Boolean(model.open);

  const handleToggleSidebar = () => {
    const next = !isExpanded;
    act("collapse");
    if (next) {
      requestAnimationFrame(() => searchRef.current?.focus());
    } else {
      setQuery("");
    }
  };

  const handleSelectEntry = (id) => {
    if (!id) return;
    act("open", { id });
  };

  // All module options (excluding the synthetic home target when inside a module)
  const moduleRouteEntries = routeEntries.filter(
    (item) => !(inModule && item.kind === "home"),
  );

  // Filter route entries by search query
  const q = query.trim().toLowerCase();
  const navItems = moduleRouteEntries.filter((item) => {
    if (!q) return true;
    return (
      (item.label || "").toLowerCase().includes(q) ||
      (item.section || "").toLowerCase().includes(q)
    );
  });

  // Group into ungrouped (top-level) vs sectioned (submenus / categories)
  const topLevelItems = navItems.filter((item) => !item.section);
  const sectionMap = new Map();
  for (const item of navItems) {
    if (!item.section) continue;
    if (!sectionMap.has(item.section)) {
      sectionMap.set(item.section, {
        title: item.section,
        collapsible: Boolean(item.collapsible),
        defaultOpen: item.defaultOpen !== false,
        items: [],
      });
    }
    sectionMap.get(item.section).items.push(item);
  }
  const sections = Array.from(sectionMap.values());

  // Links for collapsed 88px rail mode:
  // Inside a module -> show the module's own items with their real icons
  // On Home -> show primary quick links
  const collapsedLinks = inModule
    ? moduleRouteEntries.slice(0, 7)
    : routeEntries.slice(0, 4);

  const userName =
    model.userName || (model.guest ? (en ? "Guest" : "Invitado") : "");

  return {
    query,
    setQuery,
    q,
    searchRef,
    inModule,
    moduleTitle,
    homeId,
    workshopView,
    isExpanded,
    moduleRouteEntries,
    topLevelItems,
    sections,
    collapsedLinks,
    userName,
    handleToggleSidebar,
    handleSelectEntry,
  };
}

