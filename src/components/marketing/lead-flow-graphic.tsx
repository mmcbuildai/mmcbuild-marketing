import { Building2, Compass, HardHat, Sparkles, CheckCircle2 } from "lucide-react";

const sources = [
  { icon: HardHat, label: "Builders" },
  { icon: Compass, label: "Architects" },
  { icon: Building2, label: "Developers" },
];

/**
 * Animated "AI lead-flow" graphic shown beside the mmc-suppliers narrative.
 * Pure CSS animation (keyframes in globals.css) so it renders as a Server
 * Component with no client JS. Honours prefers-reduced-motion.
 */
export default function LeadFlowGraphic() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
      <div className="relative flex flex-col items-center gap-5 p-8 text-center">
        {/* Project stakeholders */}
        <div className="flex flex-wrap justify-center gap-3">
          {sources.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
            >
              <s.icon className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Flow into the AI */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="mmc-flow-dot h-2 w-2 rounded-full bg-blue-500"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>

        {/* AI matching core */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <span className="absolute inset-0 rounded-2xl bg-blue-500/30 animate-ping motion-reduce:hidden" />
            <div className="relative flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30">
              <Sparkles className="h-5 w-5 animate-pulse motion-reduce:animate-none" />
              <span className="font-semibold">MMC Build AI</span>
            </div>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">
            Matches live projects to suppliers in real time
          </p>
        </div>

        {/* Flow out to the supplier */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="mmc-flow-dot h-2 w-2 rounded-full bg-teal-500"
              style={{ animationDelay: `${i * 0.4 + 0.2}s` }}
            />
          ))}
        </div>

        {/* Qualified lead delivered to you */}
        <div className="mmc-float w-full max-w-xs rounded-2xl border border-blue-100 bg-white p-4 text-left shadow-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Qualified project lead
              </p>
              <p className="text-xs text-slate-500">3-bed modular home · Sydney</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="text-xs text-slate-500">Matched to</span>
            <span className="text-xs font-semibold text-blue-600">Your business</span>
          </div>
        </div>
      </div>
    </div>
  );
}
