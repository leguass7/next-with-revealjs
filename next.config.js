const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins(
  [[withBundleAnalyzer({})], [withImages, { esModule: true, inlineImageLimit: 8192 }]],
  {
    reactStrictMode: false
  }
)
