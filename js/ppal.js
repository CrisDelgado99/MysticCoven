const divElementosMesa = document.querySelector('#mesa');
const btnCerrarUsuario = document.querySelector('#btnCerrarUsuario');

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

function activarHover(elemento, carpeta){
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + 'Hover.png';
}

function desactivarHover(elemento, carpeta){
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + '.png';
}

function mostrarEtiqueta(elemento){
    let idElemento = elemento.id;
    let etiqueta = 'etiqueta' + idElemento.charAt(0).toUpperCase() + idElemento.slice(1);
    const elementoEtiqueta = document.querySelector('#' + etiqueta);

    elementoEtiqueta.classList.remove('displayNone');
}

function esconderEtiqueta(elemento){
    let idElemento = elemento.id;
    let etiqueta = 'etiqueta' + idElemento.charAt(0).toUpperCase() + idElemento.slice(1);
    const elementoEtiqueta = document.querySelector('#' + etiqueta);

    elementoEtiqueta.classList.add('displayNone');
}