import readlineSync from 'readline-sync'
import { mayorEdad } from '../utils/filtarJson.utils.js'
import fs from 'fs'
const resultado = JSON.parse(fs.readFileSync('./personas.json', 'utf-8'))

while (true) {
  const edad = readlineSync.question('Ingrese una edad. Pulse x para salir: ')
  if (edad === 'x') {
    console.log('Adios')
    break
  }
  const busqueda = mayorEdad(resultado.personas, edad)
  console.log(busqueda)
}
