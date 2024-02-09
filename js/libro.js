const titulo = document.querySelector('#titulo');
const imagen = document.querySelector('#imagen');
const textoBruja = document.querySelector('#textoBruja')

const bruja1 = new Bruja(1,
                        'Bruja Nórdica',
                        './imgs/libro/brujaNordica.jpg',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis mi sed enim maximus pharetra. Aenean pharetra lacus vel gravida congue. Pellentesque scelerisque dignissim elit at vestibulum. Fusce sed leo a mauris egestas rhoncus. Aenean purus lectus, blandit sit amet ornare sit amet, placerat a sem. Fusce congue dignissim augue, non egestas ante scelerisque nec. Nulla tincidunt sapien felis, eget vehicula libero semper in. Morbi faucibus finibus dui, eu imperdiet nunc porta quis. Etiam interdum cursus semper. Quisque posuere nibh sit amet enim maximus, eget pretium ante consectetur. ');

let arrBrujas = [];
arrBrujas.push(bruja1);

titulo.innerHTML = bruja1.getTitulo();
imagen.innerHTML = bruja1.getImg();
textoBruja.innerHTML = bruja1.getDescripcion();

const mostrarBruja = () =>{

}