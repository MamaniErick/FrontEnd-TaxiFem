import { ChangeDetectorRef, Component } from '@angular/core';
import { MarcasAutoService } from '../../servicios/marcas-auto.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-marcas-autos',
  imports: [CommonModule],
  templateUrl: './marcas-autos.html',
  styleUrl: './marcas-autos.css',
})
export class MarcasAutos {

  marcasAuto: Array<any> = [];
  modelos: Array<any> = [];

  marcaSeleccionadaName: string = '';
  cacheModelos: { [key: number]: Array<any> } = {};

  constructor(private marcasAutoService: MarcasAutoService,
    private cdr: ChangeDetectorRef) { 
      this.obtenerMarcasAuto();
    }

  obtenerMarcasAuto() {
    this.marcasAutoService.getMarcasAuto().subscribe(
      (result)=>{
        this.marcasAuto = result,
        console.log(result),
        this.cdr.detectChanges();
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  obtenerModelos(id: number, name: string) {
    this.marcaSeleccionadaName = name;
    if (this.cacheModelos[id]) {
      console.log(`Cargando modelos de ${name} desde la cache, 0 transacciones consumidas`);
      this.modelos = this.cacheModelos[id];
      this.cdr.detectChanges();
    } else {
        console.log(`Consultando los modelos de ${name}`);
        this.marcasAutoService.getModelosId(id).subscribe(
        (result)=>{
          this.modelos = result;
          this.cacheModelos[id] = result;
          console.log(`Modelos guardados en cache de ${name}:`, result);
          this.cdr.detectChanges();},
        (error)=>{
          console.log(error)
        }
      )
    }
  }

  cerrarModal() {
    this.marcaSeleccionadaName = '';
    this.modelos = [];
    this.cdr.detectChanges();
  }
}
