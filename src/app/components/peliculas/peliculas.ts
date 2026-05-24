import { ChangeDetectorRef, Component, } from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas{

  peliculas: any | undefined; 

  constructor(private peliculasService: PeliculasService,
    private cdr: ChangeDetectorRef)
    { this.obtener(); }

  obtener(){
    this.peliculasService.getPeliculas().subscribe(
      (result) => {
        this.peliculas = result;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  obtenerColorGenero(genre: string): string {
  const genero = genre.toLowerCase().trim();

  switch (genero) {
    case 'action':
      return 'bg-danger'; 
    case 'drama':
      return 'bg-primary'; 
    case 'comedy':
      return 'bg-success';
    case 'horror':
      return 'bg-pink text-dark'; 
    case 'sci-fi':
      return 'bg-info text-dark';
    case 'adventure':
      return 'bg-warning text-white';
    default:
      return 'bg-secondary';
  }
}
}