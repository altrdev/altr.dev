/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false, tsconfigPath: 'tsconfig.json' },
  images: { /* tue config */ },
  modularizeImports: {
    '@mui/icons-material': { transform: '@mui/icons-material/{{member}}' },
    lodash: { transform: 'lodash/{{member}}' },
  },
  experimental: {
    // RIMUOVI rules e loaders da turbo
    turbo: {
    //   loaders: { '.js': { loader: 'tsx' } },  // OK
      // rules: { '*.js': { loader: 'tsx' } },  // RIMUOVI QUESTA
    },
    // altre experimental
  },
  // Fallback webpack se turbo fallisce:
  webpack: (config) => config,  // Placeholder
}

module.exports = nextConfig