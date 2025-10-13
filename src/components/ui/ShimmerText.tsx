// components/ui/ShimmerText.tsx
"use client"

import React from "react";
import { useEffect, useState } from "react";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShimmerText({ children, className = "" }: ShimmerTextProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const lightModeGradient = "linear-gradient(110deg, rgb(236, 72, 153) 0%, rgb(219, 39, 119) 25%, rgb(236, 72, 153) 50%, rgb(219, 39, 119) 75%, rgb(236, 72, 153) 100%)";
  
  const darkModeGradient = "linear-gradient(110deg, rgba(255,255,255,0.85) 0%, rgba(255,182,193,0.7) 25%, rgba(255,255,255,0.85) 50%, rgba(255,182,193,0.7) 75%, rgba(255,255,255,0.85) 100%)";

  return (
    <span
      className={`relative inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: isDark ? darkModeGradient : lightModeGradient,
        backgroundSize: "200% 100%",
        animation: "shimmer 4s ease-in-out infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: 0% 0; }
        }
      `}</style>
    </span>
  );
}