import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';
import { AppSettings } from 'src/app/shared/app.settings';
import { ModalService } from 'src/app/shared/services/modal.service';

import { UtilService } from './../../../../shared/utils/utils';

@Component({
  templateUrl: './analysis-client.component.html',
  styleUrls: ['./analysis-client.component.scss'],
})
export class AnalysisClientComponent implements OnInit {
  titleTotalCustomers = 'Total de Clientes';
  titleAverage = 'Promedio edad entre todos los clientes';
  titleStandardDeviation =
    'Desviación estándar entre las edades de todos los clientes';
  titleHourlyCustomers = 'Total de Clientes por Hora';
  totalCustomers = 0;
  hourlyCustomers = 0;
  average = 0;
  standardDeviation = 0;
  listClients: Client[] = [];
  messageModal = '';
  rangeAge: number[] = [];

  constructor(
    private clientService: ClientService,
    private modalService: ModalService,
    private utilService: UtilService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.listClients = await this.clientService.getClients().toPromise();
      this.totalCustomers = this.listClients.length;
      this.average = this.utilService.calculateAverage(this.listClients);
      this.standardDeviation = this.utilService.calculateStandardDeviation(
        this.listClients
      );
      this.hourlyCustomers = this.utilService.calculateHourlyCustomers(
        this.listClients
      );
      this.rangeAge = this.utilService.calculateRangeAge(this.listClients);
    } catch (error) {
      this.modalService.isShow = true;
      this.messageModal = AppSettings.TEXT_MESSAGE.MESSAGE_ERROR;
    }
  }
}
