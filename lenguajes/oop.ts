interface SerVivo {
    especie: string;
}

class PersonaTS implements SerVivo {
    /* user: string;
    edad: number;
    constructor(user, edad) {
        this.user = user;
        this.edad = edad;
    } */
    constructor(
        public especie: string,
        public user: string,
        public edad: number) {}

    saludar() {
        console.log(`Hola soy ${this.user}`);
    }
}


const p1 = new PersonaTS('humano', 'Manuel', 23);
p1.saludar();
// p1.altura = 175 Error en TS
console.log(p1);

class AlumnoES6 extends PersonaTS {
    inscripcion: Date;
    isAlumno: boolean;
    constructor(especie, user, edad, inscripcion, isAlumno) {
        super(especie, user, edad);
        this.inscripcion = inscripcion;
        this.isAlumno = isAlumno;
    }
    saludar() {
        super.saludar();
        const fecha = this.inscripcion.toLocaleDateString();
        console.log(`Estoy isncrit@ desde ${fecha}`);
    }
}

const a1 = new AlumnoES6('humano', 'Elena', 34, new Date(), true); 
delete a1.edad;
console.log(a1.edad)
// a1.altura = 170;Error en TS
const a2 = new AlumnoES6('humano', 'Raul', 24, new Date(), true); 
a1.saludar();

console.log(a1, a2);

let felix: SerVivo;
felix = {especie: 'gato'};

let p6: PersonaTS;
p6 = new PersonaTS('humano', 'Luis', 41);
let p7: PersonaTS;
p7 = {especie: '', user: '', edad: 0, saludar: () => {}};




