import { createSelector } from '@ngrx/store';
import { EntitySearchViewModel } from './entity-search.viewmodel';
import { myFeatureFeature } from '../../myFeature.reducers';
import { createChildSelectors } from 'src/app/shared/utils/ngrx.helpers';
import { initialState } from './entity-search.state';

export const pageSelectors = createChildSelectors(
  myFeatureFeature.selectEntitySearch,
  initialState
);

export const selectSearchResultsCount = createSelector(
  pageSelectors.selectSearchResults,
  (searchResults) => searchResults?.length || 0
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
