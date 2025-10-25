import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

import { env } from "./env.mjs"

const config: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [ // поменять на наш cdn
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 600, // 10 minutes cache
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // Оптимизация для быстрого HMR
    optimizePackageImports: ["@tanstack/react-query", "react-toastify"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://trading-desk.top/:path*',
      },

    ]
  },
}

export default env.ANALYZE ? withBundleAnalyzer({ enabled: env.ANALYZE })(config) : config
