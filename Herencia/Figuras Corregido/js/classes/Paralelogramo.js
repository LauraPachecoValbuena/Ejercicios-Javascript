function Paralelogramo(color, base, altura){
	
	Figura.call(this, color);
	
	this.base = base;
	
	if (altura){
		this.altura = altura;
	}
	else {
		this.altura = base;
	}
	
	Paralelogramo.prototype.calcularArea = function(){
		return this.base * this.altura;
	}
	
	Paralelogramo.prototype.calcularPerimetro = function(){
		return 2 * this.base + 2 * this.altura;
	}
	
	Paralelogramo.prototype.verPropiedades = function(){
		console.log(this.color, this.base, this.altura);
	}
}

Paralelogramo.prototype = Object.create(Figura.prototype);
Paralelogramo.prototype.constructor = Paralelogramo;