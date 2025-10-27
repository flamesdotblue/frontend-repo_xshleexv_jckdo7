import { useState } from "react";
import SidebarNav from "./components/SidebarNav.jsx";
import TopBar from "./components/TopBar.jsx";
import Hero3D from "./components/Hero3D.jsx";
import DashboardContent from "./components/DashboardContent.jsx";

function Section({ title, children, actions }) {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
        {actions}
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="flex">
        <SidebarNav active={active} onSelect={setActive} />
        <div className="flex-1 min-w-0">
          <TopBar title={labelFromKey(active)} />

          <main className="p-4 md:p-6">
            {active === "dashboard" && (
              <>
                <Hero3D onPrimaryAction={() => setActive("scenario")} />
                <DashboardContent />
                <Section
                  title="Run Optimisation"
                  actions={<button className="px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">Run</button>}
                >
                  <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-950">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Configure a scenario in the builder and run real-time optimisation. Progress will stream without blocking the UI.
                    </p>
                  </div>
                </Section>
              </>
            )}

            {active === "scenario" && (
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Scenario Builder</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Scenario Type</label>
                    <select className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                      <option>Normal</option>
                      <option>Peak Season</option>
                      <option>Weather Disruption</option>
                      <option>Port Congestion</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Origin</label>
                      <input className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200" placeholder="Mumbai" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Destination</label>
                      <input className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200" placeholder="Delhi" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Date</label>
                    <input type="date" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Risk threshold</label>
                    <input type="range" min="0" max="1" step="0.01" className="mt-3 w-full" />
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">Run Optimisation</button>
                  <button className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Save Draft</button>
                </div>
              </div>
            )}

            {active === "agents" && (
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Agent Details</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Tabbed agent diagnostics, logs, and KPIs would appear here.</p>
              </div>
            )}

            {active === "vendors" && (
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Vendors & Routes</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Sortable vendor table and map view toggle.</p>
              </div>
            )}

            {active === "reports" && (
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Reports</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Export KPI summaries as PDF/CSV.</p>
              </div>
            )}

            {active === "settings" && (
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-950">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Settings</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">OpenAI API Key</label>
                    <input type="password" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200" placeholder="sk-..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Map Provider Key</label>
                    <input type="password" className="mt-1 w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200" placeholder="pk. ..." />
                  </div>
                </div>
                <button className="mt-6 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Save</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function labelFromKey(key) {
  switch (key) {
    case "dashboard":
      return "Dashboard";
    case "scenario":
      return "Scenario Builder";
    case "agents":
      return "Agent Details";
    case "vendors":
      return "Vendors & Routes";
    case "reports":
      return "Reports";
    case "settings":
      return "Settings";
    default:
      return "Dashboard";
  }
}
