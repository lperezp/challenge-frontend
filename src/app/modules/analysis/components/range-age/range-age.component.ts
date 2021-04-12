import { Component, Input, OnChanges } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';

import { Client } from 'src/app/core/models/client.model';
import { UtilService } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-range-age',
  templateUrl: './range-age.component.html',
  styleUrls: ['./range-age.component.scss'],
})
export class RangeAgeComponent implements OnChanges {
  @Input() data: Client[] = [];
  @Input() title = '';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['1-10', '11-18', '19-30', '31-50', '51 a más'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [];

  constructor(private utilService: UtilService) {}

  ngOnChanges(): void {
    this.barChartData = [
      {
        data: this.utilService.calculateRangeAge(this.data),
        label: 'Cantidad de Clientes por Rango de Edades',
      },
    ];
  }
}
