import { combineReducers, createFeature } from '@ngrx/store';
import { MyFeatureState } from './myFeature.state';
import { entitiesSearchReducer } from './pages/entity-search/entity-search.reducer';

export const myFeatureFeature = createFeature({
  name: 'myFeature',
  reducer: combineReducers<MyFeatureState>({
    entitySearch: entitiesSearchReducer,
  }),
});
