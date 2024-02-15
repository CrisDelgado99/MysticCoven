const divElementosMesa = document.querySelector('#mesa');
const btnCerrarSesion = document.querySelector('#btnCerrarSesion');
const modal = document.querySelector('#modal');
const bodyBlur = document.querySelector('.bodyBlur');

//--------------------------------------FUNCIONES-------------------------------------------------------------
const activarHover = (elemento, carpeta) => {
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + 'Hover.png';
}

const mostrarEtiqueta = (elemento) => {
    let idElemento = elemento.id;
    let etiqueta = 'etiqueta' + idElemento.charAt(0).toUpperCase() + idElemento.slice(1);
    const elementoEtiqueta = document.querySelector('#' + etiqueta);

    elementoEtiqueta.classList.remove('displayNone');
}

const esconderEtiqueta = (elemento) =>{
    let idElemento = elemento.id;
    let etiqueta = 'etiqueta' + idElemento.charAt(0).toUpperCase() + idElemento.slice(1);
    const elementoEtiqueta = document.querySelector('#' + etiqueta);

    elementoEtiqueta.classList.add('displayNone');
}
const desactivarHover = (elemento, carpeta) => {
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + '.png';
}

const dispNoneRecursivo = (elemento) => {
    console.log('Hiding element:', elemento);
    
    if (!elemento.classList.contains('displayNone')) {
        elemento.classList.add('displayNone');
        console.log('Added displayNone class to:', elemento);
    }

    Array.from(elemento.children).forEach(hijo => dispNoneRecursivo(hijo));
}

const quitarDispNoneRecursivo = (elemento) => {
    if (elemento.classList.contains('displayNone')) {
        elemento.classList.remove('displayNone');
    }

    Array.from(elemento.children).forEach(hijo => quitarDispNoneRecursivo(hijo));
}

//------------------------------------------EVENT LISTENERS----------------------------------------------------
divElementosMesa.addEventListener('mouseover', e=>{
    let elemento = e.target;
    
    if(elemento.tagName === 'IMG'){
        activarHover(elemento, 'ppal');
        mostrarEtiqueta(elemento);
    }

});

divElementosMesa.addEventListener('mouseout', e=>{
    let elemento = e.target;

    if(elemento.tagName === 'IMG'){
        desactivarHover(elemento, 'ppal');
        esconderEtiqueta(elemento);
    }
});

modal.addEventListener('click', e => {
    let elemento = e.target;
    console.log('click');

    let button = elemento.closest('button');
    
    if (button) {
        console.log('click button');
        if (button.id == 'cerrarModal') {
            dispNoneRecursivo(bodyBlur);
        }

        if (button.id == 'cerrarSesion') {

        }
    }
});

btnCerrarSesion.addEventListener('click', e => {
    quitarDispNoneRecursivo(bodyBlur)
});



