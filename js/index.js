'use strict';

import { Usuario } from "./Clases/Usuario.js";
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

// Función para guardar arrUsuarios en localStorage
const guardarUsuariosEnLocalStorage = () => {
    localStorage.setItem('arrUsuarios', JSON.stringify(arrUsuarios));
};

// Función para cargar arrUsuarios desde localStorage
const cargarUsuariosDesdeLocalStorage = () => {
    const usuariosGuardados = localStorage.getItem('arrUsuarios');
    if (usuariosGuardados) {
        arrUsuarios = JSON.parse(usuariosGuardados);
    }
};

const btnApagadoEncendido = function(e){
    const btnClick = e.target;
    arrayBotones.forEach(btn => {
        if(btn.id != btnClick.id){
            btn.classList.remove("btn__clicado");
        }else{
            btn.classList.add("btn__clicado");
        }
    });
};

const cambiarLogReg = function(e){
    const btnClick = e.target.closest('button');

    if(btnClick.id == "registro"){
        mensajeError.innerHTML = '';
        titulo.innerHTML = '<label class="icono">🌙</label> Registro <label class="icono">✨</label>';
        formulario.classList.add('registro');
        inputUsuario.classList.add("registro");
        //formulario.appendChild(nuevoInput);
        inputPass2.style.display = 'block';
    } else {
        mensajeError.innerHTML = '';
        titulo.innerHTML = '<label class="icono">🌙</label> Iniciar Sesión <label class="icono">✨</label>';
        inputUsuario.classList.remove("registro");
        formulario.classList.remove('registro');
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
    //COMPRUEBO EL USUARIO
    if (nombre.length < 5) {
        mensajeError.innerHTML = 'El usuario es demasiado corto';
    } else if (nombre.length > 20) {
        mensajeError.innerHTML = 'El usuario es demasiado largo';
    //COMPRUEBO LA CONTRASEÑA
    } else if (pass1.length < 5) {
        mensajeError.innerHTML = 'La contraseña es demasiado corta';
    } else if (pass1.length > 20) {
        mensajeError.innerHTML = 'La contraseña es demasiado larga';
    } else if (pass1 !== pass2) {
        // Verificar si las contraseñas son iguales
        mensajeError.innerHTML = 'Las contraseñas no coinciden';
    } else if (arrUsuarios.some(usuario => usuario.nombre === nombre)) {
        // Verificar si el usuario ya existe
        mensajeError.innerHTML = 'El usuario ya existe';
    } else {
        mensajeError.innerHTML = 'Usuario creado correctamente';

        const maxId = arrUsuarios.reduce((max, usuario) => (usuario.id > max ? usuario.id : max), 0);
        const nuevoUsuario = new Usuario(
            maxId + 1,
            nombre,
            pass1
        );

        arrUsuarios.push(nuevoUsuario);
        guardarUsuariosEnLocalStorage();
    }
}

const comprobarUsuario = (nombre, pass1, e) => {
    if(arrUsuarios.some(usuario => usuario.nombre === nombre && usuario.password === pass1)){
        backgroundZoom(e);
    } else {
        mensajeError.innerHTML = 'Usuario o contraseña incorrectos';
    }
}

//ADDEVENTLISTENERS
window.onload = cargarUsuariosDesdeLocalStorage();
divBotones.addEventListener('click', btnApagadoEncendido);
divBotones.addEventListener('click', cambiarLogReg);
//document.addEventListener('click', backgroundZoom);
enviar.addEventListener('click', e => {
    mensajeError.innerHTML = '';
    if(inputUsuario.classList.contains('registro')){
        crearUsuario(inputUsuario.value, inputPass1.value, inputPass2.value);
    } else {
        comprobarUsuario(inputUsuario.value, inputPass1.value, e);
    }
})

