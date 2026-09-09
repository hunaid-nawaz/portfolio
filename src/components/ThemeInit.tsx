"use client";

import { useLayoutEffect } from "react";
import { applyStoredTheme } from "@/lib/theme-dom";

export function ThemeInit() {
  useLayoutEffect(() => {
    applyStoredTheme();
  }, []);

  return null;
}
