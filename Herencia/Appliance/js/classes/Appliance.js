function Appliance(color, energyConsuption, weight) {

    this.color = !color ? 'white' : color;
    this.energyConsuption = !energyConsuption ? 'F' : energyConsuption;
    this.weight = !weight ? 5 : weight;

    Appliance.prototype.checkEnergyConsuption = function () {
        let result = 0;
        switch (this.energyConsuption) {
            case "a":
            case "A":
                result = Appliance.ENERGY_CONSUPTION_A;
                break;
            case "b":
            case "B":
                result = Appliance.ENERGY_CONSUPTION_B;
                break;
            case "c":
            case "C":
                result = Appliance.ENERGY_CONSUPTION_C;
                break;
            case "d":
            case "D":
                result = Appliance.ENERGY_CONSUPTION_D;
                break;
            case "e":
            case "E":
                result = Appliance.ENERGY_CONSUPTION_E;
                break;
            case "f":
            case "F":
                result = Appliance.ENERGY_CONSUPTION_F;
                break;
            default:
                result = ('La letra no es valida');

        }
        return result;

    }

    Appliance.prototype.getWeightPrice = function (){
        if (this.weight > 0 && this.weight <= 19){
            weightPrice = 10;
        }
        else if (this.weight > 19 && this.weight <= 49){
            weightPrice = 50;
        }
        else if (this.weight > 49 && this.weight )
    }

    Appliance.prototype.getFinalPrice = function (){
        
    }



}

Appliance.BASE_PRICE = 100;
Appliance.ENERGY_CONSUPTION_A = 100;
Appliance.ENERGY_CONSUPTION_B = 80;
Appliance.ENERGY_CONSUPTION_C = 60;
Appliance.ENERGY_CONSUPTION_D = 50;
Appliance.ENERGY_CONSUPTION_E = 30;
Appliance.ENERGY_CONSUPTION_F = 10;