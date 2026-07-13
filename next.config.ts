import type { NextConfig } from 'next';

// Static export: Vercel deploys the generated `out` folder without a server.
const nextConfig: NextConfig = { output: 'export', trailingSlash: true };
export default nextConfig;
