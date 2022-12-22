/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
require('dotenv').config()
const webpack = require('webpack')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  experimental: { esmExternals: true },
}
module.exports = nextConfig
