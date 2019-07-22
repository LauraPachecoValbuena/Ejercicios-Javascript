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
	
	let usersDiv = document.getElementById("datosUsers");
	usersDiv.appendChild(span);
	
	let br = document.createElement("br");
	usersDiv.appendChild(br);
}

function verDatosJSON(user){
	let jUser = user.toJSONObject();
			
	jUser = JSON.stringify(jUser);
	
	sessionStorage.setItem("user", jUser);	
}

function recuperarDatos(){
	let jUser = sessionStorage.getItem("user");
	console.log(jUser);
	jUser = JSON.parse(jUser);
	console.log(jUser);
	let user = new Usuario(jUser);
	console.log(user);
	pintar(user);
}

















