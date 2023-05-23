// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  skipRemoteConfigLoad: true, // Skip loading env via http call to /env.json in local dev mode
  KEYCLOAK_REALM: 'OneCX',
  KEYCLOAK_URL: 'http://keycloak-app/',
  DISABLE_PERMISSION_CHECK: 'true',
  API_BASE_PATH: './api/your-bff-server-basepath',
  TKIT_PORTAL_ID: 'ADMIN',
  PING_ANGULAR_APP_BACKEND_URL:
    'http://your-bff-server:8080/your-bff-server-rs/',
  KEYCLOAK_CLIENT_ID: 'ping-angular-app-ui',
  TKIT_PORTAL_THEME_SERVER_URL:
    'https://portal-theme-management-onecx.test.1000kit.net',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
