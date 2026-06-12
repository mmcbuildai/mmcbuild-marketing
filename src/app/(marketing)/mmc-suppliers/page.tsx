import { Fragment } from "react";
import type { Metadata } from "next";
import { CheckCircle2, Users, Award, TrendingUp, Shield } from "lucide-react";
import TradesSupplierForm from "@/components/marketing/trades-supplier-form";
import LeadFlowGraphic from "@/components/marketing/lead-flow-graphic";

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
  description: string;
  price: string;
  period: string;
  priceNote?: string;
  includesLabel: string;
  features: string[];
  footnote?: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Verified Directory Supplier",
    description:
      "Ideal for suppliers who want visibility within Australia's growing MMC ecosystem.",
    price: "$299",
    period: "/month",
    includesLabel: "Includes:",
    features: [
      "Verified supplier profile",
      "Company listing within MMC Directory",
      "Product and service categories",
      "Contact details and website links",
      "National visibility to builders, developers, architects and consultants",
      "Access to Australia's growing MMC ecosystem",
      "1 month free registration",
    ],
    footnote:
      "Your business can be discovered through directory searches and supplier profiles, but does not receive direct lead referrals.",
  },
  {
    name: "Growth Partner",
    description:
      "Designed for suppliers who want to actively generate project opportunities.",
    price: "$299",
    period: "/month",
    priceNote: "Plus $250 Founder Rate* Per Qualified Project Lead**",
    popular: true,
    includesLabel: "Includes everything in Verified Directory, plus:",
    features: [
      "AI-powered supplier recommendations",
      "Qualified lead referrals",
      "Priority supplier positioning",
      "Project enquiry notifications",
      "Daily lead reporting",
      "Access to project opportunities generated through MMC Build",
    ],
  },
];

type FeatureRow = [string, boolean, boolean];
// Columns: [Verified Directory Supplier, Growth Partner].
// Growth Partner includes everything in Verified Directory, plus the
// lead-generation layer, so every Verified feature is true in both columns.
const featureSections: { title: string; rows: FeatureRow[] }[] = [
  {
    title: "Directory Listing & Visibility",
    rows: [
      ["Verified supplier profile", true, true],
      ["ABN & licence verification", true, true],
      ["Company listing in MMC Directory", true, true],
      ["Product & service categories", true, true],
      ["MMC capability tagging", true, true],
      ["Contact details & website links", true, true],
      ["Directory search discoverability", true, true],
      [
        "National visibility to builders, developers, architects & consultants",
        true,
        true,
      ],
    ],
  },
  {
    title: "Lead Generation & Referrals",
    rows: [
      ["AI-powered supplier recommendations", false, true],
      ["Qualified lead referrals", false, true],
      ["Project enquiry notifications", false, true],
      ["Receive project invitations", false, true],
      ["Respond to tenders via platform", false, true],
      ["Profile visibility to active project owners", false, true],
      ["Access to project opportunities generated through MMC Build", false, true],
      ["Priority supplier positioning", false, true],
    ],
  },
  {
    title: "Reporting & Insights",
    rows: [["Daily lead reporting", false, true]],
  },
  {
    title: "Enterprise Controls",
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
  {
    title: "Onboarding & Offers",
    rows: [["1 month free registration", true, true]],
  },
];

const stats = [
  { icon: Users, label: "Verified Professionals", value: "500+" },
  { icon: TrendingUp, label: "Active Projects", value: "1,200+" },
  { icon: Shield, label: "Quality Assured", value: "100%" },
  { icon: Award, label: "Client Satisfaction", value: "4.8/5" },
];

const qualifiedLeadIncludes = [
  "Named project contact",
  "Phone and email details",
  "Active project enquiry",
  "User selection of your company or products within MMC Build",
  "Project plans, quote request or supporting documentation where available",
];

const foundingSupplierBenefits = [
  "Founding Supplier status",
  "Priority positioning within the platform",
  "Early access to project opportunities",
  "Enhanced supplier visibility",
  "Access to future supplier features and programs",
];

export default function MMCSuppliersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#0f172a] text-white overflow-hidden py-24">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-6 backdrop-blur-sm">
            <Award className="h-4 w-4 mr-2" />
            Verified MMC Professionals
          </div>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-6xl mb-6">
            Turn your products &amp; services into Qualified leads
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300">
            Australia&apos;s first AI-enabled MMC Marketplace.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
                Why MMC Build
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 text-balance">
                Stop paying for leads that go nowhere
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed text-pretty">
                Most suppliers and trades spend thousands every month on marketing,
                directories, Google Ads, industry events, sponsorships, and sales teams
                &mdash; hoping the right builder or architect finds them.
              </p>
              <p className="mt-8 text-xl font-semibold text-slate-900">
                The problem?{" "}
                <span className="font-normal text-slate-600">
                  Most enquiries aren&apos;t ready to buy.
                </span>
              </p>
              <p className="mt-10 text-2xl sm:text-3xl font-bold text-blue-600">
                MMC Build is different.
              </p>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed text-pretty">
                We&apos;re building Australia&apos;s first AI-powered Modern Methods of
                Construction (MMC) ecosystem that connects builders, developers, architects,
                engineers, certifiers and consultants directly with verified suppliers and
                trades &mdash; when they&apos;re actively working on a real project.
              </p>
            </div>
            <div>
              <LeadFlowGraphic />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
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
                    <p className="text-lg sm:text-xl text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-6 sm:p-8 border border-blue-100">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-5 text-center">
                    <stat.icon className="h-7 w-7 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              MMC Trades &amp; Suppliers Directory Pricing
            </h2>
            <p className="text-lg text-slate-600">Choose the plan that best fits your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 sm:p-10 border-2 ${
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-base text-slate-600 mb-4 min-h-[2.5rem]">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-1">{plan.period}</span>
                  </div>
                  {plan.priceNote && (
                    <p className="mt-2 text-sm font-semibold text-blue-600">
                      {plan.priceNote}
                    </p>
                  )}
                </div>

                <p className="font-semibold text-slate-900 mb-3">{plan.includesLabel}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.footnote && (
                  <p className="text-sm text-slate-500 italic border-t border-slate-200 pt-4">
                    {plan.footnote}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 space-y-2 text-sm text-slate-500">
            <p>
              <span className="font-semibold text-slate-600">*</span> Founder Rate
              is a limited-time introductory rate for early Growth Partner members.
            </p>
            <p>
              <span className="font-semibold text-slate-600">**</span> Payment is
              due only when a qualified lead is verified by the Growth Partner.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 grid lg:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                What Is A Qualified Project Lead?
              </h3>
              <p className="text-slate-600 mb-4">A Qualified Project Lead includes:</p>
              <ul className="space-y-3 mb-6">
                {qualifiedLeadIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Founding Supplier Offer
              </h3>
              <p className="text-slate-600 mb-3">
                To support the launch of MMC Build, Founding Suppliers will receive a
                special lead referral rate of $250 per Qualified Project Lead.
              </p>
              <p className="text-slate-600 mb-5">
                As the platform grows and project volumes increase, lead pricing may
                increase for future suppliers.
              </p>
              <p className="font-semibold text-slate-900 mb-3">
                Early adopters will secure:
              </p>
              <ul className="space-y-3 mb-6">
                {foundingSupplierBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-blue-700">
                Limited positions available before public launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
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
                        Verified Directory Supplier
                      </th>
                      <th className="text-center py-6 px-6 font-bold text-lg w-1/4 border-l border-slate-700">
                        Growth Partner
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

      <section className="py-16 bg-white">
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
