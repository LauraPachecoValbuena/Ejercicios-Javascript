function Profesor(primerNombre, numeroClases) {
	// Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
	// ha establecido correctamente durante la llamada
	Persona.call(this, primerNombre);
	//Inicializamos las propiedades específicas de Estudiante
	this.numeroClases = numeroClases;
	// Reemplazar el método "diHola"
	Profesor.prototype.diHola = function(){
		console.log("Hola, Soy " + this.primerNombre + ". y enseño en " + this.numeroClases + " clases.");
	}
	// Agregamos el método "diAdios"
	Profesor.prototype.quejarse = function() {
		console.log("¡ Cuanto trabajo !");
	}

}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Profesor.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Profesor.prototype.constructor = Profesor;