import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-pink-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading portfolio...</p>
    </div>
  );
}