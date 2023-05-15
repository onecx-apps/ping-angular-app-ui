import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSearchActions } from '../../../core/actions/user-search.actions';
import { selectUserSearchViewModel } from './user-search.selectors';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent {
  JSON = JSON;
  viewModel$ = this.store.select(selectUserSearchViewModel);

  constructor(private store: Store) {}

  searchClicked(inputValue: string) {
    this.store.dispatch(UserSearchActions.searchClicked({ value: inputValue }));
  }
}
