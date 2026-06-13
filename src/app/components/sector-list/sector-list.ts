import { ChangeDetectorRef, Component } from '@angular/core';
import { Sector } from '../../models/sector';
import { SectorApi } from '../../servicios/sector-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-list',
  imports: [ CommonModule, FormsModule],
  templateUrl: './sector-list.html',
  styleUrl: './sector-list.css',
})
export class SectorList {

  sectores: Array<Sector>;

  constructor(private sectorApi: SectorApi, private cdr : ChangeDetectorRef,
    private router: Router
  ){
    this.sectores = new Array<Sector>();
    this.getSelection();
  }

  getSelection(){
    this.sectorApi.getSectores().subscribe(
      (data) => {
        this.sectores = data as Array<Sector>;
        console.log(this.sectores);
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarSector(sector: Sector){
    this.sectorApi.deleteSector(sector.id).subscribe(
      (data) => {
        if(data.status == "1"){
          console.log("Eliminado");
          this.getSelection();
          this.cdr.detectChanges();
        }
        else{
          console.log("Error");
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  editarSector(sector: Sector){
    this.router.navigate(['/sector-form', sector.id]);
  }

  agregarSector(){
    this.router.navigate(['/sector-form', 0]);
  }
}
