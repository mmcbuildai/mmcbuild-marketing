import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MMC Build",
    short_name: "MMC Build",
    description:
      "Australia's AI-powered platform for Modern Methods of Construction.",
    start_url: "/",
    display: "standalone",
    background_color: "#19365b",
    theme_color: "#19365b",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
