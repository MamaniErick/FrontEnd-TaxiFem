import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {

  constructor(private http: HttpClient){}

  getClima(ciudad:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params:new HttpParams().append("q",ciudad).append("days",3)
    
    }
    return this.http.get('https://weatherapi-com.p.rapidapi.com/forecast.json', httpOptions)
  }
  
}
