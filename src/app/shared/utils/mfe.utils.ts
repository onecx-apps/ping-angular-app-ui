import { MfeInfo } from '@onecx/portal-integration-angular';

export const basePathProvider = (mfeInfo: MfeInfo) => {
  console.log(`Base path provider ${mfeInfo?.remoteBaseUrl}`);
  return mfeInfo
    ? mfeInfo.remoteBaseUrl + 'ping-angular-app-api'
    : './ping-angular-app-api';
};
