import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecupService {

  constructor(private http: HttpClient){}

   getCod():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'public-holidays7.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    
    }
    return this.http.get('https://public-holidays7.p.rapidapi.com/codes', httpOptions)
  }

  getCountry(cod:string, anio:number):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'public-holidays7.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('https://public-holidays7.p.rapidapi.com/'+anio+'/'+cod, httpOptions)
  }


  getDetail(cod:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('https://wft-geo-db.p.rapidapi.com/v1/geo/countries/'+cod, httpOptions)
  }

}
