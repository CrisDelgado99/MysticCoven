export class Bruja{
    constructor(id, titulo, img, descripcion){
        this.id = id;
        this.titulo = titulo;
        this.img = img;
        this.descripcion = descripcion;
    }

    //setters
    setId(id){
        this.id = id;
    }
    setTitulo(titulo){
        this.titulo = titulo;
    }

    setImg(img){
        this.img = img;
    }

    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }

    //getters
    getId(){
        return this.id;
    }
    
    getTitulo(){
        return this.titulo;
    }

    getImg(){
        return this.img;
    }

    getDescripcion(){
        return this.descripcion;
    }

    //otros métodos
    impBruja(contTitulo, contImg, contDescripcion) {
        contTitulo.innerHTML = this.titulo;
        contImg.alt = this.titulo;
        contImg.src = this.img;
        contDescripcion.innerHTML = this.descripcion;
    }
}

