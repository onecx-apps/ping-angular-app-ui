import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { UserSearchActions } from '../../../core/actions/user-search.actions';
import { UserSearchState } from './user-search.state';
import { UserApiActions } from 'src/app/modules/core/actions/user-api.actions';

const initialState: UserSearchState = {
  buttonClickCount: 0,
  searchString: '',
  searchResults: [],
};

export const userSearchReducer = createReducer(
  initialState,
  on(
    UserSearchActions.searchClicked,
    (state: UserSearchState, { value }): UserSearchState => ({
      ...state,
      searchString: value,
      buttonClickCount: state.buttonClickCount + 1,
      searchResults: [],
    })
  ),
  on(
    UserApiActions.usersReceived,
    (state: UserSearchState, { users, searchString }): UserSearchState => ({
      ...state,
      searchResults: users,
    })
  )
);
