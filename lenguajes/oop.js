const obj1 = {
    user: 'Pepe', 
    edad: 23, 
    inscripcion: new Date(), 
    isAlumno: true
}

// Funciones constructoras

function Alumno(user, edad, inscripcion, isAlumno) {
    this.user = user
    this.edad = edad
    this.inscripcion = inscripcion
    this.isAlumno = isAlumno
   /*  this.saludar = function () {
        console.log(`Hola soy ${this.user}`) */
}

Alumno.prototype.saludar = function () {
    console.log(`Hola soy ${this.user}`)
}

// Patrones de invocación de una funcion

function simple() {
    console.log(this)
}

simple()

const obj = {nombre: 'Objeto 1'}
obj.metodo = simple
obj.metodo()

new simple()

const obj2 = new Alumno('Elena', 34, new Date(), true) 
delete obj2.edad
obj2.altura = 170
const obj3 = new Alumno('Raul', 24, new Date(), true) 
console.log(obj1)
console.log(obj2)
console.log(obj3)
obj2.saludar()
obj3.saludar()