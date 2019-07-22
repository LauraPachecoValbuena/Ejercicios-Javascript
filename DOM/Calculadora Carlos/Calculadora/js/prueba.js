function add(data){
	document.getElementById("pantalla").value += data;
}

function clean(){
	document.getElementById("pantalla").value = "";  // xa borrar los datos le damos a value ""
}

function calculate(){ // aqui es cnd le doy al igual y directamente me hace la operacion q sea.
	let operacion = document.getElementById("pantalla").value;
	
	let resultado = operarPorLasMalas(operacion);
	document.getElementById("pantalla").value = resultado;
}

//esto se hace (lo de arriba) gracias a la funcion de abajo del todo del documento.


//-----------------------------------------------------------------//
function operarPorLasMalas(operacion){
	let result;
	if (validarPrimerCaracter(operacion[0]) && 
		validarUltimoCaracter(operacion) &&
		validarContenido(operacion)){
		result = realizarOperacion(operacion);
	}
	else {
		result = "E";
	}
	return result;
}


function realizarOperacion(operacion){
	
	let operador = buscarOperador(operacion);
	
	let operandos = operacion.split(operador);
	let p1 = ""; 
	let p2 = ""; 
	if (operandos.length == 2){
		p1 = operandos[0];
		p2 = operandos[1];		
	}
	else if (operandos.length == 3){
		p1 = operandos[1];
		p1 = operador + p1;
		p2 = operandos[2];
	}
	
	p1 = parseInt(p1);
	p2 = parseInt(p2);
	
	let result = "E";
	switch(operador){
		case "+":
			result = sumar(p1, p2);
			break;
		case "-":
			result = restar(p1, p2);
			break;
		case "*":
			result = multiplicar(p1, p2);
			break;
		case "/":
			result = dividir(p1, p2);
			break;
	}
	
	return result;
}


function sumar(param1, param2){
	return param1 + param2;
}

function restar(param1, param2){
	return param1 - param2;
}

function multiplicar(param1, param2){
	return param1 * param2;
}

function dividir(param1, param2){
	return param1 / param2;
}


function buscarOperador(operacion){
	let operador = null;
	for (let i = 1; i < operacion.length && operador == null; i++){
		if (isNaN(operacion[i])){
			operador = operacion[i];
		}
	}
	return operador;
}


function validarContenido(operacion){
	let result = true;  //esto es un flag.
	let operador = null;  // esto es null xq no se cual es el operador y cuendo pase x el for me lo va a guardar aqui el operador.
	for (let i = 1; i < operacion.length && result; i++){
		if (isNaN(operacion[i])){
			if (operador == null){
				operador = operacion[i];
			}
			else {
				let ultimoIndice = operacion.indexOf(operador);
				
				let resto = i - ultimoIndice;
				
				if (resto == 1) { //tengo dos operadores consecutivos
					result = validarSumaResta(operacion[i]);
				}
				else { //tengo dos operadores no consecutivos
					result = false;
				}			
			}
		}
	}
	
	return result;
}


function validarPrimerCaracter(primerSimbolo){
	return validarSumaResta(primerSimbolo);
}


function validarSumaResta(simbolo){
	let result = true;
	if (simbolo == "*" || simbolo == "/"){
		result = false;
	}
	return result;
}


function validarUltimoCaracter(operacion){
	return !isNaN(operacion[operacion.length - 1]);
}


//------------------------------------------------------------------//






/**
* Aquí se hará la operacion
*/
function operar(operacion){
	let resultado;
	
	try {
		resultado = eval(operacion);  //try == intenta hacer esto. gracias a este divino metodo 'eval' hace todas las operaciones.
	}
	catch (err){  //catch ==sino da error.
		resultado = "E";
		console.error(err);
	}
	finally {  //se ejecuta SIEMPRE!!.
		console.log("Hola!");
	}
	
	return resultado;
}




