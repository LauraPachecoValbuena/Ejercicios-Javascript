function Rectangulo (lado, base, color){
    this.lado = lado;
    this.base = base;
    this.color = color;
    

    Rectangulo.prototype.CalcularPerimetro = function () {
        console.log ('El perimetro del rectangulo es: ' + 2 * (this.lado + this.base));
    }

    Rectangulo.prototype.CalcularArea = function () {
        console.log ('El area del rectangulo es: ' + (this.lado * this.base));
    }

    Rectangulo.prototype.SacarColor = function () {
        console.log('Soy de color: ' + this.color);
    }

}