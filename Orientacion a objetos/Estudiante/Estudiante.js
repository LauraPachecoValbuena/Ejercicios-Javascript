function Estudiante (nombre,edad,estadoCivil) {
    this.nombre = nombre;
    this.edad = edad;
    this.estadoCivil = estadoCivil;

//----------OTRA OPCION------------//
//------Método get y set. GET es para que me devuelva un valor(conseguir el dato) y SET es para que me cambie el valor-----//


    Estudiante.prototype.getNombre = function(){ //ésto me va a devolver el valor del nombre.
        return this.nombre;
    }

    Estudiante.prototype.setNombre = function(nombre){ //ésto me va a cambiar el valor del Nombre.
        this.nombre = nombre;
    }

    Estudiante.prototype.getEdad = function(){  //aqui obtengo la edad de luis Vragas que es de 21 años.
        return this.edad;
    }

    Estudiante.prototype.setEdad = function(edad){  //aqui es donde le cambio la edad a 35 años.
        this.edad = edad;
    }

}

//------------------------------------------------//
//Aquio abajo el ejercicio mio


  /*  Estudiante.prototype.verNombre = function(){
        return this.nombre;
    }
    Estudiante.prototype.verEdad = function(){
        return this.edad;
    }
    Estudiante.prototype.verEstadoCivil = function(){
        return this.estadoCivil;
    }*/
