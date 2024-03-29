/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: './src/sw.js',
})

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/services',
        permanent: false
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
