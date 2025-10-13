// components/Header.tsx
"use client"

import { useScrollActive } from "@/lib/hooks/useScrollActive";
import { Profile } from "@/lib/types/profile.types";
import React, { useState, useEffect } from "react";
import ShimmerText from "./ui/ShimmerText";
import ThemeToggle from "./ThemeToggle";
import { FileText } from "lucide-react";

interface HeaderProps {
  profile: Profile;
}

export default function Header({ profile }: HeaderProps) {
  const ids = ["about", "experience", "education", "projects", "blog", "contact"];
  const active = useScrollActive(ids);

  const navItem = (id: string, label: string) => (
    <a
      key={id}
      href={`#${id}`}
      className={`px-3 py-2 rounded-full text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
        active === id ? "text-pink-500 dark:text-pink-400" : "text-zinc-600 dark:text-zinc-300"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <ShimmerText className="text-base">{profile.name}</ShimmerText>
        <nav className="hidden md:flex items-center gap-1">
          {ids.map((id) => navItem(id, id.charAt(0).toUpperCase() + id.slice(1)))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm px-3 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600"
          >
            <FileText size={16} /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}