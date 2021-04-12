import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ClientService } from 'src/app/core/services/client.service';

import { ModalService } from './../../../../shared/services/modal.service';
import { AppSettings } from './../../../../shared/app.settings';

@Component({
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss'],
})
export class RegisterClientComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    dateBirth: ['', [Validators.required]],
    age: ['', [Validators.required]],
  });

  dateCurrent = new Date();
  maxDate = '';
  messageModal = '';
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private clientService: ClientService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.maxDate =
      this.datePipe.transform(this.dateCurrent, 'yyyy-mm-dd') || '';
  }

  getAge(): void {
    const dateBirth = new Date(this.registerForm.controls.dateBirth.value);
    const age = Math.floor(
      (Number(this.dateCurrent) - Number(dateBirth)) / 31557600000
    );
    this.registerForm.controls.age.setValue(age);
  }

  registerClient(): void {
    try {
      this.clientService.addClients(this.registerForm.value).subscribe({
        next: (data) => {
          this.modalService.isShow = true;
          this.messageModal = AppSettings.TEXT_MESSAGE.MESSAGE_SUCCESS;
          this.registerForm.reset();
        },
      });
    } catch (error) {
      this.modalService.isShow = true;
      this.messageModal = AppSettings.TEXT_MESSAGE.MESSAGE_ERROR;
    }
  }
}
