import { Routes } from '@angular/router';
import { Peliculas } from './components/peliculas/peliculas';
import { MarcasAutos } from './components/marcas-autos/marcas-autos';
import { Conversor } from './components/conversor/conversor';
import { TextoAudio } from './components/texto-audio/texto-audio';
import { ApiEleccion } from './components/api-eleccion/api-eleccion';


export const routes: Routes = [
    { path: 'peliculas', component: Peliculas },
    { path: 'marcas-autos', component: MarcasAutos },
    { path: 'conversor', component: Conversor },
    { path: 'texto-audio', component: TextoAudio },
    { path: 'api-eleccion', component: ApiEleccion },
    { path: '', redirectTo: '/peliculas', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/peliculas' }
];
