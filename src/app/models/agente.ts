export class Agente {
    legajo: number;
    apellido: string;
    nombre: string;
    nro_documento: string;
    estado: boolean;

    constructor(){
        this.legajo = 0;
        this.apellido = "";
        this.nombre = "";
        this.nro_documento = "";
        this.estado = true;
    }
}
