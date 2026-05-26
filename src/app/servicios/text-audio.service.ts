import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextAudioService {

  constructor(private http: HttpClient){}


  getUrl(msg:string, lang:string, source:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'text-to-speech-neural-google.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    let body = new HttpParams()
      .set('msg', msg)
      .set('lang', lang)
      .set('source', source);
      
    return this.http.post('https://text-to-speech-neural-google.p.rapidapi.com/', body,httpOptions)
  }
}
