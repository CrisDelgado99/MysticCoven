const activarHover = (elemento, carpeta) => {
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + 'Hover.png';
}

const desactivarHover = (elemento, carpeta) => {
    let idElemento = elemento.id;
    elemento.src = './imgs/' + carpeta + '/' + idElemento + '.png';
}

export{activarHover, desactivarHover};