import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { CardAverageComponent } from './components/card/card-average/card-average.component';
import { ModalInformationComponent } from './components/modal/modal-information/modal-information.component';

const SHARED_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ChartsModule,
];
const SHARED_COMPONENTS = [ModalInformationComponent, CardAverageComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  providers: [DatePipe],
})
export class SharedModule {}
