import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "MMC Build for Investors | AI Powered Construction Intelligence",
  description:
    "AI, construction and Australia's housing shortfall meet at MMC Build. See why investors are backing the platform built to fix how the industry designs, complies, quotes and builds.",
};

const heroStats = [
  { value: "$2.6B+", label: "Australian market size" },
  { value: "30%", label: "MMC share by 2030" },
  { value: "20", label: "professionals in beta" },
  { value: "July 2026", label: "commercial launch" },
];

const pillars = [
  {
    title: "Vision",
    description:
      "To become the world's most trusted AI powered construction intelligence platform, starting in Australia.",
  },
  {
    title: "Mission",
    description:
      "Australia's first AI powered ecosystem for Modern Methods of Construction, helping the industry design, comply, quote, connect and build more efficiently.",
  },
  {
    title: "Commitment",
    description:
      "Improving life for the people who build, pushing technology forward, and growing a global community of ground breakers.",
  },
];

const employment = [
  { code: "AU", value: "1.7M", pct: 20.5 },
  { code: "NZ", value: "325K", pct: 3.9 },
  { code: "UK", value: "2.6M", pct: 31.3 },
  { code: "US", value: "8.3M", pct: 100 },
];

const revenueStreams = [
  { label: "Recurring SaaS subscriptions", tag: "Recurring" },
  { label: "Supplier marketplace memberships", tag: "Recurring" },
  { label: "Qualified lead referral fees", tag: "Per lead" },
  { label: "Enterprise licensing and integrations", tag: "Contract" },
  { label: "Training, certification and professional development", tag: "Program" },
];

const scaleTimeline = [
  {
    tag: "01 · 2026",
    title: "Launch",
    desc: "Commercial launch, and we start bringing on paying customers.",
  },
  {
    tag: "02",
    title: "Prove It Out",
    desc: "Prove product market fit and grow recurring revenue.",
  },
  {
    tag: "03",
    title: "Expand the Platform",
    desc: "Grow the supplier marketplace and add enterprise capabilities.",
  },
  {
    tag: "04",
    title: "Go National",
    desc: "Scale across Australia, then move into New Zealand, the UK and the US.",
  },
  {
    tag: "05",
    title: "Ready for Institutional Capital",
    desc: "Set the business up for institutional investment as international expansion picks up pace.",
  },
];

function Eyebrow({
  children,
  tone = "light",
  size = "sm",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  size?: "sm" | "lg";
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`h-px w-8 flex-shrink-0 ${tone === "dark" ? "bg-sky-400" : "bg-blue-600"}`} />
      <p
        className={`font-mono uppercase tracking-[0.2em] ${size === "lg" ? "text-sm" : "text-[11px]"} ${
          tone === "dark" ? "text-sky-300" : "text-blue-600"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default function InvestorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#0f172a] text-white overflow-hidden py-24 sm:py-28">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 lg:whitespace-nowrap">
            The Operating System for Construction
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 mb-10">
            MMC Build brings AI, compliance and Modern Methods of Construction into one
            system, built to close the gap in Australia&apos;s housing supply.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 h-11 font-medium transition-colors"
          >
            Contact to Discuss <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <div className="mt-16 border-t border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {heroStats.map((s) => (
                <div key={s.label} className="px-4 py-6">
                  <p className="text-2xl sm:text-3xl font-semibold text-white">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Commitment */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block">
            <div className="grid grid-cols-3 items-center">
              {pillars.map((p, i) => (
                <div key={p.title} className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-blue-600 flex-shrink-0" />
                  {i < pillars.length - 1 && <div className="h-px flex-1 bg-slate-200 ml-2" />}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-12 mt-6">
              {pillars.map((p) => (
                <div key={p.title}>
                  <p className="text-xl font-semibold text-blue-700 mb-3">
                    {p.title}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden space-y-8">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-blue-600 flex-shrink-0 mt-1" />
                  {i < pillars.length - 1 && <span className="w-px flex-1 bg-slate-200 my-1" />}
                </div>
                <div className="pb-2">
                  <p className="text-xl font-semibold text-blue-700 mb-2">
                    {p.title}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why invest intro + Market opportunity */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
              Why Invest in MMC Build
            </h2>
            <p className="text-lg text-slate-600">
              Six reasons the market, the timing and the team line up.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
              A Large, Fast Growing Market
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-center">
              <p className="text-6xl sm:text-7xl font-bold text-slate-900 leading-none">
                $2.6B+
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                MMC Build is going after a $2.6B+ Australian market first, with a SaaS
                platform built to scale into New Zealand, the UK and the US from day one.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8">
              <p className="text-lg font-semibold text-slate-900 mb-6">
                Construction is the third largest employer in the world
              </p>
              <div className="space-y-4">
                {employment.map((e) => (
                  <div key={e.code} className="flex items-center gap-4">
                    <span className="w-10 font-mono text-sm font-semibold text-slate-500">
                      {e.code}
                    </span>
                    <div className="h-2.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${e.pct}%` }}
                      />
                    </div>
                    <span className="w-16 text-right font-mono text-base font-semibold text-slate-900">
                      {e.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-8 lg:col-span-2">
              <p className="text-lg font-semibold text-slate-900 mb-8">
                MMC adoption in new housing
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-8 max-w-2xl">
                <div>
                  <p className="text-6xl sm:text-7xl font-bold text-slate-900 leading-none">
                    8%
                  </p>
                  <p className="mt-3 font-mono text-sm uppercase tracking-[0.15em] text-slate-500">
                    Today
                  </p>
                </div>
                <div>
                  <p className="text-6xl sm:text-7xl font-bold text-blue-600 leading-none">
                    30%
                  </p>
                  <p className="mt-3 font-mono text-sm uppercase tracking-[0.15em] text-slate-500">
                    By 2030
                  </p>
                </div>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 relative overflow-hidden max-w-2xl">
                <div
                  className="absolute inset-y-0 rounded-full bg-blue-600"
                  style={{ left: "8%", width: "22%" }}
                />
              </div>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Modern Methods of Construction, including prefabricated homes, is on track
                to grow from around 8% of new housing today to 30% by 2030. The Australian
                Government has already committed $70 million to prefabrication, on top of
                growing support for housing delivery and AI adoption across the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Validation / Team / Revenue */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#0f172a] p-8">
              <Eyebrow tone="dark" size="lg">Early Commercial Validation</Eyebrow>
              <p className="text-6xl font-bold text-white leading-none mb-4">
                20
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Builders, suppliers and construction professionals are already using
                MMC Build through our beta and early access program.
              </p>
              <p className="mt-6 text-base text-slate-400 leading-relaxed border-t border-white/10 pt-6">
                We are converting these early adopters into signed Letters of Intent and
                Founding Members ahead of commercial launch in July 2026.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Solving an Expensive Industry Problem
              </h3>
              <div className="border-t border-slate-200 pt-6 space-y-6">
                <div>
                  <p className="text-xl font-semibold text-blue-700 mb-2">
                    The Problem
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Labour shortages, rising costs, fragmented workflows and compliance
                    requirements that keep getting more complex: this is daily reality
                    across construction.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-blue-700 mb-2">
                    The Opportunity
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    MMC Build is the first platform to bring compliance, design
                    optimisation, quoting, training and a verified supplier marketplace
                    together under one system, powered by AI. The result: construction
                    professionals make faster, smarter calls, and protect their margins
                    on every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                A Team That Knows the Industry
              </h3>
              <div className="border-t border-slate-200 pt-6 space-y-6">
                <div>
                  <p className="text-xl font-semibold text-blue-700 mb-2">
                    The Founders
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    The founders bring deep experience across construction, property
                    development, technology and AI.
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-blue-700 mb-2">
                    The Network
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Industry associations, educational institutions and technology
                    partners are already working alongside the team, helping speed up
                    product development and market adoption.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Five Ways MMC Build Makes Money
              </h3>
              <div className="border-t border-slate-200">
                {revenueStreams.map((r, i) => (
                  <div
                    key={r.label}
                    className="group -mx-2 flex items-start justify-between gap-4 rounded-lg border-b border-slate-200 px-2 py-4 transition-colors duration-200 last:border-0 hover:bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-sm font-semibold text-blue-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-medium leading-snug text-slate-900">
                        {r.label}
                      </span>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-blue-50 px-3 py-1 font-mono text-xs uppercase tracking-wide text-blue-700 transition-colors duration-200 group-hover:bg-blue-100">
                      {r.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear path to scale */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Roadmap</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-balance">
            Clear Path to Scale
          </h2>

          <div className="hidden lg:block">
            <div className="grid grid-cols-5 items-center">
              {scaleTimeline.map((m, i) => (
                <div key={m.tag} className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-blue-600 flex-shrink-0" />
                  {i < scaleTimeline.length - 1 && (
                    <div className="h-px flex-1 bg-slate-300 ml-2" />
                  )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-6 mt-4">
              {scaleTimeline.map((m) => (
                <div key={m.tag}>
                  <p className="font-mono text-sm uppercase tracking-[0.15em] text-blue-600 mb-2">
                    {m.tag}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{m.title}</h4>
                  <p className="text-base text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden space-y-8">
            {scaleTimeline.map((m, i) => (
              <div key={m.tag} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-blue-600 flex-shrink-0 mt-1" />
                  {i < scaleTimeline.length - 1 && (
                    <span className="w-px flex-1 bg-slate-300 my-1" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="font-mono text-sm uppercase tracking-[0.15em] text-blue-600 mb-1">
                    {m.tag}
                  </p>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{m.title}</h4>
                  <p className="text-base text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#0f172a] px-8 py-14 sm:px-16 sm:py-20 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
            <span className="absolute top-6 left-6 h-6 w-6 border-t-2 border-l-2 border-sky-400/40" />
            <span className="absolute top-6 right-6 h-6 w-6 border-t-2 border-r-2 border-sky-400/40" />
            <span className="absolute bottom-6 left-6 h-6 w-6 border-b-2 border-l-2 border-sky-400/40" />
            <span className="absolute bottom-6 right-6 h-6 w-6 border-b-2 border-r-2 border-sky-400/40" />
            <p className="relative text-2xl sm:text-3xl font-medium text-white leading-loose text-balance max-w-4xl mx-auto">
              &ldquo;MMC Build is the operating system for modern construction. It is the
              digital infrastructure the industry needs to build faster, smarter and at
              scale, powered by AI from the ground up.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let&apos;s talk numbers.
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Reach out and we&apos;ll walk you through the model, the traction and the
            roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-blue-600 hover:bg-blue-500 text-white px-10 h-12 text-base font-medium transition-colors"
          >
            Contact to Discuss <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
