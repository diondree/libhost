const CopyPlugin = require('copy-webpack-plugin');

const loadImages = () => {
  return { plugins: [new CopyPlugin([{ from: 'node_modules/pegasus-core/dist/pegasus-core/svg', to: 'svg' }])] };
};

module.exports = env => {
  return loadImages(env);
};
