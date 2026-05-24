import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiEleccionService {

  constructor(private http: HttpClient) { }

  getBase64(text:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'db241b6b7bmsh019c06a40db46cfp1c0838jsn188e70e69af9',
        'x-rapidapi-host': 'qr-generator-api.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
      params:{
        "text":text,
        "foreColor":"#000000",
        "backColor": "#ffffff",
        "pixelsPerModule":"10"
      }
    }
    return this.http.get('https://qr-generator-api.p.rapidapi.com/api/qrcode/generate',httpOptions)
    }
}

