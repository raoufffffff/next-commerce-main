import createNextIntlPlugin from 'next-intl/plugin';

// This creates the plugin. It looks for './i18n/request.ts' by default.
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add other config here if needed
};

export default withNextIntl(nextConfig);