import { Fragment } from "react";
import type { Metadata } from "next";
import { CheckCircle2, Users, Award, TrendingUp, Shield } from "lucide-react";
import TradesSupplierForm from "@/components/marketing/trades-supplier-form";

export const metadata: Metadata = {
  title: "MMC Trades & Suppliers Directory — Join Australia's Leading MMC Network",
  description:
    "Join the verified MMC trades and suppliers directory. Connect with builders, architects, and developers seeking Modern Methods of Construction expertise.",
};

const benefits = [
  "Increase visibility of your products with active project stakeholders",
  "Generate qualified lead opportunities — acting like an additional salesperson for your business",
  "Have your products referenced within AI-driven design recommendations",
  "Get your systems specified earlier in the project lifecycle",
  "Position your business within a verified ecosystem focused on quality, compliance and innovation",
];

type Plan = {
  name: string;
  price: string;
  period: string;
  trial: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic Directory",
    price: "$99",
    period: "/month",
    trial: "First 2 months free",
    features: [
      "Basic directory listing",
      "Company profile page",
      "Contact information display",
      "MMC capability tags",
      "Search visibility",
    ],
  },
  {
    name: "Professional Directory",
    price: "$499",
    period: "/month",
    trial: "First 2 months free",
    popular: true,
    features: [
      "Featured directory placement",
      "Enhanced company profile",
      "Portfolio showcase",
      "Project case studies",
      "Priority search ranking",
      "Verified badge",
      "Lead notifications",
    ],
  },
];

type FeatureRow = [string, boolean, boolean];
const featureSections: { title: string; rows: FeatureRow[] }[] = [
  {
    title: "Trade & Suppliers Features",
    rows: [
      ["ABN & licence verification", true, true],
      ["Public directory listing", true, true],
      ["MMC capability tagging", true, true],
    ],
  },
  {
    title: "Lead & Tender Access",
    rows: [
      ["Receive project invitations", false, true],
      ["Respond to tenders via platform", false, true],
      ["Profile visibility to users", false, true],
    ],
  },
  {
    title: "Enterprise Control Features",
    rows: [["Multi-organisation management", false, true]],
  },
  {
    title: "Support & Services",
    rows: [
      ["Dedicated account manager", false, true],
      ["Priority support & escalation", false, true],
      ["Custom onboarding & training", false, true],
    ],
  },
];

const stats = [
  { icon: Users, label: "Verified Professionals", value: "500+" },
  { icon: TrendingUp, label: "Active Projects", value: "1,200+" },
  { icon: Shield, label: "Quality Assured", value: "100%" },
  { icon: Award, label: "Client Satisfaction", value: "4.8/5" },
];

export default function MMCSuppliersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#0f172a] text-white overflow-hidden py-16">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-6 backdrop-blur-sm">
            <Award className="h-4 w-4 mr-2" />
            Verified MMC Professionals
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:whitespace-nowrap mb-6">
            Turn your products &amp; services into Qualified leads
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-300">
            Australia&apos;s first AI-enabled MMC Marketplace.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Turn Your Products Into Qualified Leads
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Most suppliers and trades spend thousands every month on marketing,
            directories, Google Ads, industry events, sponsorships, and sales teams
            &mdash; hoping the right builder or architect finds them.
          </p>
          <p className="text-xl font-semibold text-slate-900 mb-2">The problem?</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Most enquiries aren&apos;t ready to buy.
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-6">MMC Build is different.</p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We&apos;re building Australia&apos;s first AI-powered Modern Methods of
            Construction (MMC) ecosystem that connects builders, developers, architects,
            engineers, certifiers and consultants directly with verified suppliers and
            trades &mdash; when they&apos;re actively working on a real project.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                Why Suppliers Are Joining MMC Build
              </h2>
              <div className="space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-7 w-7 text-green-600" />
                    </div>
                    <p className="text-xl text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-6 border border-blue-100">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center">
                    <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              MMC Trades &amp; Suppliers Directory Pricing
            </h2>
            <p className="text-lg text-slate-600">Choose the plan that best fits your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 border-2 ${
                  plan.popular
                    ? "border-blue-500 bg-blue-50 relative"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular Choice
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-green-600 font-semibold mb-4">{plan.trial}</div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <div className="max-h-[800px] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-slate-900 text-white sticky top-0 z-10">
                    <tr>
                      <th className="text-left py-6 px-6 font-bold text-lg w-1/2">Feature</th>
                      <th className="text-center py-6 px-6 font-bold text-lg w-1/4 border-l border-slate-700">
                        Starter Trades &amp; Suppliers
                      </th>
                      <th className="text-center py-6 px-6 font-bold text-lg w-1/4 border-l border-slate-700">
                        Professional Trades &amp; Suppliers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureSections.map((section) => (
                      <Fragment key={section.title}>
                        <tr className="bg-slate-100">
                          <td
                            colSpan={3}
                            className="py-3 px-6 font-bold text-slate-900 text-sm uppercase tracking-wide"
                          >
                            {section.title}
                          </td>
                        </tr>
                        {section.rows.map((row, idx) => (
                          <tr
                            key={`${section.title}-${idx}`}
                            className="border-t border-slate-200 hover:bg-slate-50"
                          >
                            <td className="py-4 px-6 text-slate-700">{row[0]}</td>
                            {([row[1], row[2]] as boolean[]).map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="py-4 px-6 text-center border-l border-slate-200"
                              >
                                {cell ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                                ) : (
                                  <span className="text-slate-300">—</span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Ready to Join the MMC Directory?
          </h2>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <TradesSupplierForm />
          </div>
        </div>
      </section>
    </div>
  );
}
