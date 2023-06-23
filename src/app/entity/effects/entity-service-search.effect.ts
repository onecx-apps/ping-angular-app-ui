import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  tap,
  switchMap,
  mergeMap,
} from 'rxjs/operators';
import { EntityApiActions } from '../actions/entity-api.actions';
import { EntitySearchActions } from '../actions/entity-search.actions';
import { EntityService } from '../services/entity.service';

@Injectable()
export class EntityServiceSearchEffect {
  searchEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EntitySearchActions.searchClicked),
      // use exhaustMap if you want discard actions that are coming in while the server call is still running
      // use switchMap if you want to cancel calls in progress and only want the result of the last action
      // use mergeMap if you want all results (then you may need additional code in the reducer because of
      // the order of the results can be mixed up)
      switchMap((action) =>
        this.entityService.search(action.value).pipe(
          map((entities) =>
            EntityApiActions.entitiesReceived({
              searchString: action.value,
              entities,
            })
          ),
          catchError((error) =>
            of(EntityApiActions.entitiesLoadingFailed({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private entityService: EntityService
  ) {}
}
