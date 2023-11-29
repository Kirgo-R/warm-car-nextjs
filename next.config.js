/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '84.201.142.203'
      }
    ]
  }
}

module.exports = nextConfig
