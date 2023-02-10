/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  swSrc: './src/sw.js',
})

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: false
  }
}

module.exports = withPWA(nextConfig)
