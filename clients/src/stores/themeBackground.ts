import { atom } from "nanostores";

export type ThemeBackground = "primary" | "secondary";

// default value
export const themeBackground = atom<ThemeBackground>("primary");

// setters
export function setThemeBackground(value: ThemeBackground) {
  themeBackground.set(value);
}

export function toggleThemeBackground() {
  themeBackground.set(themeBackground.get() === "primary" ? "secondary" : "primary");
}
