const CopyPlugin = require('copy-webpack-plugin');

const loadImages = () => {
  return {
    plugins: [
      new CopyPlugin([
        { from: 'node_modules/smtt-ds/dist/smtt-ds/svg', to: 'svg' }
      ])
    ]
  };
};

module.exports = env => {
  return loadImages(env);
};
