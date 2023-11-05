/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["cdn.imagin.studio"],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
