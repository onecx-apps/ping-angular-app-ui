import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchRouteReuseStrategy } from './shared/search-route-reuse-strategy.service';

const routes: Routes = [
  {
    path: 'admin',
    data: { shouldReuse: true },
    loadChildren: () =>
      import('./modules/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: SearchRouteReuseStrategy,
    },
  ],
})
export class AppRoutingModule {}
