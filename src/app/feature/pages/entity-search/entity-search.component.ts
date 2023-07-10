import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntitySearchActions } from './entity-search.actions';
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
    //We only want to call the service when inputValue is not empty,
    //but we do not want logic in components we would have to test
    //and maybe the loading is not the only thing that should be done
    //when someone clicks the button. Therefore we never dispatch actions
    //conditionally. The condition will be checked in the effect that is
    //calling the service.
    this.store.dispatch(
      EntitySearchActions.searchClicked({ value: inputValue })
    );
  }
}
