import { busquedaSecuencial } from '../utils/busquedaSecuencial.utils.js'

const array = [9, 7, 3, 99, 54, 100, 82, 77, 16, 333, 12, 18, 17]
const numeroBuscar = 333
const posicion = busquedaSecuencial(array, numeroBuscar)

if (posicion === -1) {
  console.log('No se encontró el valor')
} else {
  console.log(`Se encontró el valor y está en la posición ${posicion}`)
}
