// Definimos el constructor Estudiante
function Estudiante(primerNombre, asignatura) {
	// Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
	// ha establecido correctamente durante la llamada
	Persona.call(this, primerNombre);
	//Inicializamos las propiedades específicas de Estudiante
	this.asignatura = asignatura;
	// Reemplazar el método "diHola"
	Estudiante.prototype.diHola = function(){
		console.log("Hola, Soy " + this.primerNombre + ". Estoy estudiando " + this.asignatura + ".");
	}
	// Agregamos el método "diAdios"
	Estudiante.prototype.diAdios = function() {
		console.log("¡ Adios !");
	}
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Estudiante.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Estudiante.prototype.constructor = Estudiante;