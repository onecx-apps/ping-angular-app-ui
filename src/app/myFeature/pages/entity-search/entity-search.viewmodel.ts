import { Entity } from 'src/app/shared/generated';

export interface EntitySearchViewModel {
  count: number;
  search: string;
  results: Entity[];
  resultsCount: number;
}
