function Venta (nombre, apellidos, cargo, nVentas){

    Trabajador.call(this, nombre, apellidos, cargo);

    this.nVentas = ventas;

    Venta.prototype.getSueldobase = function(){
        return Trabajador.SUELDO_BASE + (this.nVentas * Trabajador.UNA_VENTA);
    }

}
Venta.prototype = Object.create(Trabajador.prototype);
Venta.prototype.constructor = Venta;