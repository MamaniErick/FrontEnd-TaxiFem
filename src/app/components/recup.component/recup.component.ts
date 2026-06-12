import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecupService } from '../../servicios/recup.service';

@Component({
  selector: 'app-recup.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './recup.component.html',
  styleUrl: './recup.component.css',
})
export class RecupComponent {

  array: any[]=[];
  anio: number = 0;
  cod: any[]=[];
  codigoPais: string = ""; 
  detalles: any;
  pais= "";

  constructor(private recupService: RecupService, private cdr : ChangeDetectorRef){
    this.obtenerCod();
  }


  obtenerCod() {
    this.recupService.getCod().subscribe(
      (result) => {
        console.log("Resultado de la API:", result);
        this.cod = result;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerDias() {
    this.recupService.getCountry(this.codigoPais, this.anio).subscribe(
      (result) => {
        console.log("Resultado de la API:", result);
        this.array = result;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerDeetalles() {
    this.recupService.getDetail(this.codigoPais).subscribe(
      (result) => {
        console.log("Resultado de la API:", result);
        this.detalles = result;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
