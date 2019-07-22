class Baraja{
	constructor(){
		this._cartas = [];
		
		const palos = [Carta.OROS, Carta.COPAS, Carta.ESPADAS, Carta.BASTOS];
		//creo la baraja
		for (let palo of palos){
			for (let i = 1; i < 11; i++){
				this._cartas.push(new Carta(i, palo));
			}
		}		
		
		Baraja.incrementarContador();
	}
	
	get cartas (){
		return this._cartas;
	}
	
	verCartas(){
		this._cartas.map(
			carta => console.log(carta.verDatos())
		);
	}
	
	shuffle(){
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
	
	static incrementarContador() {
		this.cont++;
	}
	
	static verContador () {
		return this.cont;
	}
	
	static crearBaraja (){
		return new Baraja();
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