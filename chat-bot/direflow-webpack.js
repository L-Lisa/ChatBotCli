const { webpackConfig } = require('direflow-scripts');

/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
plugins: [
  {
    name: 'styled-components'
  },
]
module.exports = (config, env) => ({
  ...webpackConfig(config, env),
  // Add your own webpack config here (optional)
});
plugins: [
  {
    name: 'styled-components'
  },
]