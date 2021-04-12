import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.URL_BASE}getJuices`);
  }

  addClients(payload: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.URL_BASE}addClients`, payload);
  }
}
