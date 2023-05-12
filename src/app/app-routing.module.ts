import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchRouteReuseStrategy } from './shared/search-route-reuse-strategy.service';

const routes: Routes = [];

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
