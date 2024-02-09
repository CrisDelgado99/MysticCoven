class Bruja{
    constructor(id, titulo, img, descripcion){
        this.id = id;
        this.titulo = titulo;
        this.img = img;
        this.descripcion = descripcion;
    }

    //setters
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
    impBruja(){

    }
}