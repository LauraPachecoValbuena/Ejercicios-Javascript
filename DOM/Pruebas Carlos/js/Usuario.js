function Usuario (jUser,nombre, apellidos, comunidad){
    //esto es un constructor.
    if (jUser){ //aqui viene del navegador el usuario como dato json.
        this.nombre = jUser.nombre;  //aqui estamos creando las propiedades que vienen del navegador como json a dato normal.
        this.apellidos = jUser.apellidos;
        this.comunidad = jUser.comunidad;
    }
    else { //aqui v
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.comunidad = comunidad;
    }

    Usuario.prototype.getNombre = function(){
        return this.nombre;
    }
    Usuario.prototype.getApellidos = function(){
        return this.apellidos;
    }
    Usuario.prototype.getComunidad = function(){
        return this.comunidad;
    }

    Usuario.prototype.toJSONObject = function (){ //aqui estamos creando un objeto Json
        let jUser = {};

        jUser.nombre = this.nombre;
        jUser.apellidos = this.apellidos;
        jUser.comunidad = this.comunidad;

        return jUser;
    }
   
}