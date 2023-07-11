import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'myFeature',
    loadChildren: () =>
      import('./myFeature/myFeature.module').then((mod) => mod.MyFeatureModule),
  },
  {
    path: '',
    redirectTo: 'myFeature',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
