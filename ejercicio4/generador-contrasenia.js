import readlineSync from 'readline-sync'
import { generarContrasenia } from '../utils/generadorContrasenia.utils.js'

const longitud = Number(readlineSync.questionInt('Ingrese la longitud de la contraseña: '))
const contrasenia = generarContrasenia(longitud)
console.log(`La contraseña generada es: ${contrasenia}`)
