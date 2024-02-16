// IMPORTS
import { Bruja } from "./Clases/Bruja.js";

// PARTES DE LA PÁGINA
const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const textoBruja = document.querySelector("#textoBruja");

const divBotones = document.querySelector(".libro__botones");

const botonMas = document.querySelector("#mas");
const botonMenos = document.querySelector("#menos");

const divAnimacion = document.querySelector('#libro--animacion')


//VALORES
const bruja1 = new Bruja(
    1,
    "Bruja Nórdica",
    "./imgs/libro/brujaNordica.png",
    "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

const bruja2 = new Bruja(
    2,
    "Bruja Griega",
    "./imgs/libro/medusa.png",
    "Lorem ipsum dolor sit amet, pharetra lacus vel gravida congue.<ul><li>Pellentesque vestibulum.</li><li>Pellentesque placerat a sem.</li></ul>  Fusce sed leo a mauris egestas rhoncus. Aenean purus lectus, blandit sit amet ornare sit amet, placerat a sem. Fusce congue dignissim augue, non egestas ante scelerisque nec. Nulla tincidunt sapien felis, eget vehicula libero semper in. Morbi faucibus finibus dui, eu imperdiet nunc porta quis. Etiam interdum cursus semper. Quisque posuere nibh sit amet enim maximus, eget pretium ante consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

const bruja3 = new Bruja(
    3,
    'Bruja Rusa',
    './imgs/libro/babaYaga.png',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra. Aenean pharetra lacus vel gravida congue. Pellentesque scelerisque dignissim elit at vestibulum. Fusce sed leo a mauris egestas rhoncus. Aenean purus lectus, blandit sit amet ornare sit amet, placerat a sem. Fusce congue dignissim augue, non egestas ante scelerisque nec. Nulla tincidunt sapien felis, eget vehicula libero semper in. Morbi faucibus finibus dui, eu imperdiet nunc porta quis. Etiam interdum cursus semper. Quisque posuere nibh sit amet enim maximus, eget pretium ante consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

let arrBrujas = [];
arrBrujas.push(bruja1);
arrBrujas.push(bruja2);
arrBrujas.push(bruja3);

let numBruja = 1;


const mostrarBruja = (num) => {
    const bruja = arrBrujas.find(bruja => bruja.id === num);
    bruja.impBruja(titulo, imagen, textoBruja);
};

const inicializarPagina = () => {
    mostrarBruja(numBruja);
    cambiarBoton(botonMas);
    cambiarBoton(botonMenos);
};

const pasarHoja = (lado) => {

    divAnimacion.src = '';
    divAnimacion.src = "./imgs/libro/hojaPasando" + lado + ".gif";
    divAnimacion.classList.add('animacion');

    setTimeout(() => {
        divAnimacion.classList.remove('animacion');
        divAnimacion.src = '';
    }, 900);
    
}

const cambiarBoton = (boton) => {
    if(boton.id == 'mas'){
        if(numBruja == arrBrujas.length){
            if(!boton.classList.contains('clase')){
                boton.classList.add('clase');
            }
        } else {
            if(boton.classList.contains('clase')){
                boton.classList.remove('clase');
            }
            
        }
    } else if(boton.id == 'menos'){
        if(numBruja == 1){
            if(!boton.classList.contains('clase')){
                boton.classList.add('clase');
            }
        } else {
            if(boton.classList.contains('clase')){
                boton.classList.remove('clase');
            }
        }
    }
}

window.onload = inicializarPagina;

divBotones.addEventListener('click', e => {
    const boton = e.target.closest('button');

    if (boton.id == 'mas') {
        if (numBruja <= arrBrujas.length - 1) {
            pasarHoja('Derecha');
            numBruja++;
            console.log(numBruja);
        } else if(numBruja == arrBrujas.length){
            boton.classList.add('clase');
        }

    } else if (boton.id == 'menos') {
        if (numBruja > 1) {
            pasarHoja('Izquierda');
            numBruja--;
            console.log(numBruja);
        } 
    }

    setTimeout(() => {
        mostrarBruja(numBruja);
    }, 900);
    

    cambiarBoton(botonMas);
    cambiarBoton(botonMenos);
});
