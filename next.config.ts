import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Legal pages live in ONE place: the app.
   *
   * They used to exist in both repos, and they drifted — which is the whole
   * reason this redirect exists rather than a second copy kept in step.
   *
   * On 5 August Karen asked for the terms to cover the free trial, the card,
   * the charge at day 14, and how to cancel. That was written into the app's
   * /terms and never reached this repo, so for two days the site a buyer reads
   * BEFORE paying said only "free trial periods may be offered at our
   * discretion", while the terms they accept AFTER signing up promised an
   * automatic charge. Both were live. Both were "the terms".
   *
   * Mirroring the content here would make that slower, not impossible: two
   * URLs is two documents, two "last updated" dates, and a real question about
   * which one binds someone who read the other. So the marketing site does not
   * host a copy at all — these paths redirect to the canonical page.
   *
   * The app is canonical rather than this site because it holds the version
   * tracking behind the acceptance gate — the mechanism that made every
   * existing user re-accept when the terms changed. That cannot move here
   * without rebuilding it.
   *
   * Trade-off, stated so it is a choice and not an oversight: legal pages
   * conventionally sit on the apex domain, and this sends a reader to a
   * subdomain mid-flow. Same brand, plainly ours, and worth it to make the
   * drift structurally impossible.
   *
   * permanent: true (308) so search engines and any existing inbound links
   * settle on the canonical URL instead of indexing two versions.
   *
   * NOTE: redirects are evaluated BEFORE filesystem routes, so these win even
   * if a /terms or /privacy page is ever re-added here. The old page files were
   * deleted in the same change — a page that cannot render is a page someone
   * will eventually edit and wonder why nothing happened.
   */
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "https://app.mmcbuild.com.au/terms",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "https://app.mmcbuild.com.au/privacy",
        permanent: true,
      },

      /**
       * App routes typed against the brochure domain.
       *
       * The product lives on app.mmcbuild.com.au and the brochure site on
       * mmcbuild.com.au. Every product route therefore 404s here — /dashboard,
       * /billing, /login, /signup and the five modules, all of them.
       *
       * Nothing we publish sends anyone to those addresses: every button in
       * this site already uses an absolute app.mmcbuild.com.au URL. This is for
       * the person who TYPES it, and they have a good reason to. The domain on
       * the advertising is mmcbuild.com.au, and our own Terms of Use tell
       * customers to cancel "from the Billing page in your account" without
       * saying which host that is. Guessing the main domain is the reasonable
       * thing to do, and a 404 is a poor answer to someone trying to cancel.
       *
       * `permanent` deliberately: these paths will never be served here, so
       * search engines should stop indexing them as errors. If a marketing page
       * ever legitimately needs one of these names, this entry has to be removed
       * first — a cached 308 would otherwise mask it.
       *
       * ⚠️ Only routes this site does NOT own. /pricing exists on both and is
       * the marketing one; the module pages here are /mmc-build, /mmc-quote and
       * so on, which is why /build and /quote below are free to redirect.
       */
      ...[
        "login",
        "signup",
        "dashboard",
        "billing",
        "settings",
        "projects",
        "comply",
        "build",
        "quote",
        "direct",
        "train",
      ].map((route) => ({
        source: `/${route}`,
        destination: `https://app.mmcbuild.com.au/${route}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
