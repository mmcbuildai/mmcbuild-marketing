/**
 * Trades & Suppliers pricing visibility gate.
 *
 * The supplier tiers are NOT in Go Live 1 (Dennis, 2026-07-31). Nothing on the
 * Verified Suppliers / Growth Partner tiers can currently be bought: the
 * application reads no supplier Stripe price ID at all, so every figure on this
 * page is a quote we cannot yet honour — including the $250 Founder Rate per
 * qualified lead and the "1 month free registration" offer.
 *
 * A public page quoting prices nobody can pay is the problem. The rest of the
 * page is not: it explains the directory, describes both listing levels and
 * what each includes, defines what a Qualified Project Lead is, and carries the
 * form that produces real supplier enquiries. Taking the page down would cost
 * those enquiries in order to remove some numbers.
 *
 * So this gates the price CLAIMS only — figures, billing period, the Founder
 * Rate note and its footnotes, and the free-registration offer. Tier names,
 * descriptions, every feature list, the qualified-lead explainer and the
 * enquiry form all stay. A supplier can still see exactly what they would get
 * and register interest; they simply are not quoted a price yet.
 *
 * DEFAULT = ENABLED. Absent or any value other than the literal string "false"
 * leaves pricing visible, so deploying this changes nothing until the env var
 * is set. To hide it, set
 *   NEXT_PUBLIC_SUPPLIER_PRICING_ENABLED=false
 * in the environment (production + preview) and redeploy.
 *
 * The same flag name gates the equivalent page in mmcbuild-application, so one
 * value set in both Vercel projects keeps the two sites telling the same story.
 * They are separate deployments — setting it in only one is the failure mode.
 *
 * Nothing is deleted. When the supplier tiers are wired to real Stripe prices
 * and ready to sell, flip this back on.
 */
export function isSupplierPricingEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SUPPLIER_PRICING_ENABLED !== "false";
}
