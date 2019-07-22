function Pelicula(nombre,director,estreno,tipo,prestado){
    this.nombre = nombre;
    this.director = director;
    this.estreno = estreno;
    //this.tipo = tipo; 
    this.prestado = false;

    if (!prestado){
        this.prestado = prestado;
    }

    if (tipo == 'drama' || tipo == 'comedia' || tipo == 'accion' || tipo == 'indie'){
        this.tipo = tipo;
    }

    Pelicula.prototype.setEstreno = function (estreno){
        this.estreno = estreno;
    }

    Pelicula.prototype.setPrestado = function (){
        this.prestado = !this.prestado;
    }

    Pelicula.prototype.getNombre = function (){
        return this.nombre;
    }

    Pelicula.prototype.getDirector = function (){
        return this.director;
    }

    Pelicula.prototype.getEstreno = function (){
        return this.estreno;
    }
    Pelicula.prototype.getPrestado = function (){
        return this.prestado;
    }
    Pelicula.prototype.getTipo = function (){
        return this.tipo;
    }
    Pelicula.prototype.getTodo = function(){
        return 'La pelicula es: ' +  this.getNombre()   +   ' el director es:  '  + this.getDirector()   +   ' el estreno fue:  '  +  this.getEstreno()  +  ' el tipo es:  ' +  this.getTipo()  +  ' esta prestado '  +  this.getPrestado();
    }



}
