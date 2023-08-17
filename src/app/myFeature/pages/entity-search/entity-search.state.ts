import { Entity } from 'src/app/shared/generated';

export interface EntitySearchState {
  buttonClickCount: number;
  searchString: string;
  searchResults: Entity[];
}

export const initialState: EntitySearchState = {
  buttonClickCount: 0,
  searchString: '',
  searchResults: [],
};
