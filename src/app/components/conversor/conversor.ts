import { ChangeDetectorRef, Component } from '@angular/core';
import { ConversorService } from '../../servicios/conversor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css',
})
export class Conversor {

  // Acá guardamos el array transformado
  listaMonedas: Array<{ codigo: string, nombre: string }> = [];

  // Variables vinculadas al formulario
  cantidad: number = 1;
  monedaOrigen: string = 'USD';
  monedaDestino: string = 'ARS';
  resultado: number = 0;

  constructor(
    private conversorService: ConversorService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerMondedas();
  }

  obtenerMondedas(){
    this.conversorService.getMonedas().subscribe(
      (result)=>{
        console.log("JSON crudo recibido:", result);
        
        if (result && result.currencies) {
          // Llamamos a nuestro método transformador pasándole el objeto de atributos
          this.listaMonedas = this.convertirObjetoAArray(result.currencies);
          
          console.log("Array de monedas listo para el HTML:", this.listaMonedas);
          this.cdr.detectChanges(); // Forzamos el renderizado inmediato
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  // 🧠 2. MÉTODO APARTE: Transforma el objeto de claves/atributos en un Array iterable
  convertirObjetoAArray(currenciesObj: any): Array<{ codigo: string, nombre: string }> {
    return Object.entries(currenciesObj).map(([key, value]) => {
      return {
        codigo: key,          // Ej: "USD"
        nombre: String(value)   // Ej: "United States Dollar"
      };
    });
  }

  // 🔄 3. Acción del botón para procesar la conversión matemática mas adelante
  convertirMonto() {
    this.conversorService.getConvertir(this.monedaOrigen, this.monedaDestino, this.cantidad).subscribe(
      (result)=>{
        this.resultado = result.result;
        console.log(result)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
