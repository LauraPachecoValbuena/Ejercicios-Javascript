function TorrentClient(jTorrentClient){
	this.torrents = new Array();
	
	if (jTorrentClient){		
		for (let jTorrent of jTorrentClient.torrents){
			let torrent = new Torrent(jTorrent);
			this.torrents.push(torrent);
		}
	}


	TorrentClient.prototype.addTorrent = function(torrent){
		this.torrents.push(torrent);
	}
	
	TorrentClient.prototype.getTorrents = function(){
		return this.torrents;
	}
	
	
	TorrentClient.prototype.orderByPercentage = function(){
		//descendente!
		this.torrents.sort(
			function (a,b){
				return b.getPercentage() - a.getPercentage();
			}
		);
	}
	
	TorrentClient.prototype.orderByName = function(){
		//descendente!
		this.torrents.sort(
			function (a,b){
				if (a.getTitle() > b.getTitle()){
					return 1;
				}
				else if (a.getTitle() < b.getTitle()){
					return -1;
				}
				else {
					return 0;
				}				
			}
		);
	}
	
	
	TorrentClient.prototype.deleteTorrent = function(id){
		let index = null;
		let found = false;
        for (let i = 0;i < this.torrents.length && !found;i++) {
            if (this.torrents[i].id == id) {
                index = i;
                found = true;
            }
        }
        if (found) {
            this.torrents.splice(index,1);
        } 
	}
	
	TorrentClient.prototype.toJSONObject = function(){
		let jTorrentClient = {};
		
		let jTorrents = new Array();
		for (let torrent of this.torrents){
			let jTorrent = torrent.toJSONObject();
			jTorrents.push(jTorrent);
		}
		
		jTorrentClient.torrents = jTorrents;

		
		return jTorrentClient;
	}
	
}