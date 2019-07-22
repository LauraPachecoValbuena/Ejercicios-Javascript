function Capitulo(nombre, serie, duracion, valoracion){
	this.nombre = nombre;
	this.serie = serie;
	this.duracion = duracion;
	this.visto = false;
	this.valoracion = valoracion;
	
	
	Capitulo.prototype.verCapitulo = function (){
		this.visto = true;
	}
	
	Capitulo.prototype.puntuar = function (nuevaValoracion){
		this.valoracion = nuevaValoracion;
	}
	
	
	Capitulo.prototype.obtenerDuracion = function (){
		return this.duracion;
	}
	
	Capitulo.prototype.obtenerNombre = function (){
		return this.nombre + " - " + this.serie;
	}
}