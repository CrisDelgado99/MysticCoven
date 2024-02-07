const divContenedorLibros = document.querySelector('#contenedorLibros');

divContenedorLibros.addEventListener('mouseover', e=>{
    let elemento = e.target;
    
    if(elemento.tagName === 'IMG'){
        activarHover(elemento, 'estanteria');
    }
});

divContenedorLibros.addEventListener('mouseout', e=>{
    let elemento = e.target;

    if(elemento.tagName === 'IMG'){

        desactivarHover(elemento, 'estanteria');
    }
});

function activarHover(elemento, carpeta){
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + 'Hover.png';
    elemento.style.zIndex = 30;
}

function desactivarHover(elemento, carpeta){
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + '.png';
    elemento.style.zIndex = 1;
}