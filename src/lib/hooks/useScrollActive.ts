// lib/hooks/useScrollActive.ts
import { useEffect, useState } from "react";

export function useScrollActive(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  
  useEffect(() => {
    function onScroll() {
      const offsets = ids.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0]?.id ?? ids[0]);
    }
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  
  return active;
}