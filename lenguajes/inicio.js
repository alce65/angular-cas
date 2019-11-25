
console.log('Hola mundo')
// JavaScript (Oracle)
// ECMAScript
// En diciembre 2014 ES6 - ES2015 .... ES6+

// Tipos debiles y dinámicos
let x // undefined
console.log(typeof x)
x = 21 // number
console.log(typeof x)
x = 'Pepe' // string
console.log(typeof x)
x = true // boolean
console.log(typeof x)

const nombre = 'Luis'
// nombre = 'Raul' no es posible

// Objeto Literal - JSON
const obj = {user: 'Carlos', edad: 23, isAlumno: true}
console.log(typeof obj)
// obj.edad = 24 no es posible
console.log(obj)

// Array
const data = [12, 5, 76, 45]
console.log(typeof data)
console.log(data[0])

// Ambito

let interna
{
    let interna = 23
    console.log(interna)
}
console.log(interna)

// FUNCIONES

// declaracion

function suma(a = 0, b = 0) {
    return a + b
}

console.log('Suma', suma(2, 7, 6, 8))

// asignnacion

const resta = function (a = 0, b = 0) {
    return a - b
}

console.log('Resta',resta(7, 6))

console.log('Suma sin paramtros', suma())
console.log('Suma un paramtro', suma(12))

// ES6 funciones arrow (lambdas)

/* const producto = (a = 1, b = 1)  => {
    return a * b
} */

const producto = (a = 1, b = 1)  =>  a * b
console.log('Producto', producto(7, 6))

const cuadrado = a => a*a

/// Rarezas

const render = function (algo) {
    console.log(algo)
}
render.dato = 100

render('Hola')
console.log(render)