import { Component, Input, OnChanges } from '@angular/core';

import { ChartDataSets } from 'chart.js';

import { Color, Label } from 'ng2-charts';

import { UtilService } from 'src/app/shared/utils/utils';
import { Client } from 'src/app/core/models/client.model';
import { AppSettings } from 'src/app/shared/app.settings';

@Component({
  selector: 'app-register-by-hour',
  templateUrl: './register-by-hour.component.html',
  styleUrls: ['./register-by-hour.component.scss'],
})
export class RegisterByHourComponent implements OnChanges {
  @Input() data: Client[] = [];
  @Input() title = '';
  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = AppSettings.HOURS;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(249, 53, 73,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private utilService: UtilService) {}

  ngOnChanges(): void {
    this.lineChartData = [
      {
        data: this.utilService.calculateAgeByHour(this.data),
        label: this.title,
      },
    ];
  }
}
