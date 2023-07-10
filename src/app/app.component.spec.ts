import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AUTH_SERVICE, PortalCoreModule } from '@onecx/portal-integration-angular';
import { KeycloakAuthModule } from '@onecx/keycloak-auth';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceMock } from './shared/auth.service.mock';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        PortalCoreModule.forRoot('ping-angular-app'),
      ],
      declarations: [AppComponent],
      providers: [{ provide: AUTH_SERVICE, useClass: AuthServiceMock }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ping-angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ping-angular-app');
  });
});
