import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { RegisterClientComponent } from './pages/register-client/register-client.component';

@NgModule({
  declarations: [RegisterClientComponent],
  imports: [CommonModule, ClientRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class ClientModule {}
