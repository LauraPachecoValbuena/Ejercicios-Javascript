function Netflix(nombreUsuario, pass){
	this.nombreUsuario = nombreUsuario;
	this.pass = pass;
	this.playlist = new Array();
	
	Netflix.prototype.addCapitulo = function(capitulo){
		this.playlist.push(capitulo);
	}
	
	Netflix.prototype.play = function(capitulo){
		for (let i = 0; i < this.playlist.length; i++){
			this.playlist[i].verCapitulo();
			console.log(this.playlist[i].obtenerNombre());
		}			
	}
	
	
}