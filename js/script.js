const activarHover = (elemento, carpeta) => {
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + 'Hover.png';
}

const desactivarHover = (elemento, carpeta) => {
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + '.png';
}

const cambiarBoton = (boton, array, num) => {
    if(boton.id == 'mas'){
        if(num == array.length){
            if(!boton.classList.contains('inactivo')){
                boton.classList.add('inactivo');
            }
        } else {
            if(boton.classList.contains('inactivo')){
                boton.classList.remove('inactivo');
            }
            
        }
    } else if(boton.id == 'menos'){
        if(num == 1){
            if(!boton.classList.contains('inactivo')){
                boton.classList.add('inactivo');
            }
        } else {
            if(boton.classList.contains('inactivo')){
                boton.classList.remove('inactivo');
            }
        }
    }
}

const dispNoneRecursivo = (elemento) => {
    if (!elemento.classList.contains('displayNone')) {
        elemento.classList.add('displayNone');
    }

    Array.from(elemento.children).forEach(hijo => dispNoneRecursivo(hijo));
}

const quitarDispNoneRecursivo = (elemento) => {
    if (elemento.classList.contains('displayNone')) {
        elemento.classList.remove('displayNone');
    }

    Array.from(elemento.children).forEach(hijo => quitarDispNoneRecursivo(hijo));
}

const inicializarPagina = (num, array) => {
    mostrarBruja(num);
    cambiarBoton(botonMas, array, num);
    cambiarBoton(botonMenos, array, num);
};

export{activarHover, desactivarHover, cambiarBoton, dispNoneRecursivo, quitarDispNoneRecursivo, inicializarPagina};