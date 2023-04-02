import readlineSync from 'readline-sync'

export const leerOperador = () => {
  const operadores = '+-*/x'
  let operador = ''
  while (!(operador.length === 1 && operadores.indexOf(operador) > -1)) {
    operador = readlineSync.question('Ingrese un operador (+, -, *, /). Para salir presione x: ')
  }
  return operador
}

export const leerNumero = () => {
  let num
  while (isNaN(num)) {
    num = Number(readlineSync.question('Ingrese un número: '))
  }
  return num
}

export const calcularOperacion = (operador, num1, num2) => {
  let res
  switch (operador) {
    case '+':
      res = num1 + num2
      break
    case '-':
      res = num1 - num2
      break
    case '*':
      res = num1 * num2
      break
    case '/':
      res = num1 / num2
      break
    default:
      console.log('No existe el operador')
  }
  return res
}
