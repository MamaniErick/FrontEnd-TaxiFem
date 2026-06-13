import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorApi } from '../../servicios/sector-api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Sector } from '../../models/sector';
import { Agente } from '../../models/agente';
import { AgenteApi } from '../../servicios/agente-api';

@Component({
  selector: 'app-sector-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './sector-form.html',
  styleUrl: './sector-form.css',
})
export class SectorForm {

  sector: Sector;
  accion: string ="";
  agentes: Array<Agente>;


  constructor(private activitedRoute: ActivatedRoute, private sectorApi: SectorApi, private agenteApi: AgenteApi,
    private cdr: ChangeDetectorRef,
    private router: Router
  ){
      this.sector = new Sector();
      this.agentes = new Array<Agente>();
      this.cargarAgentes();
  }


  ngOnInit(){
    this.activitedRoute.params.subscribe(params => { 
      let id = params['id'];
      if(id == 0){
        this.accion = "agregar";
      }
      else{
        this.accion = "modificar";
        this.cargarSector(id);
      }  
    })
  }

  cargarSector(id:number){
    this.sectorApi.getSector(id).subscribe(
      (data) => {
        this.sector = data as Sector;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );  
  }

  cargarAgentes(){
    this.agenteApi.getAgentes().subscribe(
      (data) => {
        this.agentes = data as Array<Agente>;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  agregarSector() {
    this.sectorApi.createSector(this.sector).subscribe(
      (data) => {
        if(data.status == "1") {
          console.log("Sector agregado");
          this.router.navigate(['/sector']);
        }
      },
      (error) => {
        console.error("Error al agregar:", error);
      }
    );
  }

  modificarSector(){
    this.sectorApi.updateSector(this.sector).subscribe(
      (data) => {
        if(data.status == "1"){
          console.log("Modificado");
          this.router.navigate(['/sector']);
        }
        else{
          console.log("Error");
        }
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarSector(){}
  seleccionar(){

  }

  seleccionarAgente(agente: Agente){
    this.sector.responsable = agente;
  }
}
