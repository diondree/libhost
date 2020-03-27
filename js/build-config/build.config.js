const fs = require('fs');
const path = require('path');
const argv = require('yargs').argv;

const componentFiles = fs.readdirSync(path.join(__dirname, '../smtt-ds/svg'));

function bundleImages(distFolder) {
  for (let i = 0; i < componentFiles.length; i++) {
    const image = componentFiles[i];

    if (!fs.existsSync(`${distFolder}/svg`)) {
      fs.mkdirSync(`${distFolder}/svg`);
    }

    // destination folder will be created or overwritten by default.
    fs.copyFile(
      path.join(__dirname, '../smtt-ds/svg', image),
      `${distFolder}/svg/${image}`,
      err => {
        if (err) {
          console.log(`error copying icon ${image} to output folder...`);
          throw err;
        }
      }
    );
  }
}
if (argv.path) {
  bundleImages(argv.path);
}

module.exports = bundleImages;
