import { routes } from './feature.routes';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { EntitySearchComponent } from './pages/entity-search/entity-search.component';
import { featureFeature } from './feature.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EntitySearchEffects } from './pages/entity-search/entity-search.effects';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [EntitySearchComponent],
  imports: [
    CommonModule,
    LetModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureFeature),
    EffectsModule.forFeature([EntitySearchEffects]),
    CoreModule,
  ],
})
export class FeatureModule {}
