import type { ThemeOptionName } from "./types.ts";

export const themeOptionLabels: Record<ThemeOptionName, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export const THEME_LS_KEY = "theme";
