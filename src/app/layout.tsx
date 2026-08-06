import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        {/* HubSpot visitor tracking + first-touch campaign capture. This is the
            site the ads point at, so it is the site where attribution begins.
            Renders nothing until NEXT_PUBLIC_HUBSPOT_PORTAL_ID is set. */}
        <HubSpotTracking />
      </body>
    </html>
  );
}
