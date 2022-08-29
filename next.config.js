/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const { createFalse } = require("typescript");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["dummyjson.com"],
  },
};

module.exports = withVanillaExtract(nextConfig);
