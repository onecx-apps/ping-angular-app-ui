import {
  combineReducers,
  createFeature,
} from '@ngrx/store';
import { FeatureState } from './feature.state';
import { entitiesSearchReducer } from './pages/entity-search/entity-search.reducer';

  export const featureFeature = createFeature({
    name: 'feature',
    reducer: combineReducers<FeatureState>({
      entitySearch: entitiesSearchReducer,
    })
  });

  