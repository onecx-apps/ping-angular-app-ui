import { createActionGroup, props } from '@ngrx/store';
import { Entity } from '../generated';

export const EntityApiActions = createActionGroup({
  source: 'EntityApi',
  events: {
    'Entities received': props<{ entities: Entity[] }>(),
    'Entities loading failed': props<{ error: any }>(),
  },
});
