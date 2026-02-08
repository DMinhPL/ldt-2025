import { useStore } from "@nanostores/react";
import { theme, toggleTheme } from "../stores";

export default function TopBar() {
  const $theme = useStore(theme);

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <button onClick={toggleTheme}>
        Theme: {$theme}
      </button>
    </div>
  );
}
