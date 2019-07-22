function Torrent (jTorrent, id, title, completed, size, fileType) {
	if (jTorrent){
		this.id = jTorrent.id;
		this.title = jTorrent.title;	
		this.size = jTorrent.size; 
		this.completed = jTorrent.completed;	
		this.fileType = jTorrent.fileType;	
	}
	else {
		//variables de clase
		this.id = id;
		this.title = title;
		
		this.size = 0; //bytes	
		if (size && size > 0){
			this.size = size;
		}
		
		this.completed = 0;
		if (completed && completed >= 0 && completed <= 100){
			this.completed = completed;
		}		
		
		this.fileType = Torrent.DEFAULT;
		if (fileType) {
			let aux = parseInt(fileType);
			if (aux == Torrent.UNKNOWN || 
					aux == Torrent.BD_ERROR || 
					aux == Torrent.JPG ||  
					aux == Torrent.AVI || 
					aux == Torrent.MP4){
						
				this.fileType = aux;
			}
		}
	}
	
	
	//métodos
	Torrent.prototype.toString = function(){
		return this.id + " - " + this.title + " - " + this.size + " - " + this.completed + " - " + this.typeToText();
	}
	
	Torrent.prototype.getPercentage = function(){
		return this.completed;
	}
	
	Torrent.prototype.getTitle = function(){
		return this.title;
	}
	
	Torrent.prototype.typeToText = function(){
		let texto = "";
		switch(this.fileType){			
			case Torrent.JPG:
			case "1":
				texto = ".JPG";
				break;
						
			case Torrent.AVI:
				texto = ".AVI";
				break;
						
			case Torrent.MP4:
				texto = ".MP4";
				break;			
			
			case Torrent.DEFAULT:
			case Torrent.UNKNOWN:
			case Torrent.BD_ERROR:
			default:
				texto = "Desconocido";
				break;
			
		}
		
		return texto;
	}
	
	
	Torrent.prototype.toJSONObject = function(){
		let jTorrent = {};
		
		jTorrent.id = this.id;
		jTorrent.title = this.title;	
		jTorrent.size = this.size; 
		jTorrent.completed = this.completed;	
		jTorrent.fileType = this.fileType;	
		
		return jTorrent;
	}
}

Torrent.DEFAULT = -2;
Torrent.UNKNOWN = -1;
Torrent.BD_ERROR = 0;
Torrent.JPG = 1;
Torrent.AVI = 2;
Torrent.MP4 = 3;

