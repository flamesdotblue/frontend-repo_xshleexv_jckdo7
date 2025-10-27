import { Home, Layers, Bot, Route, FileText, Settings, LogOut } from "lucide-react";
import { useState } from "react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: Home },
  { key: "scenario", label: "Scenario Builder", icon: Layers },
  { key: "agents", label: "Agent Details", icon: Bot },
  { key: "vendors", label: "Vendors & Routes", icon: Route },
  { key: "reports", label: "Reports", icon: FileText },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function SidebarNav({ active = "dashboard", onSelect }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`h-screen border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur sticky top-0 ${
      collapsed ? "w-20" : "w-64"
    } transition-all duration-300`}
      aria-label="Primary"
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-teal-500" />
          {!collapsed && (
            <span className="font-semibold text-slate-900 dark:text-slate-100">FluxChain</span>
          )}
        </div>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setCollapsed((v) => !v)}
        >
          <div className="w-5 h-5 border-t-2 border-b-2 border-slate-600 dark:border-slate-300 rotate-90" />
        </button>
      </div>

      <nav className="px-2 space-y-1">
        {navItems.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onSelect && onSelect(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors ${
                isActive
                  ? "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-200"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span className="text-sm font-medium">{label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-200 dark:border-slate-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="text-sm">Sign out</span>}
        </button>
      </div>
    </aside>
  );
}
