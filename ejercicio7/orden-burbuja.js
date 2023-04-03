import readlineSync from 'readline-sync'
import { bubbleSort } from '../utils/ordenBurbuja.utils.js'

const array = []

const cantidadNumeros = readlineSync.questionInt('¿Cuántos números desea ingresar?: ')
for (let i = 0; i < cantidadNumeros; i++) {
  const numeroIngresado = readlineSync.questionInt('Ingrese un número: ')
  array.push(numeroIngresado)
}

const nuevoArray = bubbleSort(array)

console.log('La lista ordenada es: ', nuevoArray)
