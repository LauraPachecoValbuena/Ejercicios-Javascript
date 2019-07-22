function Trabajador (nombre, apellidos, dni, cargo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.cargo = null;
  


    Trabajador.prototype.getNombre = function(){
        return this.nombre;
    }

    Trabajador.prototype.getApellidos = function(){
        return this.apellidos;
    }

    Trabajador.prototype.getCargo = function(){
        return this.cargo;
    }

    Trabajador.prototype.getSueldobase = function(){
        return Trabajador.SUELDO_BASE;
    }
}
Trabajador.SUELDO_BASE = 1500;
Trabajador.UNA_VENTA = 70;
Trabajador.SUELDO_HORA = 15;
Trabajador.HORA_EXTRA = 30;