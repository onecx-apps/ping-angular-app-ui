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
import { UserApiActions } from '../actions/user-api.actions';
import { UserSearchActions } from '../actions/user-search.actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserServiceSearchEffect {
  searchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserSearchActions.searchClicked),
      // use exhaustMap if you want discard actions that are coming in while the server call is still running
      // use switchMap if you want to cancel calls in progress and only want the result of the last action
      // use mergeMap if you want all results (then you may need additional code in the reducer because of
      // the order of the results can be mixed up)
      switchMap((action) =>
        this.userService.search(action.value).pipe(
          map((users) =>
            UserApiActions.usersReceived({
              searchString: action.value,
              users,
            })
          ),
          catchError((error) =>
            of(UserApiActions.usersLoadingFailed({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
