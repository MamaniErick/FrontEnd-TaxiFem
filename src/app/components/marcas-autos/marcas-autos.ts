import { ChangeDetectorRef, Component } from '@angular/core';
import { MarcasAutoService } from '../../servicios/marcas-auto.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-marcas-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marcas-autos.html',
  styleUrl: './marcas-autos.css',
})
export class MarcasAutos {

  marcasAuto: Array<any> = [];

  constructor(private marcasAutoService: MarcasAutoService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
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
}
