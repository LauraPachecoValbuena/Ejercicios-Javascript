//clase Song
function Song(jSong, id, title, band, duration, rating) {
	
	if (jSong) {
		this.id = jSong.id;
		this.title = jSong.title;
		this.band = jSong.band;
		this.duration = jSong.duration; //segundos!!!!!!!!
		this.rating = jSong.rating;

	}
	else {
		//t?tulo, grupo, duraci?n y valoraci?n (0-5 estrellas), y a continuaci?n:
		this.id = id;
		this.title = title;
		this.band = band;
		this.duration = duration; //segundos!!!!!!!!
		this.rating = 0;
	}


	if (rating >= 0 && rating <= 5) {
		this.rating = rating;
	}


	Song.prototype.print = function () {
		return this.id + " La cancion " + this.title + " me encanta y en Apple s?lo le dan " + this.rating + " estrellas";
	}

	Song.prototype.getDuration = function () {
		return this.duration;
	}

	Song.prototype.getId = function () {
		return this.id;
	}
	Song.prototype.getTitle = function () {
		return this.title;
	}
	Song.prototype.getBand = function () {
		return this.band;
	}
	Song.prototype.getRating = function () {
		return this.rating;
	}

	Song.prototype.toJSONObject = function () {
		let jSong = {};

		jSong.id = this.id;
		jSong.title = this.title;
		jSong.band = this.band;
		jSong.duration = this.duration;
		jSong.rating = this.rating;

		return jSong;
	}

}