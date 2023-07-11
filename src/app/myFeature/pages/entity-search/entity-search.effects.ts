import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, filter, switchMap, map, catchError } from 'rxjs';
import { EntitySearchActions } from './entity-search.actions';
import { EntityService } from '../../../core/service/entity.service';
import { EntityApiActions } from 'src/app/core/actions/entity-api.actions';

@Injectable()
export class EntitySearchEffects {
  searchEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EntitySearchActions.searchClicked),
      // see comment in EntitySearchComponent
      filter((action) => !!action.query),
      // use exhaustMap if you want discard actions that are coming in while the server call is still running
      // use switchMap if you want to cancel calls in progress and only want the result of the last action
      // use mergeMap if you want all results. The calls will run in parallel (then you may need additional
      //    code in the reducer because of the order of the results can be mixed up)
      // use concatMap if you want all results. The calls will run one after an other
      switchMap((action) =>
        this.entityService.search(action.query).pipe(
          map(({ entities }) =>
            EntityApiActions.entitiesReceived({
              entities: entities || [],
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
