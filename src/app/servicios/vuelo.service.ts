import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  // Datos simulados (Mock Data)
  private vuelosFicticios = [
    { id: 1, aerolinea: 'Aerolíneas Argentinas', destino: 'Madrid', precio: 1200, escalas: [ { aeropuerto: 'San Pablo', espera: '2hs' }, { aeropuerto: 'Lisboa', espera: '1h' } ] },
    { id: 2, aerolinea: 'LATAM', destino: 'Miami', precio: 950, escalas: [] }, // Directo
    { id: 3, aerolinea: 'Iberia', destino: 'Barcelona', precio: 1400, escalas: [ { aeropuerto: 'San Pablo', espera: '3hs' } ] },
    { id: 4, aerolinea: 'Flybondi', destino: 'Río de Janeiro', precio: 450, escalas: [] }, // Directo
    { id: 5, aerolinea: 'Copa Airlines', destino: 'Cancún', precio: 1100, escalas: [ { aeropuerto: 'Panamá', espera: '1.5hs' } ] }
  ];

  getVuelos(): Observable<any[]> {
    return of(this.vuelosFicticios);
  }
}