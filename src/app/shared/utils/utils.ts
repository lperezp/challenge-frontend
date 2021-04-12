import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private datePipe: DatePipe) {}
  calculateAverage(list: Client[]): number {
    const listAge = list.map((x) => x.age);
    const average = listAge.reduce((a, b) => a + b, 0) / list.length;
    return average;
  }

  calculateStandardDeviation(list: Client[]): number {
    const listAge = list.map((x) => x.age);
    const average = listAge.reduce((a, b) => a + b, 0) / list.length;
    const listDeviation = listAge.map((x) => Math.pow(x - average, 2));
    const deviation = listDeviation.reduce((a, b) => a + b, 0);
    const standardDeviation = Math.sqrt(deviation / (list.length - 1));
    return standardDeviation;
  }

  calculateHourlyCustomers(list: Client[]): number {
    const date = new Date();
    const hourCurrent = this.datePipe.transform(date, 'd/M/yy H');
    const filter = list.filter(
      (x) => this.datePipe.transform(x.dateRegister, 'd/M/yy H') === hourCurrent
    );
    return filter.length;
  }
}
