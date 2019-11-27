const data = [12, 4, 6, 23, 17]
const cuadrados = []

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    cuadrados.push(item*item)
}

// ES6
const cuadradosES6 = []
for (const item of data) {
    cuadradosES6.push(item*item)
}

// Funciones de Array ES5.1

const cuadradosF = []
data.forEach(item => {
    cuadradosF.push(item*item)
});

const cuadradosMap = data.map(item => item*item)
const pares = cuadradosMap.filter(item => !(item%2))
const sumaTotal = cuadradosMap.reduce( (a,b) => a+b)

console.log(data)
console.log(cuadrados)
console.log(cuadradosES6)
console.log(cuadradosF)
console.log(cuadradosMap)
console.log(pares)
console.log(sumaTotal)

// Parametros y funciones

function suma(...datos) {
    return datos.reduce( (a,b) => a+b)
}

console.log(suma(2,3,5,7,5,6,3,7,2))

// Clonar arrays y objetos

const obj1 = {user: 'Pepe', edad: 23, fecha: new Date(), clave: {id: 1, depto: 23}}
// const obj2 = obj1
// clonado del objeto
// const obj2 = Object.assign({}, obj1)
// const obj2 = {...obj1}
const obj2 = JSON.parse(JSON.stringify(obj1))
obj2.user = 'Juan'
obj2.clave.depto =  12
obj2.fecha = new Date(obj2.fecha)
console.log(obj1)
console.log(obj2)

const datos1 = [1, 8 , 2, 6, 31, 14, 57, 23]
// const datos2 = datos1
// const datos2 = [...datos1]
const datos2 = datos1.map(item => item)
datos2.sort( (a,b) => a-b )
console.log(datos1)
console.log(datos2)

// Strings

let cadena = "Mala práctica"
cadena = 'Mucho mejor'

// ES6 template string

let tipo = 'template'
let nuevaCadena = `
Soy 
un 
${tipo}`
tipo = 'plantilla'

console.log(nuevaCadena)