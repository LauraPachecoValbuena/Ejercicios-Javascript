class Baraja{
    constructor() {
        this._cartas = [];

        const palos = [Carta.OROS, Carta.BASTOS, Carta.ESPADAS, Carta.COPAS];
        //creao La Baraja.
        for (let palo of palos) {
            for (let i = 1; i < 11; i++) {
                this._cartas.push(new Carta(i,  palo));
            }
        }

        Baraja.incrementarContador();
    }

    get cartas(){
        return this._cartas;
    }

    verCartas(){
        this._cartas.map(carta => console.log(carta.verDatos())
        );
    }

    shuffle(){  //ésto es para barajar las cartas.
        this._cartas = this._cartas.map(
            carta => [Math.random(), carta]
        );

        this._cartas.sort (
            (a,b) => a[0] - b[0]
        );
        
        this._cartas = this._cartas.map(
            a => a[1]
        );
    }

    static incrementarContador() {  //Métdo estatico = va a ser el mismo xa todas las clases. Son comunes a todos los objetos.
        this.cont++;
    }

    static verContador () {  ////Métdo estatico = va a ser el mismo xa todas las clases. Son comunes a todos los objetos.
        return this.cont;
    }

    static crearBaraja () {
        return new Baraja(); //patron constructor un método que me devuelve un new....
    }

    static repartir (){
        let baraja = new Baraja();
        baraja.shuffle();
        baraja.cartas.map (
            carta => carta.repartir()
        );
        baraja.verCartas();
        console.log(baraja);
        return baraja;
    }
}

Baraja.cont = 0;