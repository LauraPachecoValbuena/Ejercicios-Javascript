function StorageManager() {}

StorageManager.PLAYLIST = "playlist"  //ésta es la constante de clase.

StorageManager.savePlaylist = function (playlist) {
	let jPlaylist = playlist.toJSONObject();
	jPlaylist = JSON.stringify(jPlaylist);

	localStorage.setItem(StorageManager.PLAYLIST, jPlaylist);

}


StorageManager.retrievePlaylist = function () {
	let jPlaylist = localStorage.getItem(StorageManager.PLAYLIST);
	let pl = null;

	if (jPlaylist){
		jPlaylist = JSON.parse(jPlaylist);
		pl = new Playlist(jPlaylist);
	}
	
	return pl;


}
