import { Routes } from '@angular/router';
import { Home } from './components/home/home'; // 👈 Importamos el nuevo Home
import { Peliculas } from './components/peliculas/peliculas';
import { MarcasAutos } from './components/marcas-autos/marcas-autos';
import { Conversor } from './components/conversor/conversor';
import { TextoAudio } from './components/texto-audio/texto-audio';
import { ApiEleccion } from './components/api-eleccion/api-eleccion';
import { TextAudio } from './components/text-audio/text-audio';
import { AudioTexto } from './components/audio-texto/audio-texto';

export const routes: Routes = [
    { path: '', component: Home }, // 👈 Al entrar a http://localhost:4200/ carga el Home directo
    { path: 'peliculas', component: Peliculas },
    { path: 'marcas-autos', component: MarcasAutos },
    { path: 'conversor', component: Conversor },
    { path: 'texto-audio', component: TextoAudio },
    { path: 'api-eleccion', component: ApiEleccion },
    { path: 'texto', component: TextAudio },
    { path: 'url', component: AudioTexto },
    { path: '**', redirectTo: '' } // 👈 Si escriben cualquier fruta, los manda al Home
];