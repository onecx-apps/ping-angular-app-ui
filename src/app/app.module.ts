import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {
  PortalCoreModule,
  APP_CONFIG,
  PortalMessageService,
} from '@onecx/portal-integration-angular';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { BASE_PATH } from './core/generated';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MessageService } from 'primeng/api';
import { KeycloakAuthModule } from '@onecx/keycloak-auth';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LetModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

function initializer(translate: TranslateService): () => Observable<any> {
  return () => {
    translate.addLangs(['en', 'de']);
    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      return translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    } else {
      return translate.use('en');
    }
  };
}

const authModule = KeycloakAuthModule;

@NgModule({
  declarations: [AppComponent],
  imports: [
    authModule,
    CommonModule,
    BrowserModule,
    LetModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    PortalCoreModule.forRoot('ping-angular-app'),
    TranslateModule.forRoot({
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: MessageService, useExisting: PortalMessageService },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [TranslateService],
    },
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
