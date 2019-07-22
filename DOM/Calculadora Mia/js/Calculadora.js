function Calculadora (){
    this.numero1 = numero1;
    this.numero2 = nuemro2;
    this.operacion = operacion;
    this.nueve = document.getElementById("nueve");
    this.ocho = document.getElementById("ocho");
    this.siete = document.getElementById("siete");
    this.seis = document.getElementById("seis");
    this.cinco = document.getElementById("cinco");
    this.cuatro = document.getElementById("cuatro");
    this.tres = document.getElementById("tres");
    this.dos = document.getElementById("dos");
    this.uno = document.getElementById("uno");
    this.cero = document.getElementById("cero");

    this.dividir = document.getElementById("dividir");
    this.multiplicar = document.getElementById("multiplicar");
    this.restar = document.getElementById("restar");
    this.sumar = document.getElementById("sumar");
    
    this.resultado = document.getElementById("resultado");
    this.borrar = document.getElementById("borrar");

    //Eventos:

    cero.onclick = function (a){
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function (a){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (a){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (a){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (a){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (a){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (a){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (a){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (a){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (a){
        resultado.textContent = resultado.textContent + "9";
    }

    //OPERACIONES

    sumar.onclick = function (a){
        numero1 = resultado.textContent;
        operacion = "+";
        limpiar();

    }
}
//ESTO DEJA ESCRIBIR LOS NUMEROS SEGUIDOS Y SUS OPERACIONES Carlos.
function add(data){
    document.getElementById("pantalla").value += data;
}

//function subtract(data){
    //document.getElementById("pantalla").value -= data;
//}
//AQUI ES DONDE SE HAACE LA OPERACION. Carlos
function calculate (){
    let operacion = document.getElementById("pantalla").value;

    let resultado = operar(operacion);
    document.getElementById("pantalla").value = resultado;
}


//Aquí se hará la operacion.

function operar(operacion){
    //aquí con string y sus métodos haré la operación. Muchos if y muchas comprobaciones.....

    return 2; //obviamente NO devolverá 2 siempre.
}