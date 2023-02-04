/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  swDest: 'src/sw.ts'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = withPWA(nextConfig)
