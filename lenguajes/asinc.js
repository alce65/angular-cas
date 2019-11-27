/* console.log(1)
setTimeout(() =>{console.log(2)}, 0)
console.log(3)
setTimeout(() =>{console.log(4)}, 2000)
console.log(5)
console.log(6) */

function algoAsinc(callbak) {
    setTimeout( () => {
        const x = 23
        callbak(x)
    }, 1000)
}

function promesaAsinc() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const n = Math.random()
            if (n > 0.5) {
                resolve('Acierto ' + n)
            } else {
                reject(new Error('Erorr ' + n))
            }
        }, 2000)
    })
}

algoAsinc((z) => {console.log(z)})

promesaAsinc()
.then( (response) => {console.log(response)})
.catch( (error) => {console.log(error.message)})



