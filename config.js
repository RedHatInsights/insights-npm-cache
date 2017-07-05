/*global module, process, require*/
var path = require('path'),
    homePath = path.normalize(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']);

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
  externalUrl: 'http://localhost:9999',
  remoteUrl: 'https://registry.npmjs.com/',
  port: 9999,
  host: '0.0.0.0',
  proxy: {}
};
