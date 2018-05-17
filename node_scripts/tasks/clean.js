/**
 * @file Clean document root directory.
 *
 * @author Koichi Nagaoka
 */

const fs        = require('fs-extra');
const settings  = require('../settings');

// Removes document root dir.
fs.emptyDir(settings.documentRoot);
