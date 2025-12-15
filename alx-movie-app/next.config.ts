
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: 'public',                   // service worker output folder
  register: true,                   // auto-register service worker
  skipWaiting: true,                // activate new service worker immediately
  disable: process.env.NODE_ENV === 'development', // disable PWA in dev
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // allow movie posters from this domain
  },
};

export default withPWA({
  ...nextConfig,
});