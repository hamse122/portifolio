"use client";

import { ThemeContextProvider } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}

