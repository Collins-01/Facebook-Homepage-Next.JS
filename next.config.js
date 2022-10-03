/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: [
     "images.unsplash.com",
     "imgs.search.brave.com"
    ]
  }
}

module.exports = nextConfig
