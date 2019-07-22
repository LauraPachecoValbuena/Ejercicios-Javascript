function Playlist(name){
	this.name = name;
	this.songs = new Array();	
	this.cancionActual = 0;
	
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
	
	Playlist.prototype.removeSong = function (song){
		let indice = null; // es mi flag.  // AL INDICE LE DOY UN VALOR NULO PARA QUE PARE EL BUCLE.
		for (let i = 0;i < this.songs.length && indice == null;i++) {  
			if (this.songs[i].getId() == song.getId()) {
				indice = i;
				
			}
		}
		if (indice != null){
			this.songs.splice(indice,1);
		}
	}
	

	Playlist.prototype.shuffle = function (){
	//el archivo utilidades.js es donde está la funcion de los numeros aleatorios. 
	
		let newDatos = new Array ();
		let originalSize = this.song.length;
		 let i = 0;
		  
		 while (i < originalSize){
			  //genero un numero aleatorio entre 0 y el tamaño del array original.
			  let alea = obtenerNumeroAleatorio(0, this.song.length -1);
			  console.log(this.song);
		  
			  //usar ese aleatorio para sacar un elemento del array usando  splice.
			  let song = this.song.splice(alea, 1);  //aqui estoy sacando del array  empieza en el aleatorio y me devuelve un array con un valor.
			  console.log(typeof(song));
		  
			  song = song[0]; //ésto es para sacar el valor del array en el indice 0.
			  console.log(song);
			  console.log(typeof(song));
		  
			  newDatos.push(song) //aqui estoy metiendo el valor que he sacado arriba (dato=dato[0] en el nuevo array=newDatos)
			  console.log(newDatos);
		  
			  i++
		}
		this.song = newDatos;
		
		console.log(this.songs);
		
		this.cancionActual = 0;
	}

	Playlist.prototype.nextSong = function (){
		this.cancionActual++;
		if (this.songs.length == this.cancionActual){
			this.cancionActual = 0;
		}
		return this.songs[this.cancionActual];
	}


	Playlist.prototype.orderByDuration = function (){
		this.songs.sort (
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
		return this.songs[this.cancionActual]
					
	}



	Playlist.prototype.print = function(song){
		for (let i = 0;i < this.songs.length;i++) {
			console.log(this.songs[i].print());
		}
	}
}