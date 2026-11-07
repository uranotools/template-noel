import { useEffect, useRef, useState } from "react";

export function useAgentPicker({ agents = [], act }) {
  const [picker, setPicker] = useState(false);
  const [agentQuery, setAgentQuery] = useState("");
  const [agentFilter, setAgentFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const searchInputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (picker) {
      setAgentQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [picker]);

  const allAgents = agents.map((a) => ({
    ...a,
    isPlugin: a.kind === "plugin" || String(a.id).startsWith("plugin:"),
  }));

  const hasBothTypes =
    allAgents.some((a) => !a.isPlugin) && allAgents.some((a) => a.isPlugin);

  const filteredAgents = allAgents.filter((a) => {
    if (agentFilter === "agents" && a.isPlugin) return false;
    if (agentFilter === "plugins" && !a.isPlugin) return false;
    if (!agentQuery.trim()) return true;
    const q = agentQuery.toLowerCase();
    return (
      (a.name || "").toLowerCase().includes(q) ||
      (a.description || "").toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setActiveIndex(0);
  }, [agentQuery, agentFilter]);

  const launchAgent = (id) => {
    if (!id) return;
    act("launch", { id });
    setPicker(false);
    setAgentQuery("");
  };

  const handlePickerKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setPicker(false);
      return;
    }
    if (!filteredAgents.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (activeIndex + 1) % filteredAgents.length;
      setActiveIndex(next);
      const item = listRef.current?.children?.[next];
      item?.scrollIntoView?.({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev =
        (activeIndex - 1 + filteredAgents.length) % filteredAgents.length;
      setActiveIndex(prev);
      const item = listRef.current?.children?.[prev];
      item?.scrollIntoView?.({ block: "nearest" });
    } else if (e.key === "Enter" && filteredAgents[activeIndex]) {
      e.preventDefault();
      launchAgent(filteredAgents[activeIndex].id);
    }
  };

  return {
    picker,
    setPicker,
    agentQuery,
    setAgentQuery,
    agentFilter,
    setAgentFilter,
    activeIndex,
    setActiveIndex,
    searchInputRef,
    listRef,
    allAgents,
    hasBothTypes,
    filteredAgents,
    launchAgent,
    handlePickerKeyDown,
  };
}

