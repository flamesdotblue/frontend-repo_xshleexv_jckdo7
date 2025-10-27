import { Moon, Sun, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return [enabled, setEnabled];
}

export default function TopBar({ title = "Dashboard" }) {
  const [dark, setDark] = useDarkMode();

  return (
    <header className="sticky top-0 z-10 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Notifications" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
          <button
            aria-label="Toggle dark mode"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
          <div className="ml-2 h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 grid place-items-center text-white">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
