function getPreviousSessionData(){	
	let torrentsAnteriorSesion = retrieveTorrents();
	
	if (torrentsAnteriorSesion){
		client = torrentsAnteriorSesion;
		parseTorrentList();
	}
}


function addTorrent(){
	let title = document.getElementById("title").value;
	let completed = document.getElementById("completed").value;
	let size = document.getElementById("size").value;
	let fileType = document.getElementById("fileType").value;
	
	let torrent = new Torrent(null, new Date().getTime(), title, completed, size, fileType);

	client.addTorrent(torrent);
	
	saveTorrents(client);

	parseTorrentList();
}

function parseTorrentList(){
	//recorro la lista de torrents y le voy diciendo que los pinte	
	document.getElementById("torrentList").innerHTML = "";	
	
	let torrents = client.getTorrents();
	for (let torrent of torrents){
		addToTorrentList(torrent);
	}
	
}

function addToTorrentList(torrent){	
	let p = document.createElement("p");
	p.innerHTML = torrent.toString();
	
	let butt =  document.createElement("input");
	butt.setAttribute("type", "button");
	butt.setAttribute("onclick", "deleteTorrent("+torrent.id+");");
	butt.value = "Eliminar Torrent";
	p.appendChild(butt);
	butt = null;
	
	let div = document.getElementById("torrentList");
	div.appendChild(p);
	div = null;
}

function orderByPercentage(){
	client.orderByPercentage();
	parseTorrentList();
}

function orderByName(){
	client.orderByName();
	parseTorrentList();
}


function deleteTorrent(id){
	client.deleteTorrent(id);
	saveTorrents(client);
	parseTorrentList();
}

function ver(){
	let jTorrentClient = client.toJSONObject();
	console.log(jTorrentClient);
	jTorrentClient = JSON.stringify(jTorrentClient);
	console.log(jTorrentClient);
}
