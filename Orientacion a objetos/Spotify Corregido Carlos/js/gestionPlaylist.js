function cargarDatosIniciales(){	
	playlist = StorageManager.retrievePlaylist();

	if (playlist == null) {
		playlist =  new Playlist(null,"Rocking w/ Charles");
	}

	pintarPlaylist();
	
	
}


function addSong(){
	let title = document.getElementById("title").value;
	let band = document.getElementById("band").value;
	let duration = document.getElementById("duration").value;
	let rating = document.getElementById("rating").value;
	
	let song = new Song(null, new Date().getTime(), title, band, duration, rating);
	
	playlist.addSong(song);

	StorageManager.savePlaylist(playlist);
	
	pintarPlaylist();

	
}



function pintarPlaylist(){
	document.getElementById("playlistName").innerHTML = playlist.getName();
	
	let div = document.getElementById("songList");
	div.innerHTML = "";
	
	let canciones = playlist.getSongs();
	
	for (let i = 0; i < canciones.length; i++){
		let cancion = canciones[i];
		
		let p = document.createElement("p");
		p.innerHTML = cancion.getTitle() + " - " + cancion.getBand();

		//creamos botón
		let butt = document.createElement("input");
		butt.setAttribute("type","button");
		butt.setAttribute("onclick","deleteSong(" +cancion.getId()+");");
		butt.value = "Eliminar canción";
		p.appendChild(butt);
		butt = null;
		
		
		
		div.appendChild(p);
		
	}
}


function deleteSong(id){
	playlist.removeSong(id);
	StorageManager.savePlaylist(playlist);  
	pintarPlaylist();
}