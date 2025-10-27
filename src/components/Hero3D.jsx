import Spline from "@splinetool/react-spline";
import { Rocket, ArrowRight } from "lucide-react";

export default function Hero3D({ onPrimaryAction }) {
  return (
    <section className="relative w-full">
      <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(2,6,23,0.4)]">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Soft radial glow overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.15)_0%,rgba(20,184,166,0.12)_40%,transparent_70%)]" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="p-6 md:p-10 lg:p-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
              <Rocket className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Interactive 3D — Glass Card</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Supply-chain optimisation, reimagined in 3D
            </h1>
            <p className="mt-3 md:mt-4 text-slate-700/80 dark:text-slate-300/90 text-sm md:text-base">
              Explore scenarios, monitor agents, and tune routes with a modern, immersive interface. Smooth, responsive, and built for real-time insights.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={onPrimaryAction}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 text-sm font-medium shadow-lg shadow-sky-600/30 transition-colors"
              >
                Run optimisation
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#learn-more"
                className="rounded-lg border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-900/80"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
