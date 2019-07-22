function Player (nombre, arma, armadura){
	const PUNTOS_VIDA_INICIAL = 20;
	this.nombre = nombre;
	this.arma = arma;
	this.armadura = armadura;
	this.puntosVida = PUNTOS_VIDA_INICIAL;
	
	
	Player.prototype.receiveDamage = function(damage){
		if (this.armadura >= damage){
			this.armadura -= damage;
		}
		else {
			this.puntosVida -= damage;
		}
	}
	
	Player.prototype.getLife = function(){
		console.log("Vida: " + this.puntosVida);
		console.log("armadura: " + this.armadura);
	}
	
}