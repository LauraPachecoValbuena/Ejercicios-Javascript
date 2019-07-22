function Playlist(jPlaylist, name){	
	this.songs = new Array();
	this.cancionActual = 0;
	
	if (jPlaylist){
		this.name = jPlaylist.name;
		for (let jSong of jPlaylist.songs){  //la .songs es la misma que ésta jPlaylist.songs = jSongs; del toJSONObject.
			let song = new Song(jSong);
			this.songs.push(song);
		}
	}
	else {
		this.name = name;
	}
		
	
	
	Playlist.prototype.top = function(){
		//recorrer el array de canciones
		//si encuentro un grupo nuevo, lo añado
		//si encuentro un grupo que ya existe, incremento aparición
		let tops = new Array();//array de objetos TOP
		for (let i = 0; i < this.songs.length; i++){
			if (this.checkGroup(this.songs[i], tops)){ //el grupo ya existe, lo incremento
				this.addAppearance(this.songs[i], tops);
			}
			else { //el grupo no existe, lo creo
				this.createGroup(this.songs[i], tops);
			}	
		}	
		
		tops.sort(
			function (a,b){
				return b.getAppearances() - a.getAppearances();
			}
		);
		console.log(tops);
		
		tops = tops.splice(0,5);
		
		console.log(tops);
		
		return tops;
	}
	
	Playlist.prototype.addAppearance = function(song, tops){
		let encontrado = false;
		for (let i = 0; i < tops.length && !encontrado; i++){
			if (song.getBand() == tops[i].getBand()){
				tops[i].addAppearance();
				console.log("nueva aparicion de " + tops[i].getBand());
				encontrado = true;
			}
		}
		
	}	
	
	Playlist.prototype.createGroup = function(song, tops){
		let nuevoGrupo = new Top(song.getBand());
		tops.push(nuevoGrupo);
		console.log("nuevo grupo " + song.getBand());
	}
	
	Playlist.prototype.checkGroup = function(song, tops){
		let yaExiste = false;
		for (let i = 0; i < tops.length && !yaExiste; i++){
			if (song.getBand() == tops[i].getBand()){
				yaExiste = true;
			}
		}
		
		return yaExiste;
	}
	
	
	Playlist.prototype.getName = function(){
		return this.name;
	}
	
	Playlist.prototype.getSongs = function(){
		return this.songs;
	}
	
	Playlist.prototype.addSong = function(song){
		this.songs.push(song);
	}
	
	Playlist.prototype.getDuration = function (){
		let totalDuration = 0;
		
        for (let i = 0; i < this.songs.length ; i++){
            totalDuration += this.songs[i].getDuration();
        }
		
        return totalDuration; 
	}

	
	Playlist.prototype.removeSong = function (id){
		let indice = null;
		for (let i = 0; i < this.songs.length && indice == null; i++) {
			if (this.songs[i].getId() == id) {
				indice = i;
			}
		}
		
		if (indice != null){
			this.songs.splice(indice,1);
		}
		
	}
	
	Playlist.prototype.shuffle = function (){

		let nuevo = new Array();

		let originalSize = this.songs.length;
		let i = 0;
		while (i < originalSize){
			//genero un numero aleatorio entre 0 y el tamaño del array original
			let alea = obtenerNumeroAleatorio(0, this.songs.length - 1);

			let song = this.songs.splice(alea, 1);

			song = song[0];
			
			nuevo.push(song);
			
			i++;
		}

		this.songs = nuevo;

		console.log(this.songs);	

		this.cancionActual = 0;
	}
	
	Playlist.prototype.nextSong = function(){
		this.cancionActual++;
		if (this.songs.length == this.cancionActual){
			this.cancionActual = 0;
		}
		
		return this.songs[this.cancionActual];
	}
	
	
	Playlist.prototype.orderByDuration = function(){
		this.songs.sort(
			function (a,b){
				if (a.getDuration() > b.getDuration()){
					return -1;
				}
				else if (a.getDuration() < b.getDuration()){
					return 1;
				}
				else {
					return 0;
				}
			}
		);
		
		return this.songs[this.cancionActual];
	}
	
	
	Playlist.prototype.print = function(song){
		for (let i = 0;i < this.songs.length;i++) {
			console.log(this.songs[i].print());
		}
	}
	
	Playlist.prototype.toJSONObject = function(){
		let jPlaylist = {};
		
		jPlaylist.name = this.name;
		
		let jSongs = new Array();
		for (let song of this.songs){
			let jSong = song.toJSONObject();
			jSongs.push(jSong);
		}
		jPlaylist.songs = jSongs;
		
		return jPlaylist;
	}
}

