import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreeGamesService {

  constructor(private http: HttpClient){}

  getGames():Observable<any>{
    let httOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', httOptions);
  }


  getByCategoria(categoria: string):Observable<any>{
    let httOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params : new HttpParams().append("category", categoria),
    }
    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', httOptions);
  }

  getDetalles(id: number):Observable<any>{
    let httOptions ={
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params : new HttpParams().append("id", id),
    }
    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/game', httOptions);
  
  }
}

