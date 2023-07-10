import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

import { Entity, EntityAPIService } from '../generated';

@Injectable()
export class EntityService {
  constructor(private entityAPIService: EntityAPIService) {}

  search(searchString: string): Observable<Entity[]> {
    return this.entityAPIService
      .search({
        nameFilter: searchString,
        page: 1,
        pageSize: 10,
      })
      .pipe(map((response) => response.entities || []));
  }
}
