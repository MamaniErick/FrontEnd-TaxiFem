import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormulaUnoService {

  constructor(private http: HttpClient) { }


  getRaces(anio:number):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
    }
    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/races/'+anio, httpOptions)
  }

  getSessions(id:number):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
    }
    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/session/'+id, httpOptions)
  }

  getConstructor(anio:number):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
    }
    return this.http.get('https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings/'+anio, httpOptions)
  }
}
