import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/core/models/client.model';
import { UtilService } from 'src/app/shared/utils/utils';

import { ClientService } from './../../../../core/services/client.service';

@Component({
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  listClients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.listClients = data;
        this.listClients.forEach((element) => {
          element.dateDeath = this.utilService.calculateDateDeath(
            element.dateBirth
          );
        });
      },
    });
  }
}
