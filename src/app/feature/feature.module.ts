import { routes } from './feature.routes';
import { featureKey } from './feature.selectors';
import { featureMetaReducers, featureReducers } from './feature.reducers';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { EntitySearchComponent } from './pages/entity-search/entity-search.component';

@NgModule({
  declarations: [EntitySearchComponent],
  imports: [
    CommonModule,
    LetModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureKey, featureReducers, {
      metaReducers: featureMetaReducers,
    }),
  ],
})
export class FeatureModule {}
