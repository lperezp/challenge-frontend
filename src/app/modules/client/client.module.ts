import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { ListClientComponent } from './pages/list-client/list-client.component';

@NgModule({
  declarations: [RegisterClientComponent, ListClientComponent],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
})
export class ClientModule {}
