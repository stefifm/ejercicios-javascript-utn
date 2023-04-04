import { leerCadena } from '../utils/contadorVocalesConsonantes.utils.js'
import { esPalindromo } from '../utils/palindromoUtils.js'

while (true) {
  const cadena = leerCadena()

  if (cadena === '1') {
    console.log('Adios')
    break
  }

  const isPalindromo = esPalindromo(cadena)

  if (isPalindromo) {
    console.log('La cadena es un palindromo')
  } else {
    console.log('La cadena no es un palindromo')
  }
}
