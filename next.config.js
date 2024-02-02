const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  //nextConfig,
  //webpack5: true,
  webpack: (nextConfig) => {
    nextConfig.resolve.fallback = { 
      //reactStrictMode: true,
      fs: false,
      //timers: false,
      //process: false,
    };

    return nextConfig;
  },
  
  //nextConfig,
  i18n,
  reactStrictMode: true,
})