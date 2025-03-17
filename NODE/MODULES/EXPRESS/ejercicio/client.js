//POST

const persona = {
  nombre: "Daniel",
  edad: 20,
  mail: "hola@mail.com",
};

const actualizar = {
  nombre: "Daniel",
  mail: "nuevomail@gmail.com",
};

fetch("http://localhost:3000/api?nombre=Pedro&edad=19")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

fetch("http://localhost:3000/api/Daniel")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

fetch("http://localhost:3000/registro", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(persona),
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });

fetch("http://localhost:3000/actualizar", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(actualizarEliminar),
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });

fetch("http://localhost:3000/eliminar", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ nombre: "Daniel" }),
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => console.log(data.data))
  .catch((error) => console.error("Error:", error));
