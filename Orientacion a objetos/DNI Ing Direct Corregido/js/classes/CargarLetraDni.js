 //Validar que el usuario sea mayor de edad. Teniendo en cuenta la fecha actual.
//Validar que el dia no sea mayor de 31, que los meses no sean mayores de 12 ni menos de 1, ojo con los años bisiestos.
//Tenemos q crear nuestro código y  el método date si queremos lo usamos (que no lo hemos visto). Hacerlo 
//Validar que la fecha introducida es real.

function cargarLetraDNI() {
	let dni = document.getElementById("dni").value;
	if (dni.length == 8) {
		document.getElementById("dni").value += calcularLetra(dni);
		document.getElementById("dia").focus();
	}
}

function enviar(){
	let mes = document.getElementById("mes").value;
	let dia = document.getElementById("dia").value;
	let year = document.getElementById("year").value;

	if (!isNaN (dia) && !isNaN (mes) && !isNaN (year)) {
		if (comprobarFecha(dia,mes,year)){
			console.log("la fecha escorrecta");
		} else{
			console.log("la fecha NO es correcta");
		}
	} else {
		console.log ("algún parametro de la fecha NO es un numero");
	}
		
}

function validarDiasMes(dia, mes){  //esto lo creamos para pasar nuestra info (que está en foma de número 1, 2, 3,4) a texto. la info son las constantes de abjo
	const ENERO = 1;
	const FEBRERO = 2;
	const MARZO = 3;
	const ABRIL = 4;
	const MAYO = 5;
	const JUNIO = 6;
	const JULIO = 7;
	const AGOSTO = 8;
	const SEPTIEMBRE = 9;
	const OCTUBRE = 10;
	const NOVIEMBRE = 11;
	const DICIEMBRE = 12;

	let result = 0;
	switch(mes){    
		case ENERO:
		case MARZO:
		case MAYO:
		case JULIO:
		case AGOSTO:
		case OCTUBRE:
		case DICIEMBRE:
			if (dias > 31){
				result = 31;
			}
			break;
		case ABRIL:
		case JUNIO:
		case SEPTIEMBRE:
		case NOVIEMBRE:
			if (dias > 30){
				result = 30;
			}
			break;
		case FEBRERO: 
			if (esBisiesto(year)){
				if (dias > 29){
					result = 29;
				}
			}
			else {
				if (dias > 28){
					result = 28;				
				}
			}
			break;
	}
	return result;
}

function comprobarFecha (dia,mes,year){
	let result = false;

	if (dia > 0 && mes < 13 && mes > 0) {
		if (mes == 01 || mes == 03 || mes == 05 || mes == 07 || mes == 08 || mes == 10 || mes == 12){
			if (dia <= 31) {
				result = true;
			} else {
				result = false;
				console.log ("algún parametro dEL 31 NO es un numero");
			}
		}else if (mes == 04 || mes == 06 || mes == 09 || mes == 11) {
			if (dia <= 30) {
				result = true;
			} else {
				result = false;
				console.log ("algún parametro dEL 30 NO es un numero");
			} 
		}else if (mes == 02 && esBisiesto(year)){
			if (dia <= 29) {
				result = true;
			} else {
				result = false;
				console.log ("algún parametro del bisiesto NO es un numero");
			}
		} else if (mes == 02 && !esBisiesto(year)){
			if (dia <= 28) {
				result = true;
			} else {
				result = false;
				console.log ("algún parametro del NO bisiesto NO es un numero");
			}
		}
	}else {
		result = false;
	}

	return result;
} 

function esBisiesto(year){  //comprobamos si el año es bisiesto
    let result = false;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        result = true;
    }
        
    return result;
} 


function comprobarDia(){
	comprobar("dia","mes", 2);
}

function comprobarMes(){
	comprobar("mes", "year", 2);
}

function comprobarYear(){
	comprobar("year", "btnEnviar", 4);
}

function comprobar (actual, siguiente, size){
	let dato = document.getElementById(actual).value;
	if (dato.length == size){
		document.getElementById(siguiente).focus();
	}
}


function calcularLetra(dni) {
	const dniLetter = new Array ("T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E");
	let possition = dni % 23;
	return "-" + dniLetter[possition];
}

