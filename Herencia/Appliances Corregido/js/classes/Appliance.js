function Appliance(basePrice, color, energyConsumption, weight){
	// -- Constructor -- 
	this.basePrice = basePrice?basePrice:Appliance.BASE_PRICE;
	
	this.weight =  weight?weight:Appliance.BASE_WEIGHT;
	
	Appliance.prototype.checkEnergyConsumption = function(energyConsumption){
		let result = Appliance.BASE_CONSUMPTION;
		if (energyConsumption && Appliance.VALID_CONSUMTION.includes(energyConsumption.toUpperCase())){
			result = energyConsumption.toUpperCase();
		}
		
		return result;
	}
	
	Appliance.prototype.checkColor = function(color){
		let result = Appliance.BASE_COLOR;
		
		if (color && Appliance.VALID_COLORS.includes(color.toLowerCase())){
			result = color.toLowerCase();
		}
		
		return result;
	}
	
	this.color = this.checkColor(color);
	this.energyConsumption = this.checkEnergyConsumption(energyConsumption);
	
	// -- Constructor --
	
	Appliance.prototype.getConsumtionCost = function(energyLetter){	
		let value = energyLetter?energyLetter:this.energyConsumption;
		
		value = value.toUpperCase();
		
		let result = 10;
		switch (value){
			case "A":
				result = 100;
				break;
			case "B":
				result = 80;
				break;
			case "C":
				result = 60;
				break;
			case "D":
				result = 50;
				break;
			case "E":
				result = 30;
				break;
			case "F":
				result = 10;
				break;			
		}
		
		return result;
	}
	
	Appliance.prototype.priceByWeight = function(weight) {
		let value = weight?weight:this.weight;
		
        let price = 10; //default case
		
        if (value > 19 && value <= 49) {
			price = 50;
		}
        else if (value > 49 && value <= 79) {
			price = 80;
		}
        else if (value > 79) {
			price = 100;
		}
        
        return price;
    }
	
	
	Appliance.prototype.getFinalPrice = function() {
		return this.basePrice + this.getConsumtionCost(this.energyConsumption) + this.priceByWeight(this.weight);
    }
	
}

Appliance.BASE_PRICE = 100;
Appliance.BASE_COLOR = "white";
Appliance.BASE_CONSUMPTION = "F";
Appliance.BASE_WEIGHT = 5;
Appliance.VALID_CONSUMTION = ["A", "B", "C", "D", "E", "F"];
Appliance.VALID_COLORS = ["red", "white", "blue"];


