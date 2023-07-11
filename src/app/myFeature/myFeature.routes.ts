import { Routes } from '@angular/router';
import { EntitySearchComponent } from './pages/entity-search/entity-search.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'entity-search',
    pathMatch: 'full',
  },
  { path: 'entity-search', component: EntitySearchComponent },
];
