function WashingMachine(basePrice, color, energyConsumption, weight, load) {
	
	Appliance.call(this, basePrice, color, energyConsumption, weight);
	
	this.load = load?load:WashingMachine.BASE_LOAD;
	
	WashingMachine.prototype.getLoad = function(){
		return this.load;
	}
	
	/*
	precioFinal(): si tiene una carga mayor de 30 kg, aumentará el precio 50 €, sino es así no se incrementara el precio. Llama al método padre y añade el código necesario. Recuerda que las condiciones que hemos visto en la clase Electrodoméstico también deben afectar al precio.
	*/
	WashingMachine.prototype.getFinalPrice = function(){
		
		let loadCost = this.load>30?50:0;
		
		return Appliance.prototype.getFinalPrice.call(this) + loadCost;
	}

}
WashingMachine.BASE_LOAD = 5;

WashingMachine.prototype = Object.create(Appliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;