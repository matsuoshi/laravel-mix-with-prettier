require('dotenv').config();
let mix = require('laravel-mix');
let webpackConfig = require('./webpack.config.js');

mix
  .webpackConfig(webpackConfig)
  .js('src/scripts/app.js', 'assets/js')
  .sass('src/styles/main.scss', 'assets/css')
  .sourceMaps()
  .browserSync({
    startPath: '/tipsnote',
    files: ['assets/**/*', '**/*.php'],
    proxy: process.env.BROWSERSYNC_PROXY_URL || 'local.dev'
  });
