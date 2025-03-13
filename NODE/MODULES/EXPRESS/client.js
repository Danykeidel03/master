//POST

const persona = {
  nombre: "Daniel",
  edad: 20,
  mail: "hola@mail.com",
};

fetch("http://localhost:3000/registro", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(persona)
})
.then(response => {
    console.log(response)
    return response.json()
})
.then(data => console.log(data))
.catch(error => {console.error('Error:', error)})