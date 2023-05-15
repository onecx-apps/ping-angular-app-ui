import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BASE_PATH } from './generated';
import {
  createTranslateLoader,
  MFE_INFO,
  PortalCoreModule,
} from '@onecx/portal-integration-angular';
import { basePathProvider } from './utils';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from 'keycloak-angular';
import { reducers, metaReducers } from './app.reducers';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    PortalCoreModule.forMicroFrontend(),
    RouterModule.forChild(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    CoreModule,
    TranslateModule.forRoot({
      extend: true,
      isolate: false,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, MFE_INFO],
      },
    }),
  ],
  exports: [],
  providers: [
    {
      provide: BASE_PATH,
      useFactory: basePathProvider,
      deps: [MFE_INFO],
    },
  ],
})
export class PingAngularAppRemoteModule {}
