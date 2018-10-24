import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SeorankService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:64034/api/website';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf=-8' });
  }

  public send(payload) {
    let response = this.http.post(this.accessPointUrl + '/rank', payload, {headers: this.headers});
    return response;
  }
}
