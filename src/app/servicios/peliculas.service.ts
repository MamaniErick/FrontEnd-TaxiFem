import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas():Observable<any> {
    
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '467348e2a6msh1c4f1879202cacap107aadjsnda74199c8607',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }

    return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/', httpOptions);
  }
}
