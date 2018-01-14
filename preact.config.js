/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/

const path = require('path');

export default function (config, env, helpers) {
  if (env._.indexOf('watch') > -1) {
    return;
  }
  config.output.publicPath = '/2years/';
  /** you can change config here **/
  if (config.output.path.indexOf('ssr') > -1) {
    config.output.path = path.join(__dirname, '/docs/ssr-build');
  } else {
    config.output.path = path.join(__dirname, '/docs/');    
  }
}