// This file sets a custom webpack configuration to use your Next.js app
// const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: false,
  swcMinify: true,
  
  optimizeFonts: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig


// module.exports = nextTranslate()
