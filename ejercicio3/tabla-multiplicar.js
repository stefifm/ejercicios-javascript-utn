import { leerNumero } from '../utils/calculadora.utils.js'
import { calcularMultiplicacion } from '../utils/tabla.utils.js'

while (true) {
  console.log('Tabla de multiplicar\n')
  console.log('Si ingresa 0 se termina el programa\n')

  const num = leerNumero()

  if (num === 0) {
    console.log('Adiós')
    break
  }

  console.log(`Tabla del ${num}`)
  calcularMultiplicacion(num)
}
