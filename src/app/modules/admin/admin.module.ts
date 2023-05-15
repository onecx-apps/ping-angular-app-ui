import { routes } from './admin.routes';
import { adminFeatureKey } from './admin.selectors';
import { adminMetaReducers, adminReducers } from './admin.reducers';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [UserSearchComponent],
  imports: [
    CommonModule,
    LetModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(adminFeatureKey, adminReducers, {
      metaReducers: adminMetaReducers,
    }),
  ],
})
export class AdminModule {}
