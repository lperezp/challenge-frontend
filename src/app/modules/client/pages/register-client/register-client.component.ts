import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

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
    console.log(this.registerForm.value);
  }
}
