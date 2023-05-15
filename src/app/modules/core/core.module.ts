import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { UserServiceSearchEffect } from './effects/user-service-search.effect';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [EffectsModule.forRoot([UserServiceSearchEffect])],
  providers: [UserService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
