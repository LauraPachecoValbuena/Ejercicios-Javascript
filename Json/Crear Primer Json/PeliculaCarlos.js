//clase Pelicula
function Pelicula (nombre, director, year, tipo){
	//propiedades de la Pelicula
	//tb llamadas variables de instancia de cada Pelicula que cree
	this.nombre = nombre;
	this.director = director;
	this.year = year;
	this.tipo = tipo;
	this.prestado = false;
	this.prestatario = "No esta prestado";
	
	Pelicula.prototype.toJSONObject = function (){
		
	}
	
	
	Pelicula.prototype.isPrestado = function(){
       return this.prestado;
	}
	
	Pelicula.prototype.prestar = function (nombre) {
		this.prestado = true;
		this.prestatario = nombre;
	}
	
	Pelicula.prototype.devolver = function () {
		this.prestado = false;
		this.prestatario = "No esta prestado";
	}
	
	Pelicula.prototype.getPrestatario = function() {
       return this.prestatario;
	}
	
	Pelicula.prototype.setYear = function (year) {
		this.year = year;
	}
	
	Pelicula.prototype.mostarTipo = function(){
		let texto = "";
		switch(this.tipo){
			case Pelicula.DRAMA:
				texto = "Drama";
				break;
			case Pelicula.COMEDIA:
				texto = "Comedia";
				break;
			case Pelicula.ACCION:
				texto = "Acción";
				break;
			case Pelicula.INDIE:
				texto = "Indie";
				break;
			default:
				texto = "Desconocido";
			
		}
		
		return texto;		
	}
	
	//-------------------
	Pelicula.prototype.getDatos = function(){
       let texto = 'La pelicula es: ' +  this.getNombre()   +   ' el director es:  '  + this.director   +   ' el estreno fue:  '  +  this.getEstreno()  +  ' el tipo es:  ' +  this.mostarTipo() + " ";
	   
	   let textoPrestamo = "No";
	   let user = "";
	   if (this.prestado){
		   textoPrestamo = "Si";
		   user = " a " + this.prestatario;
	   }
	   
	   texto += textoPrestamo + " está prestada" + user;
	   
	   return texto;
	   
   }
   
	Pelicula.prototype.getNombre = function (){
       return this.nombre;
	}

	Pelicula.prototype.getDirector = function (){
       return this.director;
	}

	Pelicula.prototype.getEstreno = function (){
       return this.year;
	}
	
	Pelicula.prototype.getPrestado = function (){
       return this.prestado;
	}
	
}

//Constantes de clase, de la clase Pelicula
Pelicula.DRAMA = 1;
Pelicula.COMEDIA = 2;
Pelicula.ACCION = 3;
Pelicula.INDIE = 4;