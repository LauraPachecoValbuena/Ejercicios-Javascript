function MachineGun(){
	const BASIC_BALAS = 400;
	this.balas = BASIC_BALAS;
	this.automatica = false;
	
	//recargar, disparar, cambiar a automatica
	
	MachineGun.prototype.disparar = function(){
		let numeroDeBalas;
		if (this.automatica) { //si es automatica
			if (this.balas >= 20) {
				this.balas -= 20;
				numeroDeBalas = 20;
			}
		}
		else {
			if (this.balas >= 1) {
				this.balas -= 1;
				numeroDeBalas = 1;
			}			
		}
		
		return numeroDeBalas;
	}
	
	MachineGun.prototype.recargar = function(){
		this.balas = BASIC_BALAS;
	}
	
	MachineGun.prototype.cambiarAutomatica = function(){
		this.automatica = true;
	}
	
	MachineGun.prototype.cambiarManual = function(){
		this.automatica = false;
	}
	
	MachineGun.prototype.verBalas = function(){
		return this.balas;
	}
	
}