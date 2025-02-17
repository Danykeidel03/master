let peliculas = [];

export function addPeliculas(obj) {
  peliculas.push[
    { titulo: obj.titulo, duracion: obj.duracion, genero: obj.genero }
  ];
}

export function buscarPeliGenero(genero) {
  return peliculas.filter((peli) => peli.genero === genero);
}


export function obtenerTitulos(){
    let titulos = []
    peliculas.forEach(element => {
        titulos.push(element.titulo)
    });
    return titulos.join(' ,')
}

export function ordenarPorDuracion(){
    return peliculas.sort((a,b) => a.duracion.localeCompare(b.duracion));
}
