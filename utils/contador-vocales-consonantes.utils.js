import readlineSync from 'readline-sync'

export const leerCadena = () => {
  let cadena = ''
  while (cadena.length === 0) {
    cadena = readlineSync.question('Ingrese una cadena de texto. Presione 1 para salir: ')
  }
  return cadena
}

export const contarVocales = (cadena) => {
  let contador = 0
  const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ'
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.indexOf(cadena[i]) > -1) {
      contador++
    }
  }
  return contador
}

export const contarConsonantes = (cadena) => {
  let contador = 0
  const consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
  for (let i = 0; i < cadena.length; i++) {
    if (consonantes.indexOf(cadena[i]) > -1) {
      contador++
    }
  }
  return contador
}
