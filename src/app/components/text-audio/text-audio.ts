import { ChangeDetectorRef, Component } from '@angular/core'; // 🚀 Sumamos cdr por las dudas
import { TextAudioService } from '../../servicios/text-audio.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-audio',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-audio.html',
  styleUrl: './text-audio.css',
})
export class TextAudio {

  url: string | undefined;
  msg: string = "";
  lang: string = "Salli";
  source: string = "ttsmp3";

  // 🚀 Agregamos el cdr en el constructor por si la interfaz de Angular demora en reaccionar
  constructor(
    private textAudioService: TextAudioService,
    private cdr: ChangeDetectorRef
  ) {}

  obtener() {
    // Le pasamos tu variable "this.msg" original limpia y cruda
    this.textAudioService.getUrl(this.msg, this.lang, this.source).subscribe(
      (result) => {
        this.url = result.URL;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}