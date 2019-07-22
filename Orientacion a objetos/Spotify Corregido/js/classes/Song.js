//clase Song
function Song (id, title, band, duration, rating){
	//t?tulo, grupo, duraci?n y valoraci?n (0-5 estrellas), y a continuaci?n:
	this.id = id;
	this.title = title;
	this.band = band;
	this.duration = duration; //segundos!!!!!!!!
	this.rating = 0;
	
	if (rating >= 0 && rating <= 5){
		this.rating = rating;
	}
	
	
	Song.prototype.print = function(){
		return this.id + " La cancion " + this.title + "me encanta y en Apple s?lo le dan " + this.rating + " estrellas";
	}
	
	Song.prototype.getDuration = function (){
		return this.duration;
	}
	
	Song.prototype.getId = function (){
		return this.id;
	}
	
}

