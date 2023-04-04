export const mayorEdad = (json, edad) => {
  const resultado = json.filter((persona) => {
    return persona.edad >= edad
  })
  return resultado
}
