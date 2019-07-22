//clase libro//
function Libro (autor,titulo){
    //propiedades de la clase libro//
    this.autor = autor;
    this.titulo = titulo;
    //métodos de la clase libro//
    Libro.prototype.verAutor = function(){
        return this.autor;
    }

    Libro.prototype.verTitulo = function(){
        return this.titulo;
    }
}