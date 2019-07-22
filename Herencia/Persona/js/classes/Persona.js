// Definimos el constructor Persona
function Persona(primerNombre) {
	this.primerNombre = primerNombre;
	// Agregamos un par de métodos a Persona.prototype
	Persona.prototype.caminar = function() {
		console.log("Estoy caminando!");
	}
	Persona.prototype.diHola = function(){
		console.log("Hola, Soy" + this.primerNombre);
	}
}
