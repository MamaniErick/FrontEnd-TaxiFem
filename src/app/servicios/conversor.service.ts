import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  getMonedas():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'apikey':'p5TO26s3ceq03jeVMF93DB6AHeLStlo1'
        })
      }
    return this.http.get('https://api.apilayer.com/currency_data/list', httpOption)
  }

  getConvertir(from:string, to:string, amount:number):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'apikey':'p5TO26s3ceq03jeVMF93DB6AHeLStlo1'
        }),
      params:new HttpParams().append("to", to ).append("from", from).append("amount", amount)
    }
    return this.http.get('https://api.apilayer.com/currency_data/convert', httpOption);  
  }
}
