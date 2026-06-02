import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecupService {

  constructor(private http: HttpClient){}

  getTranscribir(url:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '',
        'x-rapidapi-host': '',
        'Content-Type': 'application/json'
      }),
      params:new HttpParams().append("url", url)
    
    }
    return this.http.get('', httpOptions)
  }

  postTraducir(texto: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '',
        'x-rapidapi-host': '',
        'Content-Type': 'application/json'
      })
    }
    let body = {
      q: texto,
      source: '',
      target: ''
    };

    return this.http.post('',body, httpOptions)
  }

}
