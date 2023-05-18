import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'feature',
    data: { shouldReuse: true },
    loadChildren: () =>
      import('./modules/feature/feature.module').then(
        (mod) => mod.FeatureModule
      ),
  },
  {
    path: '',
    redirectTo: 'feature',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
