// define child rescript
module.exports = config => {
  config.target = 'electron-renderer';
  console.log('config:', config);
  // config.plugins = config.plugins.concat(new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$")));
  return config;
}