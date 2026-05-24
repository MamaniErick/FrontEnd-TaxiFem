import { ChangeDetectorRef, Component } from '@angular/core';
import { TextoAudioService } from '../../servicios/texto-audio-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-texto-audio',
  imports: [CommonModule, FormsModule],
  templateUrl: './texto-audio.html',
  styleUrl: './texto-audio.css',
})
export class TextoAudio {

  texto: string ="";
  objetUrl: any = "";

  constructor(private textoAudioService: TextoAudioService,
    private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef
  ){}

  convertirAudio() {
    this.objetUrl = "";
    this.textoAudioService.convertir(this.texto).subscribe(
      data => {
        console.log("¡Llegaron datos crudos!", data);      
        let objectUrl = URL.createObjectURL(data);
        let safeResource: any = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        this.objetUrl = safeResource.changingThisBreaksApplicationSecurity;
        
        console.log("URL Limpia para el reproductor:", this.objetUrl);
        this.cdr.detectChanges();  
      },
        error => {
          console.log(error)
      }
    );
  }
}
