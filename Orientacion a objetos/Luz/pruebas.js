function Luz(){
	this.encendido = false;
	
	Luz.prototype.pulsarInterruptor = function(){
		this.encendido = !this.encendido;
	}
	
	Luz.prototype.ver = function(){
		return this.encendido;
	}
}