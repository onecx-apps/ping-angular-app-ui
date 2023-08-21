import { createReducer, on } from '@ngrx/store';
import { EntitySearchActions } from './entity-search.actions';
import { EntitySearchState, initialState } from './entity-search.state';
import { EntityApiActions } from 'src/app/shared/actions/entity-api.actions';

export const entitiesSearchReducer = createReducer(
  initialState,
  on(
    EntitySearchActions.searchClicked,
    (state: EntitySearchState, { query }): EntitySearchState => ({
      ...state,
      searchString: query,
      buttonClickCount: state.buttonClickCount + 1,
      searchResults: [],
    })
  ),
  on(
    EntityApiActions.entitiesReceived,
    (state: EntitySearchState, { entities }): EntitySearchState => ({
      ...state,
      searchResults: entities,
    })
  )
);
