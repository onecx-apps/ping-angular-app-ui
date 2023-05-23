const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const config = withModuleFederationPlugin({
  name: 'ping-angular-app',
  filename: 'remoteEntry.js',
  exposes: {
    './PingAngularAppRemoteModule':
      './src/app/ping-angular-app-remote.module.ts',
  },
  shared: share({
    '@angular/core': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    },
    '@angular/forms': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: true,
      eager: false,
    },
    '@angular/common': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: {
        skip: ['@angular/common/http/testing'],
      },
    },
    '@angular/common/http': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@angular/router': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    rxjs: {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@onecx/portal-integration-angular': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@onecx/keycloak-auth': {
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      includeSecondaries: true,
    },
    '@ngx-translate/core': {
      singleton: true,
      strictVersion: false,
      requiredVersion: '^14.0.0',
    },
  }),

  sharedMappings: ['@onecx/portal-integration-angular'],
});

module.exports = config;
