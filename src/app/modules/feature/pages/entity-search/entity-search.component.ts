import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntitySearchActions } from '../../../domain/actions/entity-search.actions';
import { selectEntitySearchViewModel } from './entity-search.selectors';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.scss'],
})
export class EntitySearchComponent {
  JSON = JSON;
  viewModel$ = this.store.select(selectEntitySearchViewModel);

  constructor(private store: Store) {}

  searchClicked(inputValue: string) {
    if (inputValue) {
      this.store.dispatch(
        EntitySearchActions.searchClicked({ value: inputValue })
      );
    }
  }
}
