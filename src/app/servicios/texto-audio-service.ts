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
        'x-rapidapi-key': '467348e2a6msh1c4f1879202cacap107aadjsnda74199c8607',
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
