import { useMemo } from "react";

export default function MainGrid() {
  // Simulated series for demo charts
  const series = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    t: i,
    cost: 100 + Math.sin(i / 2) * 20 + i * 2,
    risk: 0.6 + Math.cos(i / 3) * 0.15,
  })), []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      {/* Map area */}
      <div className="xl:col-span-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Optimal Route Map</p>
          <span className="text-xs text-slate-500 dark:text-slate-400">Mumbai → Delhi</span>
        </div>
        <div className="relative h-80 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
          <div className="absolute inset-6 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 grid place-items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">Map placeholder — integrate React-Leaflet or Mapbox</p>
          </div>
        </div>
      </div>

      {/* Charts side */}
      <div className="space-y-4">
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Cost over time</p>
          </div>
          <div className="p-4">
            <MiniLineChart data={series} xKey="t" yKey="cost" color="#22c55e" />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Risk over time</p>
          </div>
          <div className="p-4">
            <MiniLineChart data={series} xKey="t" yKey="risk" color="#06b6d4" yFormatter={(v)=>v.toFixed(2)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniLineChart({ data, xKey, yKey, color = "#0ea5e9", yFormatter }) {
  const width = 420;
  const height = 140;
  const padding = 24;
  const xs = data.map((d) => d[xKey]);
  const ys = data.map((d) => d[yKey]);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const yMin = Math.min(...ys), yMax = Math.max(...ys);
  const scaleX = (v) => padding + ((v - xMin) / (xMax - xMin)) * (width - padding * 2);
  const scaleY = (v) => height - padding - ((v - yMin) / (yMax - yMin)) * (height - padding * 2);
  const path = data
    .map((d, i) => `${i === 0 ? "M" : "L"}${scaleX(d[xKey]).toFixed(2)},${scaleY(d[yKey]).toFixed(2)}`)
    .join(" ");

  const areaPath = `M${scaleX(xs[0]).toFixed(2)},${scaleY(ys[0]).toFixed(2)} ` +
    data.slice(1).map((d) => `L${scaleX(d[xKey]).toFixed(2)},${scaleY(d[yKey]).toFixed(2)}`).join(" ") +
    ` L${scaleX(xs[xs.length - 1]).toFixed(2)},${height - padding} L${scaleX(xs[0]).toFixed(2)},${height - padding} Z`;

  const gridY = 4;
  const ticks = Array.from({ length: gridY + 1 }, (_, i) => i);

  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Line chart">
      {/* Grid */}
      {ticks.map((t) => {
        const y = padding + t * ((height - padding * 2) / gridY);
        return <line key={t} x1={padding} y1={y} x2={width - padding} y2={y} stroke="#e5e7eb" className="dark:stroke-slate-700" strokeWidth="1" />;
      })}

      {/* Area */}
      <path d={areaPath} fill={color + "20"} />
      {/* Line */}
      <path d={path} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}
