import { createActionGroup, props } from '@ngrx/store';
import { User } from '../models/user';

export const UserApiActions = createActionGroup({
  source: 'UserApi',
  events: {
    'Users received': props<{ searchString: string; users: User[] }>(),
    'Users loading failed': props<{ error: any }>(),
  },
});
