let btnSearchAll = document.querySelector(".viewAllUsers");
let btnAddByGet = document.querySelector('.addByGet')
let btnSearchById = document.querySelector('.searchById')
let btnAddByPost = document.querySelector('.addByPost')
let btnUpdate = document.querySelector('.update')
let btnDelete = document.querySelector('.delete')
let btnBuscarInfo = document.querySelector('.buscarInfo')

btnBuscarInfo.addEventListener("click", function () {
  valueName = document.querySelector('.nombreSearch').value
  valueEdad = document.querySelector('.edadSearch').value
  valueMail = document.querySelector('.mailSearch').value
  doFetch(`http://localhost:5000/users/search?nombre=${valueName}&edad=${valueEdad}&mail=${valueMail}`,'','GET')
      .then(
        (data) => console.log(data)
      ).catch((error) => console.log(error))
});

btnDelete.addEventListener("click", function () {
  valueID = document.querySelector('#idUserToDelete').value
  doFetch(`http://localhost:5000/users/${valueID}`,'','DELETE')
      .then(
        (data) => console.log(data)
      ).catch((error) => console.log(error))
});

btnUpdate.addEventListener("click", function () {
  valueID = document.querySelector('#idUserToEdit').value
  const persona = {
    mail: document.querySelector('#newMail').value
  };
  doFetch(`http://localhost:5000/users/${valueID}`,persona,'PUT')
      .then(
        (data) => console.log(data)
      ).catch((error) => console.log(error))
});

btnAddByPost.addEventListener("click", function () {
  const persona = {
    nombre: document.querySelector('.addUserPost .nombre').value,
    edad: document.querySelector('.addUserPost .edad').value,
    mail: document.querySelector('.addUserPost .mail').value,
  };
  doFetch(`http://localhost:5000/users/user`,persona,'POST')
      .then(
        (data) => console.log(data)
      ).catch((error) => console.log(error))
});

btnSearchById.addEventListener("click", function () {
  valueID = document.querySelector('#nombreID').value
  doFetch(`http://localhost:5000/users/${valueID}/porfile`,'','GET')
      .then(
        (data) => console.log(data)
      ).catch((error) => console.log(error))
});


btnAddByGet.addEventListener("click", function () {
  valueName = document.querySelector('.addUserGet .nombre').value
  valueEdad = document.querySelector('.addUserGet .edad').value
  valueMail = document.querySelector('.addUserGet .mail').value
  doFetch(`http://localhost:5000/users/new?nombre=${valueName}&edad=${valueEdad}&mail=${valueMail}`,'','GET')
      .then(
        (data) => console.log(data)
      ).catch((error) => console.log(error))
});

btnSearchAll.addEventListener("click", function () {
    doFetch('http://localhost:5000/users','','GET')
        .then(
          (data) => console.log(data.users)
        ).catch((error) => console.log(error))
});

function doFetch(url, body, type) {
  const options = {
    method: type,
    headers: { "Content-type": "application/json" },
  };

  if (type === "POST" || type === "PUT") {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
}
