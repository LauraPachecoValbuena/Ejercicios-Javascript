//Calculate the DNI letter according to Dni number and a hyphen is added at left of the letter 
function calculateDniLetter(dni){
    let dniLetter = new Array ("T", "R", "W", "A", "G", "M", "Y", "F", "P", 
    "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E");

    let possition = dni % 23;
    return "-" + dniLetter[possition];
}

//Add hyphen and letter next to the Dni number
function addLetterDni() { 
    let dni = document.getElementById("dni").value;
    if (dni.length == 8){
        document.getElementById("dni").value += calculateDniLetter(dni);
        document.getElementById("day").focus();
    }
} 

//Pick values of date inputs and transforms them in a Dateformat
function pickDate(){
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let dateForm = month + ", " + day + ", " + year;
    return dateForm;
}

//Calculate the literal age according to the date entered.
function calculate_age(date) { 
    var difference = Date.now() - date.getTime();
    var totalAge = new Date(difference); 
  
    return Math.abs(totalAge.getUTCFullYear() - 1970);   
}

//Validate if user is adult or not
function dniValidate(){
    let age = calculate_age(new Date(pickDate()));
    if(age < 18){
        let z = document.createElement("p");
        z.innerHTML = "Eres menor de edad, no puedes create una cuenta";
        let div = document.getElementById("msg");
        div.setAttribute("class", "error")
        div.appendChild(z);
    }else{
        let z = document.createElement("p");
        z.innerHTML = "Correcto";
        let div = document.getElementById("msg");
        div.setAttribute("class", "nice")
        div.appendChild(z);
    }

}

//Translate the focus automatically to the next box when it is full
function checkDate(current, next, size){
    let dato = document.getElementById(current).value;
    if(dato.length == size){
        document.getElementById(next).focus();
    }

    if(dato.length == 4){
        dniValidate();
    }
}


//Check day´s input for CheckDate function
function checkDay(){
    checkDate("day", "month", 2);
}

//Check month´s input for CheckDate function
function checkMonth(){
    checkDate("month", "year", 2);
}

//Check year´s input for CheckDate function
function checkYear(){
    if (checkFullDate()){
        checkDate("year", "btnEnviar", 4);
    } 
}

function checkFullDate(){
    let mes = document.getElementById("mes").value;
	let dia = document.getElementById("dia").value;
    let year = document.getElementById("year").value;
    
    let diaCorrecto = validarDiasMes(dia,mes,year);

    let correcto = true;
    if (dia != diaCorrecto){
        correcto = false;
    }
    
    return correcto;
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






