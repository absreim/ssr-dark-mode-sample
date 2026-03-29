import type { ThemeOptionName } from "./types.ts";
import { THEME_LS_KEY } from "./models";

export const getThemeOptionName: () => ThemeOptionName = () => {
  const lsValue = localStorage.getItem(THEME_LS_KEY);
  switch (lsValue) {
    case "light": {
      return "light";
    }
    case "dark": {
      return "dark";
    }
    default: {
      return "system";
    }
  }
};

export const setThemeOptionName = (name: ThemeOptionName) => {
  localStorage.setItem(THEME_LS_KEY, name);
};
