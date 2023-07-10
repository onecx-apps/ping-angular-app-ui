import { createSelector } from '@ngrx/store';
import { EntitySearchViewModel } from './entity-search.viewmodel';
import { featureFeature } from '../../feature.reducers';
import { initialState } from './entity-search.reducer';
import { createChildSelectors } from 'src/app/shared/ngrx.helpers';

export const pageSelectors = createChildSelectors(
  featureFeature.selectEntitySearch,
  initialState
);

export const selectSearchResultsCount = createSelector(
  pageSelectors.selectSearchResults,
  (searchResults) => searchResults.length
);

export const selectEntitySearchViewModel = createSelector(
  pageSelectors.selectButtonClickCount,
  pageSelectors.selectSearchString,
  pageSelectors.selectSearchResults,
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
