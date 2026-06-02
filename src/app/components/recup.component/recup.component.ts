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

  aux: string = "";
  array: any[]=[];

  constructor(private recupService: RecupService, private cdr : ChangeDetectorRef){}



  obtener() {
    this.recupService.getTranscribir(this.aux).subscribe(
      (result) => {
        console.log("Resultado de la API:", result);
        this.aux = "";
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clik(){

  }

  
  obtenerTraduccion(descripcionIngles: string){
    
    this.aux = "Traduciendo..."; 
    
    this.recupService.postTraducir(descripcionIngles).subscribe(
      (result) => {
        console.log("Respuesta Traductor:", result);
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
        this.cdr.detectChanges();
      }
    );
  }

  cerrarModal() {
    this.aux = "";
    this.cdr.detectChanges();
  }
}
