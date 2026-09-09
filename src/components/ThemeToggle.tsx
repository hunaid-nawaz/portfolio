"use client";

import { useSyncExternalStore } from "react";
import { applyTheme } from "@/lib/theme-dom";
import type { Theme } from "@/lib/theme";

function currentTheme(): Theme {
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    return "dark";
  }
  if (root.classList.contains("light")) {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, currentTheme, () => "light");
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent transition-colors hover:border-hover hover:bg-hover hover:text-background"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      onClick={() => applyTheme(next)}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3v2.2M12 18.8V21M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M3 12h2.2M18.8 12H21M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 13.2A7 7 0 0 1 10.8 5 6.5 6.5 0 1 0 19 14.5a7 7 0 0 1-2.5-1.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
