export class Usuario{
    constructor(id, nombre, password){
        this.id = id;
        this.nombre = nombre;
        this.password = password;
    }

        //setters
        setId(id){
            this.id = id;
        }
        setNombre(nombre){
            this.nombre = nombre;
        }
    
        setPassword(password){
            this.password = password;
        }
    
    
        //getters
        getId(){
            return this.id;
        }
        
        getNombre(){
            return this.nombre;
        }
    
        getPassword(){
            return this.password;
        }
    
        //OTRAS FUNCIONES
}