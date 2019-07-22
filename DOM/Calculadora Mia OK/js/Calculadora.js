function Calculadora (){
    let datos = document.getElementById("pantalla").value;
 

}

//ESTO DEJA ESCRIBIR LOS NUMEROS SEGUIDOS Y SUS OPERACIONES Carlos.
function add(data){
    document.getElementById("pantalla").value += data;
}
    
function borrar(){
    document.getElementById("pantalla").value = " ";
}

//AQUI ES DONDE SE HAACE LA OPERACION. Carlos
function calculate (){
    let operacion = document.getElementById("pantalla").value;

    let resultado = operar(operacion);
    document.getElementById("pantalla").value = resultado;
}


//Aquí se hará la operacion.

function operar(operacion){
    let operacion = datos.split(" ", 3);
   
    //aquí con string y sus métodos haré la operación. Muchos if y muchas comprobaciones.....

    return resultado(operar()); //obviamente NO devolverá 2 siempre.
}





/*let resultado = "";
switch (this.operacion){
    case "+":
    resultado = this.numero1 + this.nuemro2;
    break;
    case "-":
    resultado = this.numero1 - this.nuemro2;
    break;
    case "*":
    resultado = this.numero1 * this.nuemro2;
    break;
    case "/":
    resultado = this.numero1 / this.nuemro2;
    break;
    
}*/