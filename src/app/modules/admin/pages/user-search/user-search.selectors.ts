import { createSelector } from '@ngrx/store';
import { selectAdminFeature } from '../../admin.selectors';
import { UserSearchViewModel } from './user-search.viewmodel';

export const selectUserSearch = createSelector(
  selectAdminFeature,
  (feature) => feature.userSearch
);

export const selectButtonClickCount = createSelector(
  selectUserSearch,
  (userSearch) => userSearch.buttonClickCount
);

export const selectSearchString = createSelector(
  selectUserSearch,
  (userSearch) => userSearch.searchString
);

export const selectSearchResults = createSelector(
  selectUserSearch,
  (userSearch) => userSearch.searchResults
);

export const selectSearchResultsCount = createSelector(
  selectSearchResults,
  (searchResults) => searchResults.length
);

export const selectUserSearchViewModel = createSelector(
  selectButtonClickCount,
  selectSearchString,
  selectSearchResults,
  selectSearchResultsCount,
  (
    buttonClickCount,
    searchString,
    searchResults,
    searchResultsCount
  ): UserSearchViewModel => ({
    count: buttonClickCount,
    search: searchString,
    results: searchResults,
    resultsCount: searchResultsCount,
  })
);
