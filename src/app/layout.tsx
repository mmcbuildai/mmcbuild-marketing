import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import HubSpotTracking from "@/components/analytics/hubspot-tracking";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMC Build — AI-Powered Compliance & Construction Intelligence",
  description:
    "Automated NCC compliance checking, design optimisation, and cost estimation for Australian residential construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        {/* Vercel Web Analytics — privacy-friendly, cookieless page/route metrics.
            No-op outside Vercel; collects no PII (REGULATED posture).

            This was wired into the APPLICATION repo by PR #78 and never here, so
            when analytics was switched on in the Vercel dashboard on 8 August it
            reported nothing from this site: `/_vercel/insights/script.js` 404'd
            and `@vercel/analytics` was not even a dependency. Two sites, two
            repositories — done once and assumed twice.

            This is the site that matters more for the question being asked. It
            is where visitors arrive and decide, so it is the only place that can
            say whether the launch actually brought anyone in. */}
        <Analytics />
        {/* HubSpot visitor tracking + first-touch campaign capture. This is the
            site the ads point at, so it is the site where attribution begins.
            Renders nothing until NEXT_PUBLIC_HUBSPOT_PORTAL_ID is set. */}
        <HubSpotTracking />
      </body>
    </html>
  );
}
