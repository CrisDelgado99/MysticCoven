import { dispNoneRecursivo, quitarDispNoneRecursivo, activarHover, desactivarHover } from "./script.js";

const divElementosMesa = document.querySelector('#mesa');
const btnCerrarSesion = document.querySelector('#btnCerrarSesion');
const modal = document.querySelector('#modal');
const bodyBlur = document.querySelector('.bodyBlur');

//--------------------------------------FUNCIONES-------------------------------------------------------------
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



