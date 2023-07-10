import { Entity } from 'src/app/core/generated';

export interface EntitySearchState {
  buttonClickCount: number;
  searchString: string;
  searchResults: Entity[];
}
