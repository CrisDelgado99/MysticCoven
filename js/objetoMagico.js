// IMPORTS
import { Objeto } from "./Clases/Objeto.js";
import { cambiarBoton } from "./script.js";

// PARTES DE LA PÁGINA
const divBotones = document.querySelector(".botones_lados");

const botonMas = document.querySelector("#mas");
const botonMenos = document.querySelector("#menos");
const h1Titulo = document.querySelector("#titulo");
const pTexto = document.querySelector("#texto");
const contImagen = document.querySelector(".objeto__imagen");

//VALORES
const objeto1 = new Objeto(
    1,
    "El Familiar",
    "./../imgs/objetos/GatoConSombra.png",
    "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

const objeto2 = new Objeto(
    2,
    "Los Elementos",
    "./../imgs/objetos/Fire_Orb4_2.png",
    "Lorem ipsum dolor sit amet, pharetra lacus vel gravida congue.<ul><li>Pellentesque vestibulum.</li><li>Pellentesque placerat a sem.</li></ul>  Fusce sed leo a mauris egestas rhoncus. Aenean purus lectus, blandit sit amet ornare sit amet, placerat a sem. Fusce congue dignissim augue, non egestas ante scelerisque nec. Nulla tincidunt sapien felis, eget vehicula libero semper in. Morbi faucibus finibus dui, eu imperdiet nunc porta quis. Etiam interdum cursus semper. Quisque posuere nibh sit amet enim maximus, eget pretium ante consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

const objeto3 = new Objeto(
    3,
    'El Caldero',
    './../imgs/objetos/cauldron.png',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra. Aenean pharetra lacus vel gravida congue. Pellentesque scelerisque dignissim elit at vestibulum. Fusce sed leo a mauris egestas rhoncus. Aenean purus lectus, blandit sit amet ornare sit amet, placerat a sem. Fusce congue dignissim augue, non egestas ante scelerisque nec. Nulla tincidunt sapien felis, eget vehicula libero semper in. Morbi faucibus finibus dui, eu imperdiet nunc porta quis. Etiam interdum cursus semper. Quisque posuere nibh sit amet enim maximus, eget pretium ante consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

const objeto4 = new Objeto(
    4,
    'El Sombrero',
    './../imgs/objetos/Sombrero.png',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra. Aenean pharetra lacus vel gravida congue. Pellentesque scelerisque dignissim elit at vestibulum. Fusce sed leo a mauris egestas rhoncus. Aenean purus lectus, blandit sit amet ornare sit amet, placerat a sem. Fusce congue dignissim augue, non egestas ante scelerisque nec. Nulla tincidunt sapien felis, eget vehicula libero semper in. Morbi faucibus finibus dui, eu imperdiet nunc porta quis. Etiam interdum cursus semper. Quisque posuere nibh sit amet enim maximus, eget pretium ante consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra."
);

//AÑADIR LOS VALORES AL ARRAY DE OBJETOS
let arrObjetos = [];
arrObjetos.push(objeto1);
arrObjetos.push(objeto2);
arrObjetos.push(objeto3);
arrObjetos.push(objeto4);

let numObjetos = 1; //valor de inicio

const mostrarObjeto = (num) => {
    const objeto = arrObjetos.find(objeto => objeto.id === num);
    objeto.impObjeto(h1Titulo, contImagen, pTexto);
};

//ESTABLECER POR DEFECTO EL VALOR 1 CADA VEZ QUE SE CARGUE LA PÁGINA
const inicializarPagina = () => {
    mostrarObjeto(numObjetos);
    cambiarBoton(botonMas, arrObjetos, numObjetos);
    cambiarBoton(botonMenos, arrObjetos, numObjetos);
};
window.onload = inicializarPagina;

//ADDEVENTLISTENERS
divBotones.addEventListener('click', e => {
    const boton = e.target.closest('button');

    //Si el botón tiene el id "mas" aumenta la variable de numObjetos
    if (boton.id == 'mas') {
        if (numObjetos <= arrObjetos.length - 1) {
            numObjetos++;
            console.log(numObjetos);
        } 

    //Si el botón tiene el id "menos" disminuye la variable de numObjetos
    } else if (boton.id == 'menos') {
        if (numObjetos > 1) {
            numObjetos--;
            console.log(numObjetos);
        } 
    }
    
    mostrarObjeto(numObjetos);
    cambiarBoton(botonMas, arrObjetos, numObjetos);
    cambiarBoton(botonMenos, arrObjetos, numObjetos);
});



