function Producto(id, nombre, fecha, estado){
	this.id = id;
	this.nombre = nombre;
	this.fecha = fecha;
	this.estado = estado
	
	
	Producto.prototype.verEstado = function(){
		return this.estado;
	}
	
	Producto.prototype.cambiarFecha = function(fecha){
		this.fecha = fecha;
	}
	
	Producto.prototype.verFecha = function(){
		return this.fecha;
	}
	
	Producto.prototype.verNombre = function(){
		return this.nombre;
	}
	
}