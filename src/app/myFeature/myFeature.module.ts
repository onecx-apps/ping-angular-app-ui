import { routes } from './myFeature.routes';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LetModule } from '@ngrx/component';
import { EntitySearchComponent } from './pages/entity-search/entity-search.component';
import { myFeatureFeature } from './myFeature.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EntitySearchEffects } from './pages/entity-search/entity-search.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EntitySearchComponent],
  imports: [
    CommonModule,
    LetModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(myFeatureFeature),
    EffectsModule.forFeature([EntitySearchEffects]),
    SharedModule,
  ],
})
export class MyFeatureModule {}
