import { Entity } from 'src/app/entity/models/entity';

export interface EntitySearchState {
  buttonClickCount: number;
  searchString: string;
  searchResults: Entity[];
}
