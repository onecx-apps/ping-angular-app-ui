import { Entity } from 'src/app/entity/models/entity';

export interface EntitySearchViewModel {
  count: number;
  search: string;
  results: Entity[];
  resultsCount: number;
}
