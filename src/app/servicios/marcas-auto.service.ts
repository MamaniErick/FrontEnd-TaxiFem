import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcasAutoService {

  constructor(private http: HttpClient) { }
  
  getMarcasAuto(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'car-specs.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOptions)
  }
}
