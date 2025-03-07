function recogerInformacion() {
  let valorNombre = document.querySelector('#nombre').value
  let valorEdad = document.querySelector('#edad').value
  let valorMail = document.querySelector('#mail').value

  if (valorEdad != '' && valorMail != '' && valorNombre != '') {
    let objUser = {
      nombre: valorNombre,
      edad: valorEdad,
      mail: valorMail,
      fechaCreacion: new Date().toLocaleString("es-ES")
    }
    localStorage.setItem('infoUser', JSON.stringify(objUser))
    mostrarOcultar(true)
    mostrarDatos()
    alert('El usuario ha sido creado')
  } else {
    alert('Rellena todo los campos')
  }
}

function mostrarDatos(){
  mostrarOcultar(true)
  let datosUser = JSON.parse(localStorage.getItem('infoUser'));
  const tablaDatos = document.querySelector('.datosUser tbody')
  let trTable = document.createElement('tr')
  crearTableOption(datosUser.nombre, 'name', trTable)
  crearTableOption(datosUser.edad, 'edad', trTable)
  crearTableOption(datosUser.mail, 'mail', trTable)
  tablaDatos.appendChild(trTable)
}

function crearTableOption(value, clase, tr){
  let td = document.createElement('td')
  td.textContent = value
  td.classList.add(clase)
  tr.appendChild(td)
}

function mostrarOcultar(valor){
  if(valor){
    document.querySelector('.datosUser').classList.add('active')
    document.querySelector('.formularioUsuarios').classList.add('disabled')
  }else{
    document.querySelector('.datosUser').classList.remove('active')
    document.querySelector('.formularioUsuarios').classList.remove('disabled')
  }
}

function eliminarDatos(){
  alert('Usuario Eliminado')
  localStorage.removeItem('infoUser')
  mostrarOcultar(false)
}

const buttonDatos = document.querySelector('.enviarDatos');
buttonDatos.addEventListener('click', () => {
  recogerInformacion()
})

const buttonDeleteDatos = document.querySelector('.deleteUser');
buttonDeleteDatos.addEventListener('click', () => {
  eliminarDatos()
})

if (localStorage.getItem('infoUser')) {
  mostrarDatos()
}
