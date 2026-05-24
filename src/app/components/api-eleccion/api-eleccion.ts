import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiEleccionService } from '../../servicios/api-eleccion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-eleccion',
  imports: [CommonModule,FormsModule],
  templateUrl: './api-eleccion.html',
  styleUrl: './api-eleccion.css',
})
export class ApiEleccion {
  texto: string="";
  resultado: string="";

  constructor(private apiEleccionService: ApiEleccionService,
    private cdr: ChangeDetectorRef
  ){}

  obtenerCodigo(){
    if (!this.texto.trim()) return;
    this.resultado = "";
    this.apiEleccionService.getBase64(this.texto).subscribe(
      (result) => {
        console.log("JSON crudo que llegó:", result);
        if (result && result.status === "Success") {
          let rawResult = result.result;
          let base64Limpio = rawResult.replace(/^<img src=['"]/, '').replace(/['"]\s*\/?>$/, '');
          this.resultado = base64Limpio;
          console.log("Base64 extraído:", this.resultado); }
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
