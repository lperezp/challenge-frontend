import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisClientComponent } from './pages/analysis-client/analysis-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RangeAgeComponent } from './components/range-age/range-age.component';
import { RegisterByHourComponent } from './components/register-by-hour/register-by-hour.component';

@NgModule({
  declarations: [AnalysisClientComponent, RangeAgeComponent, RegisterByHourComponent],
  imports: [CommonModule, AnalysisRoutingModule, SharedModule],
})
export class AnalysisModule {}
