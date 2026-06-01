import { ChangeDetectorRef, Component } from '@angular/core';
import { FreeGamesService } from '../../servicios/free-games.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-free-games',
  imports: [CommonModule, FormsModule],
  templateUrl: './free-games.component.html',
  styleUrl: './free-games.component.css',
})
export class FreeGamesComponent {

  games: any[] = [];
  gamesCat: any[] = [];
  gamesDetalle: any = null;
  categorias: string[] = [];
  categoriaSeleccionada: string = '';
  idGames: number = 0;
  titulos: string="";

  // En tu componente .ts creás una variable para guardar los dos extremos
  juegosExtremos: any[] = [];


  constructor(
    private freeGamesService: FreeGamesService,
    private cdr: ChangeDetectorRef
  ) {
    this.obtenerGames();
  }

  obtenerGames() {
    this.freeGamesService.getGames().subscribe(
      (result) => {
        this.games = result;
        console.log(this.games);

        this.obtenerCategorias();

        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerCategorias() {
    this.categorias = [...new Set(this.games.map(game => game.genre))];
    console.log(this.categorias);
  }

  obtenerPorCategorias(categoria: string) {
  // 🚀 Convertimos "Action RPG" en "action-rpg"
  // El / /g es una expresión regular que significa "buscar todos los espacios globalmente"
  const categoriaFormateada = categoria.toLowerCase().trim().replace(/ /g, "-");
  
  console.log("Categoría original:", categoria);
  console.log("Categoría formateada para la API:", categoriaFormateada);

  // Enviamos la versión formateada al servicio
  this.freeGamesService.getByCategoria(categoriaFormateada).subscribe(
    (result) => {
      this.gamesCat = result;
      console.log(result);
      this.cdr.detectChanges();
    },
    (error) => {
      console.log(error);
    }
  );
}

  // 2) Modificá la función para guardar el objeto y meter el detector de cambios ADENTRO:
  obtenerDetalles(id: number, titulo: string) {
    this.idGames = id;
    this.titulos = titulo;
    this.gamesDetalle = null; // Limpiamos datos viejos

    this.freeGamesService.getDetalles(id).subscribe(
      (result) => {
        console.log("Datos de la API:", result);
        // Guardamos la propiedad de requerimientos (puede venir un objeto o null)
        this.gamesDetalle = result.minimum_system_requirements;
        
        // 🚀 CLAVE: El detectChanges tiene que ejecutarse CUANDO LLEGAN los datos (adentro del subscribe)
        this.cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cerrarModal(){
    this.titulos="";
    this.idGames=0;
    this.gamesDetalle=[];
    this.cdr.detectChanges();
  }


  calcularExtremos() {
    if (this.gamesCat.length === 0) return;

    // Ordenamos la lista de juegos por fecha de lanzamiento (release_date)
    // Las fechas en esta API vienen como "YYYY-MM-DD", así que se pueden comparar fácilmente
    let juegosOrdenados = [...this.gamesCat].sort((a, b) => {
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
    });

    // El primero es el más viejo, el último es el más nuevo
    let masViejo = juegosOrdenados[0];
    let masNuevo = juegosOrdenados[juegosOrdenados.length - 1];

    this.juegosExtremos = [masViejo, masNuevo];
    this.cdr.detectChanges();
  }
}