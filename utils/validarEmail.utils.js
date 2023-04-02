export const validarEmail = (email) => {
  const arroba = email.indexOf('@')
  const punto = email.lastIndexOf('.')

  if (arroba < 1) return false
  if (punto <= arroba + 2) return false
  if (punto === email.length - 1) return false

  return true
}
