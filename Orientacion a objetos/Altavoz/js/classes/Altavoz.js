//clase Altavoz
function Altavoz(estado, volumen){
    //constructor 1
    this.estado = false;
  
    //constructor 2
    if (estado != undefined){
        this.estado = estado;
    }
    
     if (volumen >= 0 && volumen <= 100){
        this.volumen = volumen;
     }

    Altavoz.prototype.encender = function(){
        this.estado = true;
        this.volumen = 20;
    }
    Altavoz.prototype.apagar = function(){
        this.estado = false;
        this.volumen = 0;
    }
    Altavoz.prototype.getVolumen = function(){
        return this.volumen;
    }
    Altavoz.prototype.subirVolumen = function(){
        if (this.volumen <=99){
            this.volumen++;
        }
    }
    Altavoz.prototype.bajarVolumen = function(){
        if (this.volumen >0){
            this.volumen--; 
        }
    }
    Altavoz.prototype.establecerVolumen = function(volumen){
        if (volumen >= 0 && volumen <= 100){
            this.volumen = volumen;
        }
    }
    Altavoz.prototype.mute = function(){
        this.volumen = 0;
    }
    Altavoz.prototype.getEstado = function(){
        if (this.estado){
            return 'encendido';
        }
        else {
            return 'apagado';
        }
        
    }
    Altavoz.prototype.print = function(){
        console.log('El altavoz esta ' + this.getEstado() + ' y su volumen es ' + this.getVolumen());

    }









}
