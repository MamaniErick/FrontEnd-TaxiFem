import { ChangeDetectorRef, Component } from '@angular/core';
import { VueloService } from '../../servicios/vuelo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vuelo.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './vuelo.component.html',
  styleUrl: './vuelo.component.css',
})
export class VueloComponent {

  vuelos: any[] = [];
  cant: number = 0;
  vuelo: any = null;
  cantMenor: number = 0;

  constructor(private vueloService: VueloService, private cdr: ChangeDetectorRef) {}

  obtenerVuelos() {
    this.vueloService.getVuelos().subscribe(
      (result) => {
        // 🚀 CORRECCIÓN: Filtramos los vuelos que sean menores o iguales al presupuesto ingresado
        if (this.cant > 0) {
          this.vuelos = result.filter(v => v.precio <= this.cant);
        } else {
          this.vuelos = result; // Si es 0 o vacío, muestra todos
        }
        console.log("Vuelos filtrados:", this.vuelos);
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  verEscalas(v: any) {
    this.vuelo = v;
    this.cdr.detectChanges();
  }

  cerrarModal() {
    this.vuelo = null;
    this.cdr.detectChanges();
  }

  calcular() {
    if (this.vuelos.length === 0) return;

    // 🚀 CORRECCIÓN: Buscamos el precio MÍNIMO (más económico) cambiando el signo a >
    this.cantMenor = this.vuelos[0].precio;
    for (let i = 0; i < this.vuelos.length; i++) {
      if (this.cantMenor > this.vuelos[i].precio) {
        this.cantMenor = this.vuelos[i].precio;
      }
    }
    this.cdr.detectChanges();
  }
}