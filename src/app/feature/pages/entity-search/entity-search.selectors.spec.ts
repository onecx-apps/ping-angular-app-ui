import {
  selectEntitySearchViewModel,
  selectSearchResultsCount,
} from './entity-search.selectors';

describe('Entity search selectors:', () => {
  describe('selectSearchResultsCount', () => {
    it('should return the amount of results', () => {
      expect(selectSearchResultsCount.projector([{ name: '' }])).toEqual(1);
    });

    it('should return 0 when results are not defined', () => {
      expect(selectSearchResultsCount.projector(undefined)).toEqual(0);
    });
  });

  describe('selectEntitySearchViewModel', () => {
    it('should combine the input to be the viewmodel', () => {
      let buttonClickCount = 2;
      let searchString = 'my query';
      let searchResults = [{ name: 'asdf_1' }];
      let searchResultsCount = 1;
      expect(
        selectEntitySearchViewModel.projector(
          buttonClickCount,
          searchString,
          searchResults,
          searchResultsCount
        )
      ).toEqual({
        count: buttonClickCount,
        search: searchString,
        results: searchResults,
        resultsCount: searchResultsCount,
      });
    });
  });
});
