import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false, // Hides the "Static route" debug overlay
  },
};

export default nextConfig;
