"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { TAX_QUALIFIER, TAX_DISCLOSURE } from "@/lib/pricing/tax";
import { isSupplierPricingEnabled } from "@/lib/pricing/supplier-pricing";

import {
  ctaHrefForPlan,
  ctaLabelForPlan,
  ctaSubtext,
  trialHighlight,
} from "@/lib/marketing/purchase-cta";
type Plan = {
  name: string;
  monthlyPrice: number | null;
  introPrice?: number;
  introLabel?: string;
  description: string;
  freeNote?: string;
  features: string[];
  cta: string;
  popular: boolean;
  /**
   * The tier this card sells, carried into sign-up and on to Stripe checkout.
   * Explicit rather than derived from `name`, so renaming the display label
   * cannot silently detach the button from the price it sits under.
   */
  planId: "essential" | "professional" | "enterprise";
};

// A feature ending in this suffix (e.g. "API access (Coming Soon)") renders
// with a "Coming Soon" badge instead of the raw text — same convention as
// the "separator" magic string below.
const COMING_SOON_SUFFIX = " (Coming Soon)";

const plans: Plan[] = [
  {
    // ⚠️ The "was" price is gone, deliberately. This read monthlyPrice 99 with
    // introPrice 49, rendering "$99" struck through beside "$49". THERE IS NO
    // $99 PRICE. Stripe charges $49, and no $99 Price object has ever existed in
    // the live account — so the saving being implied was never available, which
    // is a representation about a discount rather than a typo.
    // Corrected against live Stripe 2026-08-09. The introPrice/introLabel
    // mechanism is kept for a real sale later; only the false figure is gone.
    name: "Essential",
    planId: "essential",
    monthlyPrice: 49,
    description: "Individual builders, architects, designers, early adopters",
    features: [
      "10 combined runs / month (MMC Build + MMC Comply)",
      "5 plan uploads per month",
      "separator",
      "AI-powered whole-of-house NCC compliance",
      "MMC Build & Comply reports",
      "AI Copilot for design, cost & constructability insights",
      "Access to MMC Directory",
      "Standard email support",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
  {
    // Same correction as Essential above. Stripe charges $199 and has no $299
    // Professional price. The only $299 in the live account is the Growth
    // Partner SUPPLIER tier — a different product entirely — so "normally $299"
    // was not a stale figure, it was never this plan's price at all.
    name: "Professional",
    planId: "professional",
    monthlyPrice: 199,
    description: "Active builders, architects & consultants managing multiple projects",
    features: [
      "30 combined runs / month (MMC Build + MMC Comply)",
      "10 plan uploads per month",
      "separator",
      "Multi-user project collaboration",
      "Team invitations & role-based permissions",
      "Advanced NCC compliance reporting (Coming Soon)",
      "Upload compliance documents & maintain certifications",
      "Priority email support",
      "Integrations (BIM / SketchUp) (Coming Soon)",
      "API access (Coming Soon)",
    ],
    cta: "Join Waitlist",
    popular: true,
  },
  {
    name: "Enterprise",
    planId: "enterprise",
    monthlyPrice: null,
    description: "Tier 1 & 2 builders, large architectural, consulting & supplier firms",
    features: [
      "Unlimited* MMC Build + MMC Comply runs",
      "Unlimited* plan uploads",
      "separator",
      "Multi-organisation management",
      "Portfolio-level compliance & risk reporting",
      "Advanced governance & audit controls",
      "Custom integrations",
      "Dedicated account manager",
      "Priority support & escalation",
      "Team training (MMC Train)",
      "SLA-backed performance & uptime",
      "API access",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
];

// A cell can be true (included), false (not included), or "soon" — included
// in the tier but not yet built, rendered with the same "Coming Soon" badge
// used on the plan cards above.
type Cell = boolean | "soon";
type FeatureRow = [string, Cell, Cell, Cell];

const featureSections: { title: string; rows: FeatureRow[] }[] = [
  {
    title: "User Features - Core Platform",
    rows: [
      ["Secure login & role-based access", true, true, true],
      ["Project dashboard (single user)", true, false, false],
      ["Project dashboard (multiple users)", false, true, true],
      ["Plan upload (PDF/DWG)", true, true, true],
      ["Project storage & history", false, true, true],
      ["Multiple active projects", false, true, true],
      ["Team collaboration (invite users)", false, true, true],
      ["Role-based permissions within projects", false, true, true],
      ["Version tracking of uploads", false, true, true],
    ],
  },
  {
    title: "MMC Comply – Compliance",
    rows: [
      ["Single instant Whole-of-house NCC compliance check", true, false, false],
      ["Single AI-identified non-compliant elements", true, false, false],
      ["Single NCC clause citations (transparent & auditable)", true, false, false],
      ["Single Compliance confidence indicators", true, false, false],
      ["Single PDF compliance report export", true, false, false],
      ["Multiple Whole-of-house NCC compliance checks and reports", false, "soon", "soon"],
      ["Faster compliance processing", true, true, true],
      ["Issue severity ranking", true, true, true],
      ["Combined compliance report (project-ready)", true, true, true],
      ["Upload compliance documents", false, true, true],
      ["Maintain certifications", false, true, true],
      ["Project storage & history", false, true, true],
    ],
  },
  {
    title: "MMC Build – AI Copilot",
    rows: [
      ["Basic AI insights on uploaded plans", true, true, true],
      ["AI chat for NCC clarification & guidance", true, true, true],
      ["AI design optimisation suggestions (MMC / prefab / constructability)", true, true, true],
      ['"What-if" cost scenario modelling', true, true, true],
      ["Cost drivers & delta comparisons", true, true, true],
      ["AI explanations linked to design outcomes", true, true, true],
      ["Project storage & history", false, true, true],
      ["Spreadsheet cost summaries (XLSX)", true, true, true],
    ],
  },
  {
    title: "Usage Limits",
    rows: [
      ["Limited plan uploads per month", true, false, false],
      ["Limited AI runs per project", true, false, false],
    ],
  },
  {
    title: "Support",
    rows: [
      ["Email support", true, true, true],
      ["Priority email support", false, true, true],
      ["Onboarding assistance", true, true, true],
    ],
  },
  {
    title: "MMC Train",
    rows: [
      ["Access MMC training modules", false, true, true],
      ["Certification tracking", false, true, true],
    ],
  },
  {
    title: "MMC Directory",
    rows: [["Search verified trades, suppliers & consultants", true, true, true]],
  },
  {
    title: "Enterprise Control Features",
    rows: [["Multi-organisation management", false, false, true]],
  },
  {
    title: "Advanced Integrations",
    rows: [
      ["SketchUp / BIM workflows (roadmap)", false, "soon", "soon"],
      ["Xero / Stripe billing integrations", false, true, true],
      ["API access", false, "soon", "soon"],
    ],
  },
  {
    title: "Reporting & Risk",
    rows: [["Risk & exception summaries", false, true, true]],
  },
  {
    title: "Support & Services",
    rows: [
      ["Dedicated account manager", false, false, true],
      ["Priority support & escalation", false, false, true],
      ["Custom onboarding & training", false, false, true],
    ],
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    q: "What do the plans cost?",
    // Prose prices need the qualifier as much as the plan cards do.
    //
    // ⚠️ This previously answered "Do you offer an early adopter discount?" with
    // "$49 (normally $99)" and "$199 (normally $299)". Neither "normally" figure
    // exists: Stripe charges $49 and $199, has no $99 Price at all, and its only
    // $299 is the Growth Partner supplier tier. Quoting a saving against a price
    // nobody was ever charged is a claim about a discount, so the question and
    // the answer were both replaced rather than reworded around the figures.
    a: "Essential is $49/month + GST and Professional is $199/month + GST. Annual billing saves about 20% on both. Enterprise is custom-priced — talk to us and we will quote it. All prices exclude GST.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank transfers, and can arrange invoicing for Enterprise customers.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    // Named the wrong tiers until 7 August: it offered annual on Enterprise,
    // which is custom-priced and has no annual price to sell, and omitted
    // Essential, which does. Someone on Essential was told annual was not
    // available to them, and an Enterprise buyer was quoted a discount nothing
    // could apply. The same line existed in the app repo and was fixed with it.
    a: "Yes — annual billing saves you about 20% compared with paying monthly, on both the Essential and Professional plans. That works out to roughly two months free. Enterprise is custom-priced, so annual terms are agreed as part of your quote.",
  },
];

export function PricingClient() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  // The per-month rate: discounted 20% when annual billing is selected.
  const withAnnual = (amount: number): number =>
    isAnnual ? Math.round(amount * 0.8) : amount;

  // The headline figure for the price card: the annual total when annual
  // billing is selected (what actually gets charged), the monthly rate
  // otherwise.
  const displayAmount = (amount: number): number =>
    isAnnual ? Math.round(amount * 0.8 * 12) : amount;

  const getPrice = (plan: Plan): string => {
    if (plan.monthlyPrice === 0) return "Free";
    if (plan.monthlyPrice === null) return "Custom";
    const base = plan.introPrice ?? plan.monthlyPrice;
    return `$${displayAmount(base)}`;
  };

  // Prices are quoted GST-exclusive, so the period carries the qualifier — see
  // lib/pricing/tax.ts. "Free" and "Custom" get none: there is no amount for
  // GST to apply to, and Enterprise is quoted per deal.
  const getPeriod = (plan: Plan): string => {
    if (plan.monthlyPrice === 0 || plan.monthlyPrice === null) return "";
    return isAnnual ? `/year ${TAX_QUALIFIER}` : `/month ${TAX_QUALIFIER}`;
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#0f172a] text-white overflow-hidden py-16">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-6">
            Choose the plan that fits your needs. All plans include access to our core features.
          </p>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? "bg-white text-slate-900 shadow-lg" : "text-white hover:text-slate-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                isAnnual ? "bg-white text-slate-900 shadow-lg" : "text-white hover:text-slate-200"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>

          {trialHighlight() && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
              <Sparkles className="h-4 w-4" />
              {trialHighlight()}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-slate-600 mb-3">{TAX_DISCLOSURE}</p>
            <p className="text-slate-600 text-lg">
              {/* Don't promise "pricing" on a page whose prices are hidden. */}
              {isSupplierPricingEnabled()
                ? "For Trades & Suppliers pricing, please click "
                : "For Trades & Suppliers directory listings, please click "}
              <Link
                href="/mmc-suppliers#pricing"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                here
              </Link>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-6 ${
                  plan.popular
                    ? "bg-slate-900 text-white ring-4 ring-blue-500 scale-105"
                    : "bg-white border border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-extrabold ${
                        plan.popular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {getPrice(plan)}
                    </span>
                    {plan.introPrice != null && plan.monthlyPrice != null && (
                      <span
                        className={`text-lg font-semibold line-through ${
                          plan.popular ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        ${displayAmount(plan.monthlyPrice)}
                      </span>
                    )}
                    <span className={plan.popular ? "text-slate-400" : "text-slate-500"}>
                      {getPeriod(plan)}
                    </span>
                  </div>
                  {plan.introLabel && plan.introPrice != null && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-50 border border-green-200 px-3 py-1">
                      <Sparkles className="h-3 w-3 text-green-600" />
                      <span className="text-xs font-bold text-green-700">{plan.introLabel}</span>
                    </div>
                  )}
                  {isAnnual && plan.monthlyPrice && plan.monthlyPrice > 0 && (
                    <p
                      className={`mt-1 text-xs ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      ${withAnnual(plan.introPrice ?? plan.monthlyPrice)}/month {TAX_QUALIFIER},
                      billed annually
                    </p>
                  )}
                  <p
                    className={`mt-1 text-xs ${plan.popular ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {plan.description}
                  </p>
                  {plan.freeNote && (
                    <div className="mt-2 bg-green-50 border border-green-200 rounded-lg px-2 py-1.5">
                      <p className="text-xs font-bold text-green-700 text-center">
                        ✨ {plan.freeNote}
                      </p>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => {
                    const comingSoon = feature.endsWith(COMING_SOON_SUFFIX);
                    const label = comingSoon
                      ? feature.slice(0, -COMING_SOON_SUFFIX.length)
                      : feature;
                    return feature === "separator" ? (
                      <li key={i} className="pt-1 pb-1">
                        <div
                          className={`border-t ${
                            plan.popular ? "border-slate-700" : "border-slate-200"
                          }`}
                        />
                      </li>
                    ) : (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${plan.popular ? "text-slate-300" : "text-slate-600"}`}
                        >
                          {label}
                          {comingSoon && (
                            <span className="ml-2 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 align-middle">
                              Coming Soon
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {/* SCRUM-372: label and destination switch together with
                      NEXT_PUBLIC_PURCHASE_CTA_ENABLED. A custom-priced plan has
                      no self-serve path, so it routes to contact rather than
                      dropping an enterprise buyer into a $49 trial. */}
                  <Link
                    href={ctaHrefForPlan(
                      plan.monthlyPrice === null,
                      "/contact",
                      plan.planId,
                      isAnnual ? "year" : "month",
                    )}
                  >
                    {ctaLabelForPlan(plan.monthlyPrice === null)}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {plan.monthlyPrice !== null && ctaSubtext() && (
                  <p className="mt-2 text-center text-xs text-slate-500">
                    {ctaSubtext()}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Complete Feature Breakdown
          </h2>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="overflow-x-auto overscroll-x-contain">
              <div className="max-h-[80dvh] overflow-y-auto">
                <table className="w-full min-w-[640px]">
                  <thead className="sticky top-0 z-10 bg-slate-900 text-white">
                    <tr>
                      <th className="w-2/5 px-4 py-4 text-left text-sm font-bold sm:px-6 sm:py-6 sm:text-lg">Feature</th>
                      <th className="w-1/5 border-l border-slate-700 px-3 py-4 text-center text-sm font-bold sm:px-6 sm:py-6 sm:text-lg">
                        Essential
                      </th>
                      <th className="w-1/5 border-l border-slate-700 px-3 py-4 text-center text-sm font-bold sm:px-6 sm:py-6 sm:text-lg">
                        Professional
                      </th>
                      <th className="w-1/5 border-l border-slate-700 px-3 py-4 text-center text-sm font-bold sm:px-6 sm:py-6 sm:text-lg">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureSections.map((section) => (
                      <React.Fragment key={section.title}>
                        <tr className="bg-slate-100">
                          <td
                            colSpan={4}
                            className="px-4 py-3 text-sm font-bold uppercase tracking-wide text-slate-900 sm:px-6"
                          >
                            {section.title}
                          </td>
                        </tr>
                        {section.rows.map((row, idx) => (
                          <tr
                            key={`${section.title}-${idx}`}
                            className="border-t border-slate-200 hover:bg-slate-50"
                          >
                            <td className="px-4 py-3 text-sm text-slate-700 sm:px-6 sm:py-4 sm:text-base">{row[0]}</td>
                            {([row[1], row[2], row[3]] as Cell[]).map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="border-l border-slate-200 px-3 py-3 text-center sm:px-6 sm:py-4"
                              >
                                {cell === true ? (
                                  <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                                ) : cell === "soon" ? (
                                  <span className="inline-flex items-center whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                                    Coming Soon
                                  </span>
                                ) : (
                                  <span className="text-slate-300">—</span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
