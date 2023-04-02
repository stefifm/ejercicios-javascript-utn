import readlineSync from 'readline-sync'
import { validarEmail } from '../utils/validarEmail.utils.js'

const email = readlineSync.question('Ingrese su email: ')

const isValid = validarEmail(email)

if (isValid) {
  console.log('Email válido')
} else {
  console.log('Email inválido')
}
