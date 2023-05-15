import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { AdminState } from './admin.state';
import { userSearchReducer } from './pages/user-search/user-search.reducer';

export const adminReducers: ActionReducerMap<AdminState> = {
  userSearch: userSearchReducer,
};

export const adminMetaReducers: MetaReducer<AdminState>[] = isDevMode()
  ? []
  : [];
