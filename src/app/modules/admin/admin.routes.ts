import { Routes } from '@angular/router';
import { UserSearchComponent } from './pages/user-search/user-search.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-search',
    pathMatch: 'full',
  },
  { path: 'user-search', component: UserSearchComponent },
];
