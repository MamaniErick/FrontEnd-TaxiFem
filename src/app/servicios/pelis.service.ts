import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PelisService {

  array2: any[]=[];

  constructor(private http: HttpClient) { }

  getPeliculas(title:string):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params:new HttpParams().append("primaryTitleAutocomplete", title)
    }
    return this.http.get('https://imdb236.p.rapidapi.com/api/imdb/search', httpOptions);
  }

   getDetalles(id:string):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key':'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
    }
    return this.http.get('https://imdb236.p.rapidapi.com/api/imdb/'+id, httpOptions);
  }

  obtenerExtremos(array: any[]) {
    // Validamos primero que el arreglo que llega tenga elementos para evitar que falle
    if (array && array.length > 0) {
      // Reiniciamos el array para que no acumule búsquedas anteriores
      this.array2 = []; 
      
      // Asignamos directamente el primer elemento y el último
      this.array2.push(array[0]);
      this.array2.push(array[array.length - 1]);
    }
    return this.array2;
  }

  obtenerEx():any[]{
    return this.array2;
  }
}
