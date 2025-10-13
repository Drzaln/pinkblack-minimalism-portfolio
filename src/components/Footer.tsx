import { Profile } from "@/lib/types/profile.types";
import React from "react";

interface FooterProps {
  profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a 
            href={profile.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            Star
          </a>
          <span>•</span>
          <a 
            href={profile.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            Fork
          </a>
        </div>
      </div>
    </footer>
  );
}