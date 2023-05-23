import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { State } from './app.state';

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
