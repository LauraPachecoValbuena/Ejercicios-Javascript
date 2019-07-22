function Desarrollador (nombre, apellidos, cargo, horasTrabajadas, horasExtra){

    Trabajador.call(this, nombre, apellidos, cargo);

    this.horasTrabajadas = horasTrabajadas;
    this.horasExtra = horasExtra;


    Desarrollador.prototype.calcularHorasTrabajadas = function(){
        this.horasTrabajadas * Trabajador.SUELDO_HORA;
    }

    Desarrollador.prototype.calcularHorasExtras = function(){
        this.horasExtras * Trabajador.HORA_EXTRA;
    }
    Desarrollador.prototype.getSueldobase = function(){

        let extras = horasTrabajadas - 

    }

}

Desarrollador.prototype = Object.create(Trabajador.prototype);
Desarrollador.prototype.constructor = Desarrollador;