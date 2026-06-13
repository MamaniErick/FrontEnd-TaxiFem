import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgenteApi {

  urlHost: string = "http://localhost:3000/";
  urlBase: string = this.urlHost + "api/agente/";

  constructor(private http: HttpClient) { }

  getAgentes(): Observable<any> {
    let httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.urlBase, httOptions);
  }

  getAgente(id: number): Observable<any> {
    let httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.urlBase + id, httOptions);
  }


}
