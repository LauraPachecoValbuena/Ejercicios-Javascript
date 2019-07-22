const CLIENTE_TORRENT = "clienteTorrent";

function saveTorrents(clienteTorrent){
	let jClienteTorrent = clienteTorrent.toJSONObject();
	jClienteTorrent = JSON.stringify(jClienteTorrent); //convertir de json objeto a json texto
	
	localStorage.setItem(CLIENTE_TORRENT, jClienteTorrent);	
}



function retrieveTorrents(){
	let jClienteTorrent = localStorage.getItem(CLIENTE_TORRENT);
	
	jClienteTorrent = JSON.parse(jClienteTorrent); //convertir de json texto a json objeto
	
	let clienteTorrent = new TorrentClient(jClienteTorrent);
	
	return clienteTorrent;
}