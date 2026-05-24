import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextoAudioService {

  constructor(private http: HttpClient) { }

  convertir(text:string):Observable<Blob>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json' 
      }),
      responseType: 'blob' as 'blob',
    };
    let body= {
      "model": "tts-1",
	    "input": text,
	    "instructions": "Tono normal",
	    "voice": "alloy"
    };
    return this.http.post("https://open-ai-text-to-speech1.p.rapidapi.com/",body, httpOptions);
  }
}
