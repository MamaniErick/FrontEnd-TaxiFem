import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioTextoService {

  constructor(private http: HttpClient){}

  getTranscribir(url:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'speech-to-text-ai.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params:new HttpParams().append("url", url)
    
    }
    return this.http.get('https://speech-to-text-ai.p.rapidapi.com/transcribe', httpOptions)
  }
}
