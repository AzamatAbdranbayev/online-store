module.exports = {
  reactStrictMode: true,
  env: {
    BACK_HOST: process.env.BACK_HOST,
    BACK_PORT: process.env.BACK_PORT,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      `http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`,
      `https://${process.env.BACK_HOST}:${process.env.BACK_PORT}`,
    ],
  },
};
