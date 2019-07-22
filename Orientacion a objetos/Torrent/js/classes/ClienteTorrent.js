function ClienteTorrent(name){
    this.torrents = new Array ();


    ClienteTorrent.prototype.addTorrent = function(dato){
		this.torrents.push(dato);
  }

  ClienteTorrent.prototype.getTorrents = function(){
		return this.torrents;
  }
  ClienteTorrent.prototype.getPercent = function (){
		return this.percent;
  }
  ClienteTorrent.prototype.getTitle = function (){
		return this.title;
  }



  ClienteTorrent.prototype.orderByPercent2 = function(){  //ordena el array por Numero porcentaje
    this.torrents.sort(
        function (a,b){
            return b.getPercent() - a.getPercent();
        }
    );
    return this.torrents;
    
  }
  console.log(this.torrents);

  ClienteTorrent.prototype.orderByTitle2 = function(){  //ordena el array alfabeticamente primero a,b,c....
    this.torrents.sort(
        function (a,b){
            if (a.getTitle().toLowerCase() > b.getTitle()){
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
    return this.torrents;
  }
  

  


}

