import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor() {}

  search(searchString: string): Observable<User[]> {
    let users: User[] = [];
    for (let i = 0; i < Math.ceil(10 / searchString.length); i++) {
      users.push({ name: searchString + i });
    }
    return of(users).pipe(delay(Math.random() * 5000));
  }
}
