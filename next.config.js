const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  env: {
    apiUrl: 'http://67de-2405-201-2014-784e-b54f-153f-7692-579a.ngrok.io/api',
  },
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery'
      })
    )
    return config
  }
}
