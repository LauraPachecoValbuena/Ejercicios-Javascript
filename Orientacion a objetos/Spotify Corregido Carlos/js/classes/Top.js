function Top(bandName){
	this.bandName = bandName;
	this.appearances = 1;
	
	Top.prototype.getBand = function(){
		return this.bandName;
	}
	
	Top.prototype.getAppearances = function(){
		return this.appearances;
	}
	
	Top.prototype.addAppearance = function(){
		this.appearances++;
	}
}