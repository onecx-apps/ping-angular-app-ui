import { createActionGroup, props } from '@ngrx/store';

export const EntitySearchActions = createActionGroup({
  source: 'EntitySearch',
  events: {
    'Search clicked': props<{ value: string }>(),
  },
});
