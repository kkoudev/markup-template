/**
 * @file Build settings of images.
 *
 * @author Koichi Nagaoka
 */

const fs          = require('fs-extra');
const funcs       = require('../utils/functions');
const settings    = require('../settings');


// Watch building
funcs.watchBuildingDiff(
  `${settings.clientRoot}/${settings.imagesDir}`,
  `${settings.clientRoot}/${settings.imagesDir}`,
  `${settings.documentRoot}/${settings.imagesDir}`,
  '**/*',
  (targetFile, outputDir, relativeFilePath, fileExt, resolve, reject) => {

    // copy target file
    fs.copy(targetFile, `${outputDir}/${relativeFilePath}${fileExt}`, (error) => {

      // error occurred?
      if (error) {

        // returns error
        reject(error);

      } else {

        // successful
        resolve();

      }

    });

  }
);
