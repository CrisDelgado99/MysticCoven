'use strict';
//CARGA DEL DOM
const divBotones = document.querySelector('.listaBotones');
const arrayBotones = Array.from(divBotones.children);
const titulo = document.querySelector('#titulo');
const formulario = document.querySelector('#formulario');
const inputContraseña2 = document.querySelector('#contraseña2');
const main = document.querySelector('.fondoCasita');


//FUNCIONES
const btnApagadoEncendido = function(e){
    const btnClick = e.target;
    arrayBotones.forEach(btn => {
        if(btn.id != btnClick.id){
            btn.classList.remove("btn__clicado");
        }else{
            btn.classList.add("btn__clicado");
            btn.style.disa
        }
    });
};

const cambiarLogReg = function(e){
    const btnClick = e.target;

    if(btnClick.id == "registro"){
        titulo.innerHTML = '<label class="icono">🌙</label> Registro <label class="icono">✨</label>';
        formulario.classList.add("registro");
        //formulario.appendChild(nuevoInput);
        inputContraseña2.style.display = 'block';
    } else {
        titulo.innerHTML = '<label class="icono">🌙</label> Iniciar Sesión <label class="icono">✨</label>';
        formulario.classList.remove("registro");
        inputContraseña2.style.display = 'none';
    }
}

const backgroundZoom = function(e){
    const btnClick = e.target;
    if(btnClick.id == "enviar"){
        //main.style.backgroundSize = '140%';
        main.classList.toggle('zoomed');
    }
}

//ADDEVENTLISTENERS
divBotones.addEventListener('click', btnApagadoEncendido);
divBotones.addEventListener('click', cambiarLogReg);
document.addEventListener('click', backgroundZoom);