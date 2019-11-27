class PersonaES6 {
    constructor(user, edad) {
        this.user = user
        this.edad = edad}
    saludar () {
        console.log(`Hola soy ${this.user}`)
    }
}

const p1 = new PersonaES6('Manuel', 23)
p1.saludar()
p1.altura = 175
console.log(p1)

class AlumnoES6 extends PersonaES6 {
    constructor(user, edad, inscripcion, isAlumno) {
        super(user, edad)
        this.inscripcion = inscripcion
        this.isAlumno = isAlumno
    }
    saludar() {
        super.saludar()
        let fecha = this.inscripcion.toLocaleDateString()
        console.log(`Estoy isncrit@ desde ${fecha}`)
    }
}

const a1 = new AlumnoES6('Elena', 34, new Date(), true) 
delete a1.edad
a1.altura = 170
const a2 = new AlumnoES6('Raul', 24, new Date(), true) 
a1.saludar()

console.log(a1, a2)



