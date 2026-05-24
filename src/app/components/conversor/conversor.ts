import { ChangeDetectorRef, Component } from '@angular/core';
import { ConversorService } from '../../servicios/conversor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css',
})
export class Conversor {
  listaMonedas: Array<{ codigo: string, nombre: string }> = [];
  cantidad: number = 1;
  monedaOrigen: string = 'USD';
  monedaDestino: string = 'ARS';
  resultado: number = 0;

  constructor(
    private conversorService: ConversorService,
    private cdr: ChangeDetectorRef
  ) { 
    this.obtenerMondedas();
  }

  obtenerMondedas(){
    this.conversorService.getMonedas().subscribe(
      (result)=>{
        console.log(result);        
        if (result && result.currencies) {
          this.listaMonedas = this.convertirObjetoAArray(result.currencies);          
          console.log("Lista Monedas:", this.listaMonedas);
          this.cdr.detectChanges();
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  convertirObjetoAArray(currenciesObj: any): Array<{ codigo: string, nombre: string }> {
    return Object.entries(currenciesObj).map(([key, value]) => {
      return {
        codigo: key,          
        nombre: String(value)
      };
    });
  }

  convertirMonto() {
    this.conversorService.getConvertir(this.monedaOrigen, this.monedaDestino, this.cantidad).subscribe(
      (result)=>{
        this.resultado = result.result;
        console.log(result)
        this.cdr.detectChanges();
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
