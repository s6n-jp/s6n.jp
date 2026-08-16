import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

export default config;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
