//TIME OUTS

setTimeout(() => {
  console.log("Hola a los 10 segundos");
}, 10000);

setInterval(() => {
  console.log("Hola cada 10 segundos");
}, 10000);

//PROMESAS
//JS ES CONCURRENTE ASINCRONO Y NO BLOQUEANTE

const promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("La peticion ha sido procesada");
  } else {
    resolve("La peticion ha sido rechazada");
  }
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error))
  .finally(() => console.log("Peticion finalizada"));

//FETCH

fetch("https://pokeapi.co/api/v2/type/3", {
  /* cabeceras, protocolos, tipos de peticion */
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Peticion finalizada"));

//async y wait
//esto funciona de forma que si haces una peticion a una api y tarda x tiempo, al ser asincrona espera la respuesta pero el codigo sigue ejcutandose
//EJEMPLO tarda menos un console.log() que una llamada a la api por lo que como es asincrona sigue ejecutandoy y lo siguiente en este caso es el clg
//DE TODO LO QUE HAY AQUI LA RESPUESTA MAS RAPIDA ES LA DEL CLG QUE AL SER ASINCRONA NO TIENE PORQUE SER LA PRIMERA

// TRY CATCH
async function peticion(url) { // ESTO ES UNA PROMESA
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

peticion("https://pokeapi.co/api/v2/type/3") // ESTO ES ASINCRONO
  .then((response) =>
    console.log(response)
  ) // catch
  

console.log('SIGUE LA EJECUCION');
// TRY CATCH

try {
  document, (querySelector("h").style.color = "red");
  console.log("entro en el try");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Finalizado");
}
