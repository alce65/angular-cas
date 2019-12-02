export class TareaModel {
    /* nombre: string;
    isCompleted: boolean;

    constructor(nombre: string, isCompleted: boolean) {
        this.nombre = nombre;
        this.isCompleted = isCompleted;
    } */

    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false) {
    }
}
