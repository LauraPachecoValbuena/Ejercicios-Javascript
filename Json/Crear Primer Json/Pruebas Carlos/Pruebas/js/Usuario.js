function Usuario(jUser, nombre, apellidos, comunidad){
	
	if (jUser){
		this.nombre = 	 jUser.nombre;
		this.apellidos = jUser.apellidos;
		this.comunidad = jUser.comunidad;
	}
	else {
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
	
	Usuario.prototype.toJSONObject = function(){
		let jUser = {};
		
		jUser.nombre = this.nombre;
		jUser.apellidos = this.apellidos;
		jUser.comunidad = this.comunidad;
		
		return jUser;
	}
}