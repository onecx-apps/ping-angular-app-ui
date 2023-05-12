import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BASE_PATH } from './generated';
import {
  createTranslateLoader,
  MFE_INFO,
  PortalCoreModule,
} from '@onecx/portal-integration-angular';
import { SharedModule } from './shared/shared.module';
import { basePathProvider } from './utils';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortalCoreModule.forMicroFrontend(),
    RouterModule.forChild(routes),
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
