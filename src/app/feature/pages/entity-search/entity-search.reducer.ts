import { createReducer, on } from '@ngrx/store';
import { EntitySearchActions } from './entity-search.actions';
import { EntitySearchState, initialState } from './entity-search.state';
import { EntityApiActions } from 'src/app/core/actions/entity-api.actions';

export const entitiesSearchReducer = createReducer(
  initialState,
  on(
    EntitySearchActions.searchClicked,
    (state: EntitySearchState, { value }): EntitySearchState => ({
      ...state,
      searchString: value,
      buttonClickCount: state.buttonClickCount + 1,
      searchResults: [],
    })
  ),
  on(
    EntityApiActions.entitiesReceived,
    (
      state: EntitySearchState,
      { entities, searchString }
    ): EntitySearchState => ({
      ...state,
      searchResults: entities,
    })
  )
);
