/**
 * GST qualifier for displayed prices.
 *
 * Every price MMC Build quotes is GST-EXCLUSIVE — confirmed by Karthik
 * 2026-07-31: Stripe is configured tax-exclusive, so the $49 tier collects
 * $53.90. An unqualified figure is read by a business buyer as the amount that
 * will leave their account, which it is not, so every displayed price carries
 * this suffix.
 *
 * This site is the one prospects actually see — the ads point here — and it had
 * no GST anywhere, while the app had none either until 2026-07-31. Fixing only
 * the app would have left the public prices unqualified, which is the half that
 * matters.
 *
 * Deliberately mirrors `src/lib/stripe/plans.ts` in mmcbuild-application (same
 * constant names, same values). The two codebases are separate deployments, so
 * this cannot be imported; keeping the SHAPE identical is what makes it a lift
 * rather than a rewrite if the pricing surfaces are ever unified.
 *
 * MMC Build sells in AUD to Australian buyers only. If that ever changes, the
 * label must follow the BUYER's jurisdiction — VAT in the UK/EU, sales tax in
 * the US — and this becomes a lookup, not a constant.
 */
export const TAX_QUALIFIER = "+ GST";

/** Page-level disclosure to sit alongside a set of prices. */
export const TAX_DISCLOSURE =
  "All prices are in AUD and exclude GST. GST is calculated and added at checkout.";
