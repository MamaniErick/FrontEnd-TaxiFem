import { ChangeDetectorRef, Component } from '@angular/core';
import { ClimaService } from '../../servicios/clima.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clima.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css',
})
export class ClimaComponent {

  historial: any[] = [];
  ciu: string = "";
  // 🚀 Ahora es un objeto 'any' para guardar TODA la información de la fila seleccionada
  ciudadSeleccionada: any = null; 

  constructor(private climaService: ClimaService, private cdr: ChangeDetectorRef) {}

  obtenerClima() {
    if (!this.ciu.trim()) return; // Evita buscar si el input está vacío

    this.climaService.getClima(this.ciu).subscribe(
      (result) => {
        // 🚀 Agregamos el resultado al array usando .push() para armar el historial sin pisar lo anterior
        this.historial.push(result);
        console.log("Resultado de la API:", result);
        this.ciu = ""; // Limpiamos el input de búsqueda
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // 🚀 Función clave para capturar la fila en la que se hizo clic
  seleccionarCiudad(ciudad: any) {
    this.ciudadSeleccionada = ciudad;
    console.log("Ciudad seleccionada para el modal:", this.ciudadSeleccionada);
    this.cdr.detectChanges();
  }

  cerrarModal() {
    this.ciudadSeleccionada = null;
    this.cdr.detectChanges();
  }
}