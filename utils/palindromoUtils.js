export const esPalindromo = (palabra) => {
  const palabraSinEspacios = palabra.replace(/ /g, '')
  const palabraInvertida = palabraSinEspacios.split('').reverse().join('')
  return palabraSinEspacios === palabraInvertida
}
