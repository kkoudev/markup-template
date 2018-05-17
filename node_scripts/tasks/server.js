/**
 * @file The frontend server settings.
 *
 * @author Koichi Nagaoka
 */

const browserSync = require('browser-sync');
const settings    = require('../settings');

// BrowserSync settings.
const browserSyncSettings = {

  server: {

    // Document root directories.
    baseDir: [
      `${settings.documentRoot}`,
    ],

  },

  // Watch target files.
  files: [
    `${settings.documentRoot}`,
  ],

  // Default launch port number
  port: settings.frontendServerPort,

  // Support https
  https: false,

  // Notify browser-sync
  notify: false,

  // Auto open browser
  open: false,

};

// Launch browser-sync
browserSync(browserSyncSettings);
