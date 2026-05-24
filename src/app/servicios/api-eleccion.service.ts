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
        'x-rapidapi-key': '467348e2a6msh1c4f1879202cacap107aadjsnda74199c8607',
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

