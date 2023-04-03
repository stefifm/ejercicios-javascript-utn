export const busquedaSecuencial = (array, valor) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return i
    }
  }

  return -1
}
