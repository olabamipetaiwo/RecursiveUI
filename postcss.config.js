const precss = require('precss')
const autoprefixer = require('autoprefixer')
const cssImport = require('postcss-import')
const createResolver = require('postcss-import-webpack-resolver')
const webpackConfig = require('./webpack.config.js')

module.exports = {
  plugins: [
    cssImport({
      resolve: createResolver({
        alias: webpackConfig.resolve.alias,
        modules: ['src', 'node_modules'],
      }),
    }),
    precss,
    autoprefixer,
  ],
}
