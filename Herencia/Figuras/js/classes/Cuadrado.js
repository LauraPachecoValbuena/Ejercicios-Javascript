function Cuadrado (lado, color){
    this.lado = lado;
    this.color = color;
    

    Cuadrado.prototype.CalcularPerimetro = function () {
        console.log ('El perimetro del cuadrado es: ' + (this.lado * 4));
    }

    Cuadrado.prototype.CalcularArea = function () {
        console.log ('El area del cuadrado es: ' + (this.lado * 2));
    }

    Cuadrado.prototype.SacarColor = function () {
        console.log('Soy de color: ' + this.color);
    }

}