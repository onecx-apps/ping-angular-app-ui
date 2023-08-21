import { EntityApiActions } from 'src/app/shared/actions/entity-api.actions';
import { EntitySearchActions } from './entity-search.actions';
import { entitiesSearchReducer } from './entity-search.reducer';
import { EntitySearchState, initialState } from './entity-search.state';

describe('EntitiesSearchReducer', () => {
  describe('on searchClicked action', () => {
    describe('with the initial state', () => {
      it('should store the query, increase button click count', () => {
        let query = 'my query';
        const action = EntitySearchActions.searchClicked({ query });
        const nextState = entitiesSearchReducer(initialState, action);
        expect(nextState).toEqual({
          ...initialState,
          searchString: query,
          buttonClickCount: 1,
          searchResults: [],
        });
        expect(nextState).not.toBe(initialState);
      });
    });

    describe('with the intermediate state', () => {
      const intermediateState: EntitySearchState = {
        buttonClickCount: 11,
        searchResults: [{ name: 'asdf_1' }],
        searchString: 'asdf',
      };

      it('should store the query, increase button click count and clear the results', () => {
        let query = 'my query';
        const action = EntitySearchActions.searchClicked({ query });
        const nextState = entitiesSearchReducer(intermediateState, action);

        expect(nextState).toEqual({
          ...intermediateState,
          searchString: query,
          buttonClickCount: intermediateState.buttonClickCount + 1,
          searchResults: [],
        });
        expect(nextState).not.toBe(intermediateState);
      });
    });
  });

  describe('on entitiesReceived action', () => {
    describe('with the initial state', () => {
      it('should store the results', () => {
        let entities = [{ name: 'blubb_1' }, { name: 'blubb_2' }];
        const action = EntityApiActions.entitiesReceived({
          entities,
        });
        const nextState = entitiesSearchReducer(initialState, action);
        expect(nextState).toEqual({
          ...initialState,
          searchResults: entities,
        });
        expect(nextState).not.toBe(initialState);
      });
    });

    describe('with the intermediate state', () => {
      const intermediateState: EntitySearchState = {
        buttonClickCount: 11,
        searchResults: [{ name: 'asdf_1' }],
        searchString: 'asdf',
      };

      it('should store the results', () => {
        let entities = [{ name: 'blubb_1' }, { name: 'blubb_2' }];
        const action = EntityApiActions.entitiesReceived({
          entities,
        });
        const nextState = entitiesSearchReducer(intermediateState, action);
        expect(nextState).toEqual({
          ...intermediateState,
          searchResults: entities,
        });
        expect(nextState).not.toBe(intermediateState);
      });
    });
  });
});
