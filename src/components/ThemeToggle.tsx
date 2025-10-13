// components/ui/ThemeToggle.tsx
"use client"

import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    if (!isDark) {
      root.classList.add("dark");
      setDark(true);
    } else {
      setDark(true);
    }
  }, []);
  
  if (!mounted) return null;
  
  return (
    <button
      onClick={() => {
        const root = document.documentElement;
        const next = !dark;
        root.classList.toggle("dark", next);
        setDark(next);
      }}
      className="inline-flex items-center text-sm px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}