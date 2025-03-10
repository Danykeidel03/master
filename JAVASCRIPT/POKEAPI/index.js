async function peticion(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function mostrarError(txt) {
    let divError = crearElemento('div', txt, 'errorPokemon');
    document.querySelector('main').appendChild(divError)
    setTimeout(() => {
        document.querySelector('.errorPokemon').remove()
    }, 4000);
}

function mostrarEnTable() {
    let tablaBody = document.querySelector('.datosPokemon tbody')
    tablaBody.textContent = ('')
    let arrayPokemons = (JSON.parse(localStorage.getItem('listaPokemon')));
    arrayPokemons.forEach(poke => {
        let tr = document.createElement('tr');

        let tdFoto = crearElemento('td', '', 'fotoPokemon');
        let imgPoke = document.createElement('img');
        imgPoke.setAttribute('src', poke.foto);
        imgPoke.setAttribute('alt', poke.nombre);
        tdFoto.appendChild(imgPoke);
        tr.appendChild(tdFoto);

        tr.appendChild(crearElemento('td', poke.nombre, 'nombrePokemon'));
        tr.appendChild(crearElemento('td', (poke.peso / 10), 'pesoPokemon'));
        tr.appendChild(crearElemento('td', (poke.altura / 10), 'alturaPokemon'));

        tr.appendChild(crearElemento('td', poke.tipos.map(tipo =>
            tipo.type.name
        ).join(', '), 'pokeTipos'));

        tr.appendChild(crearElemento('td', poke.habilidades.map(habilidad =>
            habilidad.ability.name
        ).join(', '), 'pokeHabilidades'));

        tablaBody.appendChild(tr);
    });
}

function crearElemento(tag, contenido = '', clase = '') {
    let elemento = document.createElement(tag);
    if (contenido) elemento.textContent = contenido;
    if (clase) elemento.classList.add(clase);
    return elemento;
}

document.querySelector('.enviarDatos').addEventListener('click', function () {
    const valorPokemon = document.querySelector('#nombrePokemon').value
    let url = ` https://pokeapi.co/api/v2/pokemon/${valorPokemon}`
    peticion(url)
        .then(data => {
            let objPoke = {
                nombre: data.name,
                habilidades: data.abilities,
                altura: data.height,
                peso: data.weight,
                tipos: data.types,
                foto: data.sprites.front_default
            }
            if (localStorage.getItem('listaPokemon')) {
                let listaAntigua = JSON.parse(localStorage.getItem('listaPokemon'));
                listaAntigua.push(objPoke);
                localStorage.setItem('listaPokemon', JSON.stringify(listaAntigua));
            } else {
                localStorage.setItem('listaPokemon', JSON.stringify([objPoke]));
            }
            mostrarEnTable()
            document.querySelector('.datosPokemon').classList.add('active')
        })
        .catch(error => {
            mostrarError(`Hubo un problema: ${error}`)
        });
})

if (localStorage.getItem('listaPokemon')) {
    mostrarEnTable()
    document.querySelector('.datosPokemon').classList.add('active')
}

document.querySelector('.vaciarTabla').addEventListener('click', function () {
    if (localStorage.getItem('listaPokemon')) {
        document.querySelector('.datosPokemon').textContent = ('')
        localStorage.removeItem('listaPokemon')
        mostrarError(`Tabla Vaciada`)
    } else {
        mostrarError('No hay registros')
    }
})