import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Entity } from '../models/entity';

@Injectable()
export class EntityService {
  constructor() {}

  search(searchString: string): Observable<Entity[]> {
    let entities: Entity[] = [];
    for (let i = 0; i < Math.ceil(10 / searchString.length); i++) {
      entities.push({ name: searchString + i });
    }
    return of(entities).pipe(delay(Math.random() * 5000));
  }
}
