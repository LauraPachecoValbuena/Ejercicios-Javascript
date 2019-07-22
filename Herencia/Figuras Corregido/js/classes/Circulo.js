function Circulo(color, radio){
	
	Figura.call(this, color);
	
	this.radio = radio;
	
	Circulo.prototype.getRadio = function(){
		return this.radio;
	}
	
	Circulo.prototype.calcularArea = function(){
		return Math.PI * Math.pow(this.radio, 2);
	}
	
	Circulo.prototype.calcularPerimetro = function(){
		return 2 * Math.PI * this.radio;
	}
}

Circulo.prototype = Object.create(Figura.prototype);
Circulo.prototype.constructor = Circulo;