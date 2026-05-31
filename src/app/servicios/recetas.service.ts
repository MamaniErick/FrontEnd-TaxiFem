import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {

  constructor(private http: HttpClient){}

  getRecetas(name: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'low-carb-recipes.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params : new HttpParams().append("name", name)
    }

    return this.http.get('https://low-carb-recipes.p.rapidapi.com/search', httpOptions);
  }

  postTraducir(texto: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    // Armamos el cuerpo como un JSON plano (que es lo que Deep Translate espera habitualmente)
    let body = {
      q: texto,
      source: 'en',
      target: 'es'
    };

    return this.http.post('https://deep-translate1.p.rapidapi.com/language/translate/v2',body, httpOptions)
  }
}
