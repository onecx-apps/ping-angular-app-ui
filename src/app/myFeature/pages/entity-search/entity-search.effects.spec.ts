import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { EntitySearchEffects } from './entity-search.effects';
import { SearchEntityResponse } from 'src/app/shared/generated';
import { TestBed } from '@angular/core/testing';
import { EntityService } from 'src/app/shared/services/entity.service';
import { EntitySearchActions } from './entity-search.actions';
import { EntityApiActions } from 'src/app/shared/actions/entity-api.actions';

describe('EntitySearchEffects:', () => {
  let actions$ = new Observable<Action>();
  let effects: EntitySearchEffects;
  const mockedEntityService = jasmine.createSpyObj('EntityService', ['search']);
  const mockSuccessSearchResponse: SearchEntityResponse = {
    entities: [{ name: 'asdf_1' }],
  };
  const mockEmptySearchResponse = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [],
        }),
        EntitySearchEffects,
        { provide: EntityService, useValue: mockedEntityService },
      ],
    });
    effects = TestBed.inject(EntitySearchEffects);
    mockedEntityService.search.calls.reset();
  });

  describe('EntitySearchActions.searchClicked', () => {
    it('should dispatch EntityApiActions.entitiesReceived with the results', () => {
      actions$ = hot('-a', {
        a: EntitySearchActions.searchClicked({ query: 'my query' }),
      });

      mockedEntityService.search.and.returnValue(
        cold('--a', { a: mockSuccessSearchResponse })
      );

      const expected = hot('---a', {
        a: EntityApiActions.entitiesReceived({
          entities: [{ name: 'asdf_1' }],
        }),
      });
      expect(effects.searchEntities$).toBeObservable(expected);
    });

    it('should dispatch EntityApiActions.entitiesReceived with empty results when response is empty', () => {
      actions$ = hot('-a', {
        a: EntitySearchActions.searchClicked({ query: 'my query' }),
      });

      mockedEntityService.search.and.returnValue(
        cold('--a', { a: mockEmptySearchResponse })
      );

      const expected = hot('---a', {
        a: EntityApiActions.entitiesReceived({
          entities: [],
        }),
      });
      expect(effects.searchEntities$).toBeObservable(expected);
    });

    it('should not call the service when query is empty', () => {
      actions$ = hot('-a', {
        a: EntitySearchActions.searchClicked({ query: '' }),
      });

      const expected = hot('---');
      expect(effects.searchEntities$).toBeObservable(expected);
      expect(mockedEntityService.search).not.toHaveBeenCalled();
    });

    it('should dispatch EntityApiActions.entitiesLoadingFailed when there is an error calling the service', () => {
      actions$ = hot('-a', {
        a: EntitySearchActions.searchClicked({ query: 'my query' }),
      });

      mockedEntityService.search.and.returnValue(cold('--#'));

      const expected = hot('---a', {
        a: EntityApiActions.entitiesLoadingFailed({
          error: 'error',
        }),
      });
      expect(effects.searchEntities$).toBeObservable(expected);
    });
  });
});
