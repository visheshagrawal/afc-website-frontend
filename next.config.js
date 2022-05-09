module.exports = {
  async rewrites() {
    return [
      {
        source: '/search/:path*',
        destination: '/search',
      },
    ]
  },
}
