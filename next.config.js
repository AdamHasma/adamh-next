/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const nextComposePlugins = require('next-compose-plugins') 
const { withPlugins } = nextComposePlugins.extend(() => ({}))
const withVideos = require('next-videos');

module.exports = withPlugins([
  [withVideos]
], nextConfig);

