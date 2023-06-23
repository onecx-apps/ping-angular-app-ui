import { createActionGroup, props } from '@ngrx/store';
import { Entity } from '../models/entity';

export const EntityApiActions = createActionGroup({
  source: 'EntityApi',
  events: {
    'Entities received': props<{ searchString: string; entities: Entity[] }>(),
    'Entities loading failed': props<{ error: any }>(),
  },
});
