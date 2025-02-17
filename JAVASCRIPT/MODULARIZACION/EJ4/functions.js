let librosDigitales = [];

function agregarLibro(autor, genero, titulo){
    librosDigitales.push({titulo: titulo, genero: genero , autor: autor});
}

function buscarPorAutor(autor){
    return librosDigitales.find((element) => element.autor === autor);
}

function ordenarPorTitulo(titulo){
    return librosDigitales.map((element) => element.titulo === titulo)
}

function buscarGenero(){
    return librosDigitales.map((element) => element.genero === genero)
}

function ordenarLibros(){
    return librosDigitales.sort((a,b) => a.titulo.localeCompare(b.titulo));
}

function filtrarGenero(){
    return librosDigitales.filter((element) => element.genero === genero);
}

module.exports = {agregarLibro,buscarPorAutor,ordenarPorTitulo,buscarGenero,ordenarLibros,filtrarGenero}