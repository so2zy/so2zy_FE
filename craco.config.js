const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const cryptoFallback = require.resolve('crypto-browserify');
const streamFallback = require.resolve('stream-browserify');
const utilFallback = require.resolve('util/');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
          return webpackConfig;
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      // resolve.fallback 설정 추가
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: cryptoFallback,
        stream: streamFallback,
        util: utilFallback,
      };

      // tsconfig-paths-webpack-plugin 추가
      webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));

      return webpackConfig;
    },
  },
};
