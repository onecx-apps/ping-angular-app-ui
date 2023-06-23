import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { FeatureState } from './feature.state';
import { entitiesSearchReducer } from './pages/entity-search/entity-search.reducer';

export const featureReducers: ActionReducerMap<FeatureState> = {
  entitySearch: entitiesSearchReducer,
};

export const featureMetaReducers: MetaReducer<FeatureState>[] = isDevMode()
  ? []
  : [];
