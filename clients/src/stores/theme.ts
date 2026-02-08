import { atom, onMount } from "nanostores";

export type Theme = "light" | "dark";
export const theme = atom<Theme>("light");

function isTheme(v: unknown): v is Theme {
  return v === "light" || v === "dark";
}

onMount(theme, () => {
  // load saved
  try {
    const saved = localStorage.getItem("theme");
    if (isTheme(saved)) theme.set(saved);
  } catch { }

  const apply = (t: Theme) => {
    // Option A: use data-theme for CSS
    document.documentElement.dataset.theme = t;

    // Option B: if you use Tailwind darkMode: "class", uncomment:
    // document.documentElement.classList.toggle("dark", t === "dark");
  };

  apply(theme.get());

  const unsub = theme.subscribe((t) => {
    apply(t);
    try {
      localStorage.setItem("theme", t);
    } catch { }
  });

  // cross-tab sync
  const onStorage = (e: StorageEvent) => {
    if (e.key === "theme" && isTheme(e.newValue)) theme.set(e.newValue);
  };
  globalThis.addEventListener("storage", onStorage);

  return () => {
    unsub();
    globalThis.removeEventListener("storage", onStorage);
  };
});

export function toggleTheme() {
  theme.set(theme.get() === "dark" ? "light" : "dark");
}
