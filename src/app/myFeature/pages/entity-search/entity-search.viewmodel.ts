import { Entity } from 'src/app/core/generated';

export interface EntitySearchViewModel {
  count: number;
  search: string;
  results: Entity[];
  resultsCount: number;
}
