import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { EntityServiceSearchEffect } from './effects/entity-service-search.effect';
import { EntityService } from './services/entity.service';

@NgModule({
  declarations: [],
  imports: [EffectsModule.forRoot([EntityServiceSearchEffect])],
  providers: [EntityService],
})
export class EntityModule {
  constructor(@Optional() @SkipSelf() entityModule: EntityModule) {
    if (entityModule) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
