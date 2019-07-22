function addTorrent(){
	let title = document.getElementById("title").value;
	let percent = document.getElementById("percent").value;
	let totalSize = document.getElementById("totalSize").value;
    let typeFile = document.getElementById("typeFile").value;
    

	
	let torrent = new Torrent(null,title, percent, totalSize, typeFile,);
	

	listaTorrents.addTorrent(torrent);
	console.log(listaTorrents);

	

	pintarClienteTorrent();

	verDatosJSON(torrent);
	pintarClienteTorrent(torrent);
	

}


function pintarClienteTorrent(){
	document.getElementById('clienteTorrentName').innerHTML = 'Lista de torrents';

	let div = document.getElementById('torrent');
	div.innerHTML = "";

	for (let i = 0; i < listaTorrents.getTorrents().length; i++){	

		let p = document.createElement("p");
		p.innerHTML = listaTorrents.getTorrents()[i].print();

		div.appendChild(p);
	}

	
}

function orderByPercent(){
	listaTorrents.orderByPercent2(torrent);
	pintarClienteTorrent();
}

function orderByTitle(){
	listaTorrents.orderByTitle2(torrent);
	pintarClienteTorrent();
}

function verDatosJSON(torrent){
	let jUser = torrent.toJSONObject();

	jUser = JSON.stringify(jUser);

	sessionStorage.setItem("torrent", jUser);
}

function recuperarDatos(){
	let jUser = sessionStorage.getItem("torrent");
	console.log(jUser);
	jUser = JSON.parse(jUser);
	console.log(jUser);
	let torrent = new Torrent (jUser);
	console.log(torrent);
	pintarClienteTorrent(torrent);
}