function obtenerNumeroAleatorio(min, max) {
	return parseInt(Math.random() * ((max + 1) - min) + min);
}