import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Google Analytics 4 (page views + Google Ads conversion tracking).
 *
 * ⚠️ DELIBERATELY GATED ON `NEXT_PUBLIC_GA_MEASUREMENT_ID`, same reasoning as
 * HubSpotTracking (see hubspot-tracking.tsx): GA4 sets NON-ESSENTIAL tracking
 * cookies and needs the privacy policy to disclose it before it runs in
 * production (the same disclosure gap already outstanding for HubSpot,
 * SCRUM-362). Leaving the variable unset means this renders nothing, so the
 * code can land and be reviewed without turning tracking on. Setting it is a
 * separate, deliberate act — do so only once the privacy policy covers it.
 */

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalyticsTracking() {
  if (!GA_MEASUREMENT_ID) return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
