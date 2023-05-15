import { createActionGroup, props } from '@ngrx/store';

export const UserSearchActions = createActionGroup({
  source: 'UserSearch',
  events: {
    'Search clicked': props<{ value: string }>(),
  },
});
