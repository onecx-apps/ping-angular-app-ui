import { Entity } from 'src/app/modules/domain/models/entity';

export interface EntitySearchViewModel {
  count: number;
  search: string;
  results: Entity[];
  resultsCount: number;
}
