import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "dn-theme";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    // Storage can be blocked (private mode); the theme still switches for this visit.
  }
}

export default function ThemeToggle() {
  // Dark is the site default and matches the server-rendered <html class="dark">.
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // The inline script in __root.tsx already applied the saved theme before first paint,
    // so read the real state from the page instead of guessing.
    setDark(document.documentElement.classList.contains("dark"));

    // Keep other open tabs in sync.
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      const next = event.newValue !== "light";
      document.documentElement.classList.toggle("dark", next);
      setDark(next);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="group relative inline-flex h-9 w-[4.25rem] shrink-0 items-center rounded-full border border-border bg-card px-1 text-muted-foreground transition-colors hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Faint glyphs on the track show both options at a glance */}
      <Sun aria-hidden="true" size={14} className="absolute left-2.5" />
      <Moon aria-hidden="true" size={14} className="absolute right-2.5" />

      {/* Sliding knob shows the active theme */}
      <span
        aria-hidden="true"
        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-md transition-transform duration-300 ease-out motion-reduce:transition-none ${
          dark ? "translate-x-[1.875rem]" : "translate-x-0"
        }`}
      >
        {dark ? <Moon size={15} /> : <Sun size={15} />}
      </span>
    </button>
  );
}
