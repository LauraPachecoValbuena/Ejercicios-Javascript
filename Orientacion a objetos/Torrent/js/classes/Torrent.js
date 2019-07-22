function Torrent(jUser,title,percent,totalSize,typeFile){
    if (jUser){
        this.title = jUser.title;
        this.percent = jUser.percent;
        this.totalSize = jUser.totalSize;
        this.typeFile = jUser.typeFile;
    }
    else {
        this.title = title;
        this.percent = percent;
        this.totalSize = totalSize;  //en bytes.
        this.typeFile = typeFile;
    }

    
    Torrent.prototype.getTitle = function (){
		return this.title;
    }
    
   Torrent.prototype.getPercent = function (){
		return this.percent;
    }
    
    Torrent.prototype.getTotalSize = function (){
		return this.totalSize;
    }
    
    Torrent.prototype.getTypeFile = function (){
        return this.mostrarTipo();
        
    }

    Torrent.prototype.toJSONObject = function (){
        let jUser = {};

        jUser.title = this.title;
        jUser.percent = this.percent;
        jUser.totalSize = this.totalSize;
        jUser.typeFile = this.typeFile;
        
        return jUser;

    }
    
    Torrent.prototype.print = function(){
        return this.getTitle() + " " + this.getPercent() + " " + this.getTotalSize() + " " +  this.getTypeFile();
    }

    Torrent.prototype.mostrarTipo = function(){  //esto lo creamos para pasar nuestra info (que está en foma de número 1, 2, 3,4) a texto. la info son las constantes de abjo 
        let texto = "";
        switch(this.typeFile){    //No es la mejor manera de hacerlo.
            case Torrent.JPG:
                texto = 'JPG';
                break;
            case Torrent.AVI:
                texto = 'AVI';
                break;
            case Torrent.MP4:
                texto = 'MP4';
                break;
            default:
                texto = 'Desconocido';
        }
        return texto;
    }





}

//Constantes de la clase Torrent.

Torrent.JPG = "1";
Torrent.AVI = "2";
Torrent.MP4 = "3";