import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisClientComponent } from './pages/analysis-client/analysis-client.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AnalysisClientComponent],
  imports: [CommonModule, AnalysisRoutingModule, SharedModule],
})
export class AnalysisModule {}
