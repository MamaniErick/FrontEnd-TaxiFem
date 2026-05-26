import { ChangeDetectorRef, Component } from '@angular/core';
import { FormulaUnoService } from '../../servicios/formula-uno.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fomula-uno',
  imports: [CommonModule, FormsModule],
  templateUrl: './fomula-uno.html',
  styleUrl: './fomula-uno.css',
})
export class FomulaUno {

  anio: number = 0;
  races: any[] = [];
  idSessions: number = 0;
  sessions: any[] = [];
  constructors: any[] = [];


  constructor(private formulaUnoService: FormulaUnoService,
    private cdr: ChangeDetectorRef
  ) {}

  obtenerCarreras() {
    this.formulaUnoService.getRaces(this.anio).subscribe(
      (result) => {
        console.log("JSON recibido de la API:", result);
        this.races = result.results;
        this.cdr.detectChanges();
        },
      (error) => {
        console.log("Error al obtener las carreras:", error);
      }
    );  
  }

  obtenerSessions(id: number) {
    this.idSessions = id;
    this.formulaUnoService.getSessions(id).subscribe(
      (result) => {
        console.log("JSON recibido de la API:", result);
        this.sessions = result.results.drivers;
        this.cdr.detectChanges();
      },
      (error)=>{
        console.log("Error al obtener las sesiones:", error);
      }
    );
  }

  obtenerConstructor() {
    this.formulaUnoService.getConstructor(this.anio).subscribe(
      (result) => {
        console.log("JSON recibido de la API:", result);
        this.constructors = result.results;
        this.cdr.detectChanges();
        },
      (error) => {
        console.log("Error al obtener las carreras:", error);
      }
    );  
  }

  cerrarModal() {
    this.idSessions=0;
    this.sessions = []
    this.cdr.detectChanges();
  }
}
