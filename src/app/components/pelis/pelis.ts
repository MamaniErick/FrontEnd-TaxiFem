import { ChangeDetectorRef, Component } from '@angular/core';
import { PelisService } from '../../servicios/pelis.service';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pelis',
  imports: [CommonModule, FormsModule],
  templateUrl: './pelis.html',
  styleUrl: './pelis.css',
})
export class Pelis {

  peli: string="";
  peliculas: any[] = [];
  array2: any[]=[];
  detalles: any = null;
  idPeli: string="";


  constructor(private pelisService: PelisService, private cdr:ChangeDetectorRef){}

  obtenerPeliculas(){
    this.pelisService.getPeliculas(this.peli).subscribe( 
      (result) => {
        this.peliculas = result.results || [];
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  obtenerDetalles(id:string){
    this.idPeli=id;
    this.pelisService.getDetalles(id).subscribe(
      (result) => {
        this.detalles = result;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    )
    this.cdr.detectChanges();
  }

  obtenerExt(){
    this.array2 = this.pelisService.obtenerExtremos(this.peliculas);
    this.cdr.detectChanges();
  }

  cerrarModal(){
    this.idPeli="";
    this.detalles=null;
    this.cdr.detectChanges();
  }
}
