import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/core/models/client.model';

import { ClientService } from './../../../../core/services/client.service';

@Component({
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  listClients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.listClients = data;
      },
    });
  }
}
