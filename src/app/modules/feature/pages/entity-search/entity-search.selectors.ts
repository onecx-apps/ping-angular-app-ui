import { createSelector } from '@ngrx/store';
import { selectFeature } from '../../feature.selectors';
import { EntitySearchViewModel } from './entity-search.viewmodel';

export const selectEntitySearch = createSelector(
  selectFeature,
  (feature) => feature.entitySearch
);

export const selectButtonClickCount = createSelector(
  selectEntitySearch,
  (entitySearch) => entitySearch.buttonClickCount
);

export const selectSearchString = createSelector(
  selectEntitySearch,
  (entitySearch) => entitySearch.searchString
);

export const selectSearchResults = createSelector(
  selectEntitySearch,
  (entitySearch) => entitySearch.searchResults
);

export const selectSearchResultsCount = createSelector(
  selectSearchResults,
  (searchResults) => searchResults.length
);

export const selectEntitySearchViewModel = createSelector(
  selectButtonClickCount,
  selectSearchString,
  selectSearchResults,
  selectSearchResultsCount,
  (
    buttonClickCount,
    searchString,
    searchResults,
    searchResultsCount
  ): EntitySearchViewModel => ({
    count: buttonClickCount,
    search: searchString,
    results: searchResults,
    resultsCount: searchResultsCount,
  })
);
