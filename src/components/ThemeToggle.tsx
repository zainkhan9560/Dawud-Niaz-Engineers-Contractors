import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("dn-theme");
    const useDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("dn-theme", next ? "dark" : "light");
  }
  return <button type="button" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-gold hover:text-gold">
    {dark ? <Sun size={18} /> : <Moon size={18} />}
  </button>;
}
