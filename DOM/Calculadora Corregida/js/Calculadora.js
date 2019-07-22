function Calculate (){
    document.getElementById("pantalla").value += data;
}
//ESTO DEJA ESCRIBIR LOS NUMEROS SEGUIDOS Y SUS OPERACIONES Carlos.
function add(data){
    document.getElementById("pantalla").value += data;
}
//ésta es la funcion xa borrar.
function clean(){
    document.getElementById("pantalla").value = "";
}


//AQUI ES DONDE SE HAACE LA OPERACION. Carlos
function calculate (){
    let operacion = document.getElementById("pantalla").value;

    let resultado = operarPorLasMalas(operacion);
    document.getElementById("pantalla").value = resultado;
}

function operarPorLasMalas(operacion){
    if (validarPrimerCaracter(operacion[0]) && validarUltimoCaracter(operacion) && validarContenido(operacion)){
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
    else {
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
        case "+":
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

//Primer paaso es buscar el operador.

function buscarOperador(operacion){
    let operador = null;
    for (let i = 1; i < operacion.length && operador == null; i++){
        if (isNaN(operacion[i])){  
            if (operador == null){ //aquí me está buscando el primer simbolo.
                operador = operacion[i];
            }
        }
        return operador;
    }
}



function validarContenido(operacion){
    let result = true;
    let operador = null;
    for (let i = 1; i < operacion.length && result; i++){
        if (isNaN(operacion[i])){  
            if (operador == null){ //aquí me está buscando el primer simbolo.
                operador = operacion[i];
            }
        
            else {
                let ultimoIndice = operacion.indexOf(operador); //aqui miro donde está el ultimo operador q encuentro.

                let resto = i - ultimoIndice;

                if (resto == 1){ //tengo 2 operadores consecutivos.
                    result = validarSumarResta(operacion[i]);  //aqui compprueba si el operador es + o -.
                }
                else {  //tengo 2 operadores NO consecutivos.
                    result = false;

                }
                
            }
        }
    }
    return result;  //si aqui me devuelve false la funcion de operar por las malas no se puede hacer y nos dará E.
}





function validarPrimerCaracter(primerSimbolo){
    return validarSumaResta(primerSimbolo);
}


//En esta funcion éstamos comprobando el primer caso de fracaso que es: que el primer simbolo no sea un numero sea un simbolo o de * o de / que no serian correcto. Si es correct + o - xq los numeros pueden ser positivos onegativos.
function validarSumaResta(simbolo){
    let result = true;
    if (simbolo == "*" || simbolo =="/"){
        result = false;
    }
    return result;
}

function validarUltimoCaracter(operacion){
  return !isNaN(operacion[operacion.length -1]);
}


//Aquí se hará la operacion.

function operar(operacion){
    //ésto es una manera de hacerlo. Lo que hace es controlar el error y te da E siempre que no se haga bien las operaciones.
    // Nos hace la suma, resta. dividsion y multiplicacion pero si x ejemploe dividimos y tmb le damos a multiplicar nos dará error. 
    let resultado;
    try{
        resultado = eval(operacion); //aquí que haga la operación. Se pone dentro del try por si falla la operacion, que lo coja el catch.
    }
    catch (err){
        resultado = "E";
        console.error(err);  // si falla pinta E. Aqui siempre hay que especificar si falla, que lo cioje el catch que hace?
    }
    finally {
        console.log("hola!"); //se ejecuta sienmpre.
    }
    //aquí con string y sus métodos haré la operación. Muchos if y muchas comprobaciones.....

    return resultado;
  
}

 // return eval (operacion); así directamente me hace TODAS las operaciones.