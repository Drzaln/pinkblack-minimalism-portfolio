import React from "react";

interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">{message}</p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white hover:from-pink-600"
      >
        Reload Page
      </button>
    </div>
  );
}