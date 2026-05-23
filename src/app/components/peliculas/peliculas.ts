import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs'; // 👈 Asegurate de importar esto

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas implements OnInit {
  
  // Cambiamos la lista por un Observable genérico
  peliculas$: Observable<any> | undefined; 

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    // Le asignamos directamente el flujo de datos del servicio
    this.peliculas$ = this.peliculasService.getPeliculas();
  }
}