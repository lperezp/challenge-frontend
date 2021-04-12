import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisClientComponent } from './pages/analysis-client/analysis-client.component';

const routes: Routes = [{ path: '', component: AnalysisClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {}
