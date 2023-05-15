import { User } from 'src/app/modules/core/models/user';

export interface UserSearchViewModel {
  count: number;
  search: string;
  results: User[];
  resultsCount: number;
}
