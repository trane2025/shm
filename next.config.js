const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCss(withImages(withSass(
  { 
  api: {
    externalResolver: true,
  },
    webpack(config, options) 
    {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000000
          }
        }
      },
      )

      return config
    },

  }
 
)))
