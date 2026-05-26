import { ChangeDetectorRef, Component } from '@angular/core';
import { AudioTextoService } from '../../servicios/audio-texto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-texto',
  imports: [CommonModule,FormsModule],
  templateUrl: './audio-texto.html',
  styleUrl: './audio-texto.css',
})
export class AudioTexto {

  url:string ="";
  resultado: string = "";


  constructor(private audio: AudioTextoService,
    private cdr: ChangeDetectorRef
  ) {}

  obtener(){
    this.resultado = "Procesando transcripción..."; // 🚀 Feedback visual para saber que cargando

    this.audio.getTranscribir(this.url).subscribe(
      (result) => {
        console.log("JSON recibido de la API:", result);

        // 🚀 LA SOLUCIÓN: Guardamos el texto del JSON dentro de tu variable local
        if (result && result.chunks && result.chunks[0]) {
          this.resultado = result.chunks[0].text;
        } else if (result && result.text) {
          this.resultado = result.text; // Por si la API devuelve el texto en la raíz
        }
        this.cdr.detectChanges();
        console.log("Texto asignado a resultado:", this.resultado);
        
        // Forzamos a Angular a re-renderizar el div con el nuevo texto
        this.cdr.detectChanges(); 
      },
      (error) => {
        console.log("Error al transcribir:", error);
        this.resultado = "Hubo un error al procesar el audio de la URL.";
        this.cdr.detectChanges();
      }
    )
  }
}


/*
Cómo se muestra en el HTML: Lo enlazás directo a la propiedad nativa de la etiqueta correspondiente usando los corchetes []:

Imágenes: <img [src]="tuVariableUrl" alt="Imagen de la API">

Audios: <audio [src]="tuVariableUrl" controls></audio>

Videos: <video [src]="tuVariableUrl" controls></video>

Documentos (PDF): Un simple botón de descarga: <a [href]="tuVariableUrl" target="_blank">Ver PDF</a>.
*/


/*
let objectUrl = URL.createObjectURL(data); // data es el Blob que llegó

let safeResource = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
this.urlLimpia = safeResource.changingThisBreaksApplicationSecurity;

*/

/*
let blob = new Blob([data], { type: 'application/pdf' });
let downloadUrl = URL.createObjectURL(blob);

let link = document.createElement('a');
link.href = downloadUrl;
link.download = "Reporte-Erick.pdf"; // El nombre que tendrá el archivo en la PC del usuario
link.click(); // Forzamos la descarga automática
*/