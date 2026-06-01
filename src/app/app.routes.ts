import { Routes } from '@angular/router';
import { Home } from './components/home/home'; // 👈 Importamos el nuevo Home
import { Peliculas } from './components/peliculas/peliculas';
import { MarcasAutos } from './components/marcas-autos/marcas-autos';
import { Conversor } from './components/conversor/conversor';
import { TextoAudio } from './components/texto-audio/texto-audio';
import { ApiEleccion } from './components/api-eleccion/api-eleccion';
import { TextAudio } from './components/text-audio/text-audio';
import { AudioTexto } from './components/audio-texto/audio-texto';
import { FomulaUno } from './components/fomula-uno/fomula-uno';
import { Pelis } from './components/pelis/pelis';
import { RecetasComponent } from './components/recetas.component/recetas.component';
import { FreeGamesComponent } from './components/free-games.component/free-games.component';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'peliculas', component: Peliculas },
    { path: 'marcas-autos', component: MarcasAutos },
    { path: 'conversor', component: Conversor },
    { path: 'texto-audio', component: TextoAudio },
    { path: 'api-eleccion', component: ApiEleccion },
    { path: 'texto', component: TextAudio },
    { path: 'carrera', component: FomulaUno},
    { path: 'url', component: AudioTexto },
    { path: 'pelis', component: Pelis },
    { path: 'recetas', component: RecetasComponent },
    { path: 'games', component: FreeGamesComponent },
    { path: '**', redirectTo: '' } 
];