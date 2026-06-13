import {Agente} from './agente'

export class Sector {
    id: number;
    nombre: string;
    funcion: string;
    responsable: Agente;

    constructor(){
        this.id = 0;
        this.nombre = "";
        this.funcion = "";
        this.responsable = new Agente();
    }

}
