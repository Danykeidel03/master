function fusionarObjetos(obj1, obj2) {
  let resultado = {};
  for (let key in obj1) {
    resultado[key] = obj1[key];
  }
  for (let key in obj2) {
    resultado[key] = obj2[key];
  }
  return resultado;
}
console.log(fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }));
