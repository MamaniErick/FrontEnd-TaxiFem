import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SectorApi {

  urlHost: string = "http://localhost:3000/";
  urlBase: string = this.urlHost + "api/sector/";
  constructor(private http: HttpClient) { 

  }

  getSectores():Observable<any>{

    let httOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    };
    return this.http.get(this.urlBase, httOptions);
  }

  createSector(sector: any): Observable<any> {
    let httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.urlBase, sector, httOptions);
  }
  
  getSector(id:number):Observable<any>{
    let httOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    };
    return this.http.get(this.urlBase+id, httOptions);
  }

  updateSector(sector:any):Observable<any>{ 
    let httOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.urlBase+sector.id, sector, httOptions);

  }

  deleteSector(id:number):Observable<any>{
    let httOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete(this.urlBase+id, httOptions);
  }
}
