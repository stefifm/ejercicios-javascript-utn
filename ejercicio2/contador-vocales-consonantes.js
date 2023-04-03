import { contarConsonantes, contarVocales, leerCadena } from '../utils/contadorVocalesConsonantes.utils.js'

const cadena = leerCadena()
if (cadena === '1') {
  console.log('Adios')
}

const vocales = contarVocales(cadena)
const consonantes = contarConsonantes(cadena)

if (cadena.length !== 0) {
  console.log(`La cadena ${cadena} tiene ${vocales} vocales y ${consonantes} consonantes`)
} else {
  console.log('Hubo un error')
}
