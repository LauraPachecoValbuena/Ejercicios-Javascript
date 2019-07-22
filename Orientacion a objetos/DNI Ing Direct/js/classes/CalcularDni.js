// function CalcularDni(){
// 	let texto="TRWAGMYFPDXBNJZSQVHLCKET";
// 	let posicion= document.getElementById("dni").value % 23;
// 	let letra = texto.charAt(posicion);
// 	return letra; 
// 	}
// 	console.log(CalcularDni());




 function CalcularDni(){
 	let texto = "TRWAGMYFPDXBNJZSQVHLCKET"; 
 	let posicion = document.getElementById("dni").value % 23;
 	let letra = texto.substring(posicion, posicion +1);
 	return texto[posicion];
	
 }


onkeypress = function(actual, siguiente, longitud) {
	document.getElementById("dni").focus();
  };
 