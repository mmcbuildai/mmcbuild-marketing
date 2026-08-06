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
    ];
  },
};

export default nextConfig;
