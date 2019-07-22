// clase Speaker
function Speaker (){
    this.on = false;
    this.volume = 0;
  

    Speaker.prototype.turnOn = function (){
        this.on = true;
        this.volume = 20;
    }

    Speaker.prototype.turnOff = function (){
        this.on = false;
        this.volume = 0;
    }

    Speaker.prototype.getVolume = function (){
        return this.volume;
    }

    Speaker.prototype.increaseVolume = function (){
        if (this.volume < 100){
            this.volume++;
        }
    }

    Speaker.prototype.decreaseVolume = function (){
        if (this.volume > 0){
            this.volume--;
        }
    }

    Speaker.prototype.setVolume = function (volume){
        if (this.on){
            if (volume > 100){
                this.volume = 100;
            }
        }
        else if (volume >= 0 && volume <= 100){
            this.volume = volume;
        }
    }

    Speaker.prototype.setState = function (state){  //ésto es xa crearle la copia al altavoz original = let altavoz original.
        this.on = state;
    }

    Speaker.prototype.mute = function (){
        this.volume =0;
    }

    Speaker.prototype.print = function (){
        let text = 'apagado';
        if (this.on){
            text = 'encendidio';
        }
        return 'El altavoz está ' + text + 'y su volumen es ' + this.volume;
    }
// método que me devuelve una copia de altavoz.
    Speaker.prototype.copy = function (){
        let copy = new Speaker ();
        copy.setState(this.on);
        copy.setVolume (this.volume);

        return copy;
    }

}
