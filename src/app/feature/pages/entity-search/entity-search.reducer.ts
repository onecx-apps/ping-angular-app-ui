import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { EntitySearchActions } from '../../../entity/actions/entity-search.actions';
import { EntitySearchState } from './entity-search.state';
import { EntityApiActions } from 'src/app/entity/actions/entity-api.actions';

const initialState: EntitySearchState = {
  buttonClickCount: 0,
  searchString: '',
  searchResults: [],
};

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
