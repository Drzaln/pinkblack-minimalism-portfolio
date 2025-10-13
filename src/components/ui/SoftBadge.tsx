// components/ui/SoftBadge.tsx
import React from "react";

interface SoftBadgeProps {
  children: React.ReactNode;
}

export default function SoftBadge({ children }: SoftBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-pink-300 dark:border-pink-300/20 bg-pink-100 dark:bg-pink-300/10 px-3 py-1 text-xs text-pink-700 dark:text-pink-200 font-medium">
      {children}
    </span>
  );
}