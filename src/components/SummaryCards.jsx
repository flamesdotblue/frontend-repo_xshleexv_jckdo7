import { TrendingUp, ShieldAlert, Navigation2, DollarSign } from "lucide-react";

function StatCard({ title, value, change, icon: Icon, tone = "info" }) {
  const tones = {
    info: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-200",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-200",
    danger: "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-200",
  };
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-950">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{value}</p>
          {change && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{change}</p>
          )}
        </div>
        <div className={`h-12 w-12 grid place-items-center rounded-md ${tones[tone]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard title="Total Cost Savings" value="₹12.4L" change="+8.2% vs last run" icon={DollarSign} tone="success" />
      <StatCard title="Risk Score" value="Low (0.32)" change="-0.05 vs baseline" icon={ShieldAlert} tone="info" />
      <StatCard title="Route Efficiency" value="92%" change="+3% optimised" icon={Navigation2} tone="warning" />
      <StatCard title="Forecast Accuracy" value="97.1%" change="+1.2% w/w" icon={TrendingUp} tone="info" />
    </div>
  );
}
