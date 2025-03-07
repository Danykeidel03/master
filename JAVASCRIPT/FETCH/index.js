// ejercicio 1

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Hubo un problema:', error));


// ejercicio 2

fetch(' https://jsonplaceholder.typicode.com/users/5')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(`El nombre es ${data.name} y el correo es ${data.email}`))
  .catch(error => console.error('Hubo un problema:', error));


//ejercicio 3

fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
  .then(response => {
    return response.json();
  })
  .then(data => data.forEach(element => {
    console.log(element.title);
  }))
  .catch(error => console.error('Hubo un problema:', error));


// ejercicio 4

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();
  })
  .then(
    data => {
      for (let i = 0; i < 6; i++) {
        console.log(data[i].title);
      }
    }
  )
  .catch(error => console.error('Hubo un problema:', error));


//ejercicio 5

fetch('https://jsonplaceholder.typicode.com/comments?postId=4')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(element => {
      console.log(element.email);
    })
  })
  .catch(error => console.error('Hubo un problema:', error));


//ejercicio 6

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(`El nombre es ${data.name} y la ciudad es ${data.address.city} y la compañia es ${data.company.name}`);
  })
  .catch(error => console.error('Hubo un problema:', error));


//ejercicio 7

fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then(response => {
    return response.json();
  })
  .then(data => {
    let contador = 0;
    data.forEach(element => {
      if (element.completed == true) {
        contador++
      }
    });
    console.log(contador)
  })
  .catch(error => console.error('Hubo un problema:', error));



//ejercicio 8

fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = 0; i < 3; i++) {
      console.log(data[i].url);
    }
  })
  .catch(error => console.error('Hubo un problema:', error));


  //ejercicio 9

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  return response.json();
})
.then(data => {
  data.forEach(element => {
    console.log(`${element.name} - Ciudad: ${element.address.city}`);
  });
})
.catch(error => console.error('Hubo un problema:', error));


  //ejercicio 10

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(element => {
      if(element.title.length <= 51){
        console.log(element.title);
      }
    });
  })
  .catch(error => console.error('Hubo un problema:', error));