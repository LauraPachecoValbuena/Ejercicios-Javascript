//clase semaforo
function Semaforo(){  
    //propiedades de la clase semaforo    //aqui declaramos las variables
    this.luzRoja = true;  // la luz roja está encendida
    this.luzAmbar = false; // la luz ambar está apagada
    this.luzVerde = false; //la luz verde está  apagada

    //métodos de la clase semaforo

    Semaforo.prototype.pasarAVerde = function () {  //son metodos, que hacen cosas. En este caso pasar la luz a verde
        this.luzRoja = false; //aqui le estamso diciendo que la luz roja está apagada
        this.luzVerde = true; //aquí la verde está encendida
    }

    Semaforo.prototype.pasarARojo = function () {    //es otro metodo, ene ste caso pasa a rojo. aqui estoy encapsulando los comportamientos.
        this.luzVerde = false;

        let cont = 0;
        while (cont < 3) {
            this.luzAmbar = true;
            this.luzAmbar = false;
            cont++;
        }
        this.luzRoja = true;
    }
    Semaforo.prototype.ver = function () {   //es otro metodo.
        let estadoRoja = 'apagada';
        if (this.luzRoja == true) {
            estadoRoja = 'encendida';
        }

        let estadoAmbar = 'apagada';
        if (this.luzAmbar == true) {
            estadoAmbar = 'encendida';
        }

        let estadoVerde = 'apagada';
        if (this.luzVerde == true) {
            estadoVerde = 'encendida';
        }

        let datos = 'R[ ' + estadoRoja + '] A[' + estadoAmbar + '] V[' + estadoVerde + ']';
        console.log(datos);
    }

}