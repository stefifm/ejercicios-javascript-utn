import { calcularOperacion, leerNumero, leerOperador } from '../utils/calculadora.utils.js'

while (true) {
  const operador = leerOperador()
  if (operador === 'x') {
    console.log('Adios')
    break
  }

  const num1 = leerNumero()
  const num2 = leerNumero()

  const resultado = calcularOperacion(operador, num1, num2)

  if (resultado !== undefined) {
    console.log(`El resultado entre ${num1} ${operador} ${num2} es ${resultado}`)
  } else {
    console.log('Hubo un error')
  }
}
