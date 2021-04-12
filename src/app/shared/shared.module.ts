import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalInformationComponent } from './components/modal/modal-information/modal-information.component';

const SHARED_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const SHARED_COMPONENTS = [ModalInformationComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class SharedModule {}
