function Figura(color){
	this.color = color;
	
	Figura.prototype.getColor = function (){
		return this.color;
	}
	
	Figura.prototype.setColor = function (color){
		this.color = color;
	}
}