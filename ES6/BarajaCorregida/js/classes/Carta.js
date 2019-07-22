class Carta {
	constructor(numero, palo, repartida = false){
		this._numero = numero;
		this._palo = palo;
		this._repartida = repartida;
	}
	
	get numero (){
		return this._numero;
	}
	
	get palo (){
		return this._palo;
	}
	
	repartir (){
		this._repartida = true;
	}
	
	verDatos(){
		return this._numero + " - " + this._palo;
	}
	
}

Carta.OROS = "oros";
Carta.BASTOS = "bastos";
Carta.COPAS = "copas";
Carta.ESPADAS = "espadas";