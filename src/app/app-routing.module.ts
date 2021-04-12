import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './core/layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'client',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./modules/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
  {
    path: 'analysis',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./modules/analysis/analysis.module').then(
        (m) => m.AnalysisModule
      ),
  },
  {
    path: '**',
    redirectTo: 'client',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
