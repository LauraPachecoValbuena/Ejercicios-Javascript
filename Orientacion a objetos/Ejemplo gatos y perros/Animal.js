function Animal (pelo, raza, ojos) {
	this.pelo = pelo;
	this.raza = raza;
	this.ojos = ojos;


	Animal.prototype.ladrar = function () {
		console.log("guau");
	}
	
	Animal.prototype.maullar = function () {
		console.log("miau");
	}
	

}