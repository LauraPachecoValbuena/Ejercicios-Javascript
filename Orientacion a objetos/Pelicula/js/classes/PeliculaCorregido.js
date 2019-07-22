//CLASE PELICULA
function Pelicula(nombre,director,year,tipo,){
    //PROPIEDADES DE LA PELICULA. Tmb llamadas variables de instancia de cada pelicula q cree.

    //--éstos son los constructores (los this. de abajo):
    this.nombre = nombre;
    this.director = director;
    this.year = year;
    this.tipo = tipo; 
    this.prestado = false; 
    this.prestatario = 'No está prestado';
     //aqui le ponemos prestado para que no se llame igual que la funcion prestar. Cada uno tiene q tener un nombre distinto las propiedades de los metodos.
    //ESTO SON LOS MÉTODOS:

    Pelicula.prototype.isPrestado = function (){  //aquí ponemos IS  -O-  HAS xa valores buleanos utilizamos is o has no GET x eso xq los valores boleanos.
        return this.prestado;
    }

    Pelicula.prototype.getPrestatario = function (){
        return this.prestatario;
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

    Pelicula.prototype.setYear = function (year){
        this.year = year;
    }


    Pelicula.prototype.prestar = function (nombre){ //este nombre de la función NO es this.nombre. Es el parametro que yo le paso a la funcion y sólo valdrá dentro de esta función de llav a llave. este es el nombre de la persona a la cual le rpesto la peli.
        this.prestado = true;
        this.prestatario = nombre; //este es el nombre a quien le presto la pelicula 'Marco' que está declarado en le html.
    }

    Pelicula.prototype.devolver = function (){
        this.prestado = false;
        this.prestatario = 'No esta prestado'; // aquí se deja vacio puesto que será otra persona a la que le vuelva a prestar la pelicula que NO será Marco. de ahi que se ponen las comillas para indicar q ahí va texto pero NO se pone a quien xq no lo sabemos por el momento.
    }


    Pelicula.prototype.mostratTipo = function(){  //esto lo creamos para pasar nuestra info (que está en foma de número 1, 2, 3,4) a texto. la info son las constantes de abjo 
        let texto = "";
        switch(this.tipo){    //No es la mejor manera de hacerlo.
            case Pelicula.DRAMA:
                texto = 'Drama';
                break;
            case Pelicula.COMEDIA:
                texto = 'Comedia';
                break;
            case Pelicula.ACCION:
                texto = 'Accion';
                break;
            case Pelicula.INDIE:
                texto = 'Indie';
                break;
            default:
                texto = 'Desconocido';
        }
        return texto;
    }

    //esto es para que nos enseñe todos la info de cada peli. 
    Pelicula.prototype.getDatos = function(){
        let texto = 'La pelicula es: ' +  this.getNombre()   +   ' el director es:  '  + this.getDirector()   +   ' el estreno fue:  '  +  this.getEstreno()  +  ' el tipo es:  ' +  this.mostrarTipo()  +  '  ';
        let textoPrestamo = 'No';
        let user = '';
        if (this.prestado){
            textoPrestamo = 'Si';
            user = ' a ' + this.prestatario;
        }
        texto += textoPrestamo + 'esta prestada ' + user;

        return texto;
    
    
    }



}
//Constantes de clase, de la clase Pelicula. SIEMPRE FUERA DE LA CLASE!! Utilizar siempre constantes,para NO equivocarnos.
Pelicula.DRAMA = 1;
Pelicula.COMEDIA = 2;
Pelicula.ACCION = 3;
Pelicula.INDIE = 4;
