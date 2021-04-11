import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientComponent } from './pages/register-client/register-client.component';

const routes: Routes = [
  { path: 'register-client', component: RegisterClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
