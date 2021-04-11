import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';

const routes: Routes = [
  { path: 'register-client', component: RegisterClientComponent },
  { path: 'list-client', component: ListClientComponent },
  { path: '', redirectTo: 'list-client', pathMatch: 'full' },
  { path: '**', redirectTo: 'list-client', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
