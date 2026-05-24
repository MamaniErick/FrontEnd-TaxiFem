import { Component } from '@angular/core';
import { TextoAudioService } from '../../servicios/texto-audio-service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-texto-audio',
  imports: [CommonModule, FormsModule],
  templateUrl: './texto-audio.html',
  styleUrl: './texto-audio.css',
})
export class TextoAudio {

  texto: string="";
  objetUrl: SafeUrl=" ";

  constructor(private textoAudioService: TextoAudioService,
    private sanitezer: DomSanitizer
  ){}

  convertirTextoAudio(){
    this.objetUrl = "";
   
    this.textoAudioService.postTextAudio(this.texto).subscribe(
      data=>{
        console.log(this.texto)
        let objectUrl= URL.createObjectURL(data);
        this.objetUrl= this.sanitezer.bypassSecurityTrustUrl(objectUrl);
        },
      error=>{
        console.log(error)
      }
    )
  }
}
