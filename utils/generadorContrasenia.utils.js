export const generarContrasenia = (longitud) => {
  let contrasenia = ''
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < longitud; i++) {
    contrasenia += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
  }
  return contrasenia
}
