/** @type {import('next').NextConfig} */
const nextConfig = {

  typescript: { ignoreBuildErrors: false, tsconfigPath: 'tsconfig.json' },
  images: { /* tue config */ },
  modularizeImports: {
    '@mui/icons-material': { transform: '@mui/icons-material/{{member}}' },
    lodash: { transform: 'lodash/{{member}}' },
  },
  turbopack: {
    resolveAlias: {
      '@/*': './*',
    },
  },
}

module.exports = nextConfig