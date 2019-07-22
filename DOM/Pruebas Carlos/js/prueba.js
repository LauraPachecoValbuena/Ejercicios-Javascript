function procesarDatos(){
	
	let nombre = document.getElementById("nombre").value;
	let apellidos = document.getElementById("apellidos").value;
	let comunidad = document.getElementById("comunidad").value;
	
	let user = new Usuario(null, nombre, apellidos, comunidad);

	verDatosJSON(user);	
	pintar(user);
	
}


function pintar(user){
	let span = document.createElement("span");
	span.innerHTML = user.getNombre() + " " + user.getApellidos() + " - " + user.getComunidad();
	console.log(span);
	
	let usersDiv = document.getElementById("datosUsers");
	usersDiv.appendChild(span);
	
	let br = document.createElement("br");
	usersDiv.appendChild(br);
}

function verDatosJSON(user){  //aqui creamos la funcion para pasar los datos a JSON.
	console.log(user);

	let jUser = user.toJSONObject();  //aqui estamops pidiendo que el let Juser declarado en usuario lo convierta en un objeto Json.

	console.log(jUser);

	jUser = JSON.stringify(jUser);  //aqui los convierte todo a string.

	console.log(jUser);

	sessionStorage.setItem("user", jUser);
}

function recuperarDatos(){  
	let jUser = sessionStorage.getItem("user");  //
	if(jUser){
	console.log(jUser);
	jUser = JSON.parse(jUser);//paso opuesto a stingify me lo vuelve a convertir en un objeto JSON en vez de string.
	let user = new Usuario (jUser);
	console.log(user);
	pintar(user);
	}
}