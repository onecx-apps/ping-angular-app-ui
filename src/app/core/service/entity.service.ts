import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EntityAPIService, SearchEntityResponse } from '../generated';

@Injectable()
export class EntityService {
  constructor(private entityAPIService: EntityAPIService) {}

  search(searchString: string): Observable<SearchEntityResponse> {
    return this.entityAPIService.search({
      nameFilter: searchString,
      page: 1,
      pageSize: 10,
    });
  }
}
