function activarHover(elemento, carpeta){
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + 'Hover.png';
}

function desactivarHover(elemento, carpeta){
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + '.png';
}
function cambiarAlturaElemento(elemento, porcentajeACambiar){
    let alturaActual = (elemento.clientHeight / elemento.parentElement.clientHeight) * 100;
    let nuevaAltura = alturaActual + porcentajeACambiar;
    elemento.style.height = nuevaAltura + '%'
}

export{activarHover, desactivarHover};