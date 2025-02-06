let producto = 'fruta'
let precio = '10'
const arrayFrutas = ['Banana', 'Frutilla', 'Naranja', 'Mango', 'Manzana']


let nombre = "teclab"
let fechanacimeinto = "30/11/20"
let anioInicial = 2020

const USUArio = "joe McMillian"
const SecurityID = "123456"

const pasiseDelSur = ['Argentina', 'Uruguay', 'Brasil', 'Venezuela', 'Chile']

const carrito = [{ codigo: 123, nombre: 'teclado Bluetooth', importe: 15500 },
{ codigo: 234, nombre: 'Mouse Bluetooth', importe: 7800 },
{ codigo: 345, nombre: 'SSD Portatil', importe: 47350 }]

console.log('fede')

console.warn('warda')

console.error('Houston, tenemos un problema')

console.table(arrayFrutas)

console.table(pasiseDelSur)

console.table(carrito)

let valorOfertado = 2500;

switch (valorOfertado) {
    case 1000:
        console.warn("Su oferta es muy baja. Realiza una mejor oferta.");
        break;
    case 2000:
        console.log("Gracias por tu oferta. Puedes retirar el producto hoy mismo.");
        break;
    default:
        console.error("No pudimos interpretar tu oferta. Intenta nuevamente.");
}

