import { Entity } from 'src/app/modules/domain/models/entity';

export interface EntitySearchState {
  buttonClickCount: number;
  searchString: string;
  searchResults: Entity[];
}
