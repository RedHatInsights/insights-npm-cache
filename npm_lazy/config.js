/*global module, process, require*/
const homePath = '/var/cache/npmcache';

module.exports = {
  loggingOpts: {
    logRequesterIP: true,
    logToConsole: true,
    logToFile: true,
    filename: homePath + '/npm_lazy.log'
  },

  cacheDirectory: homePath + '/cache',
  cacheAge: 0,
  httpTimeout: 1 * 1000,
  maxRetries: 5,
  rejectUnauthorized: true,

  // external url to npm_lazy, no trailing /
  externalUrl: process.env.EXTERNAL_URL,
  remoteUrl: 'https://registry.npmjs.com/',
  port: 9999,
  host: '0.0.0.0',
  proxy: {}
};
