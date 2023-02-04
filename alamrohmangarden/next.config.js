/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: './src/sw.js'
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = withPWA(nextConfig)
