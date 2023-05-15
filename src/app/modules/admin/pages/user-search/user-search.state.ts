import { User } from 'src/app/modules/core/models/user';

export interface UserSearchState {
  buttonClickCount: number;
  searchString: string;
  searchResults: User[];
}
