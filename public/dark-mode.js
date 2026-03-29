"use strict";

const THEME_LS_KEY = "theme";

const syncTheme = () => {
    let currentTheme = "auto";
    const storedTheme = localStorage.getItem(THEME_LS_KEY);
    if (["dark", "light"].includes(storedTheme)) {
        currentTheme = storedTheme;
    }

    if (currentTheme === "auto") {
        document.documentElement.setAttribute(
            "data-bs-theme",
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light",
        );
    } else {
        document.documentElement.setAttribute("data-bs-theme", currentTheme);
    }
};

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", syncTheme);

syncTheme();

window.syncTheme = syncTheme;
