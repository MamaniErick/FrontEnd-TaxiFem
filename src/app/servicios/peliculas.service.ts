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
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }

    return this.http.get('https://imdb-top-100-movies.p.rapidapi.com/', httpOptions);
  }
}
