import { ChangeDetectorRef, Component } from '@angular/core';
import { RecetasService } from '../../servicios/recetas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css',
})
export class RecetasComponent {

  recetas: any[] = [];
  nombre: string = "";
  texto: string = "";       // Guardará la traducción final
  tituloReceta: string = ""; // Para mostrar qué receta estamos traduciendo en el modal

  constructor(private recetasService: RecetasService,
    private cdr:ChangeDetectorRef
  ){}
  /*
  obtenerRecetas(){
    this.nombre="cake";
    this.recetasService.getRecetas(this.nombre).subscribe(
      (result)=>{
        this.recetas = result;
        console.log(result);
        this.cdr.detectChanges();
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  */
 
  obtenerRecetas(){
    // 🚀 CORRECCIÓN: Validamos que no esté vacío y usamos lo que el usuario escribió
    if (!this.nombre.trim()) return;

    this.recetasService.getRecetas(this.nombre).subscribe(
      (result) => {
        // Dependiendo de la API, si la respuesta es directa o viene en un .results
        this.recetas = Array.isArray(result) ? result : (result.results || []);
        console.log("Recetas recibidas:", result);
        this.cdr.detectChanges();
      },
      (error) => { console.log(error); }
    );
  }

  /*
  obtenerTraduccion(text:string){
    this.texto=text;
    this.recetasService.postTraducir(text).subscribe(
      (result)=>{
        this.texto=result;
        console.log(result);
        this.cdr.detectChanges();
      },
      (error)=>{
        console.log(error);
      }
    )
    this.cdr.detectChanges();
  }*/

  obtenerTraduccion(descripcionIngles: string, nombreReceta: string){
    this.tituloReceta = nombreReceta;
    this.texto = "Traduciendo..."; // Mensaje temporal de carga
    
    this.recetasService.postTraducir(descripcionIngles).subscribe(
      (result) => {
        console.log("Respuesta Traductor:", result);
        // 🚀 CORRECCIÓN: Navegamos la jerarquía del JSON de Deep Translate
        if (result?.data?.translations?.translatedText) {
          this.texto = result.data.translations.translatedText;
        } else if (result?.translatedText) {
          this.texto = result.translatedText;
        } else {
          this.texto = descripcionIngles; // Fallback por si la API cambia
        }
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
        this.texto = "Error al traducir la descripción.";
        this.cdr.detectChanges();
      }
    );
  }
  
   cerrarModal(){
    this.texto="";
    this.nombre="";
    this.recetas=[];
    this.cdr.detectChanges();
  }
}
