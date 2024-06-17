const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'resume',

  exposes: {
    "./Module": "./src/app/app.module.ts",
  },

  shared: {
    ...shareAll({ singleton: false, strictVersion: true, requiredVersion: 'auto' }),
  },

});
