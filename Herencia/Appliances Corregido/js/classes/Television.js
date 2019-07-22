function Television(basePrice, color, energyConsumption, weight, size, tdt) {
	
	Appliance.call(this, basePrice, color, energyConsumption, weight);
	
	this.size = size; //inches!!
	
	//solucion con una ternaria, un poco dificil de entender
	//this.tdt = tdt==undefined?Television.BASE_TDT:tdt; 
	
	//solucion con un if
	if (tdt == undefined){
		this.tdt = Television.BASE_TDT;
	}
	else {
		this.tdt = tdt;
	}
	
	Television.prototype.getSize = function(){
		return this.size;
	}
	
	Television.prototype.getTDT = function(){
		return this.tdt; 
	}
	
	Television.prototype.getFinalPrice = function(){
		let basePrice = Appliance.prototype.getFinalPrice.call(this);
		
		if (this.size > 40){
			basePrice *= 1.3;
		}
		
		let tdtPriceIncrement = this.tdt?50:0;		
		
		return basePrice + tdtPriceIncrement;
	}

}
Television.BASE_SIZE = 20;
Television.BASE_TDT = false;


Television.prototype = Object.create(Appliance.prototype);
Television.prototype.constructor = Television;