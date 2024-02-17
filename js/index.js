'use strict';

import { dispNoneRecursivo } from "./script.js";

//CARGA DEL DOM
const divBotones = document.querySelector('.listaBotones');
const arrayBotones = Array.from(divBotones.children);
const titulo = document.querySelector('#titulo');
const formulario = document.querySelector('#formulario');
const inputUsuario = document.querySelector('#usuario');
const inputPass1 = document.querySelector('#pass1');
const inputPass2 = document.querySelector('#pass2');
const main = document.querySelector('.fondoCasita');
const logReg = document.querySelector('.logReg');
const enviar = document.querySelector('#enviar');
const mensajeError = document.querySelector('#mensajeError');

//VARIABLES
let arrUsuarios = [];


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
        inputUsuario.classList.add("registro");
        //formulario.appendChild(nuevoInput);
        inputPass2.style.display = 'block';
    } else {
        titulo.innerHTML = '<label class="icono">🌙</label> Iniciar Sesión <label class="icono">✨</label>';
        inputUsuario.classList.remove("registro");
        inputPass2.style.display = 'none';
    }
}

const backgroundZoom = function(e){
    const btnClick = e.target;
    if(btnClick.id == "enviar"){
        //main.style.backgroundSize = '140%';
        main.classList.toggle('zoomed');
        dispNoneRecursivo(logReg);

        setTimeout(
            function() {
                window.location.replace('./ppal.html');
            }, 2000);
    }
}

const crearUsuario = (nombre, pass1, pass2) => {
    if(arrUsuarios.some(usuario => usuario.nombre === nombre)){

    }
}

const comprobarUsuario = (nombre, pass1) => {
    if(arrUsuarios.some(usuario => usuario.nombre === nombre && usuario.password === pass1)){
        backgroundZoom();
    } else {
        mensajeError.innerHTML = 'Usuario o contraseña incorrectos';
    }
}

//ADDEVENTLISTENERS
divBotones.addEventListener('click', btnApagadoEncendido);
divBotones.addEventListener('click', cambiarLogReg);
//document.addEventListener('click', backgroundZoom);
enviar.addEventListener('click', e => {
    mensajeError.innerHTML = '';
    if(inputUsuario.classList.contains('registro')){
        crearUsuario(inputUsuario.value, inputPass1.value, inputPass2.value);
    } else {
        comprobarUsuario(inputUsuario.value, inputPass1.value);
    }
})

