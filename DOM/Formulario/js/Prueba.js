 function procesarDatos(){
   // console.log('Hola'); cuando le doy al boton de enviar del formulario en consola aparece hola.

   let nombre = document.getElementById('nombre').value;
   let apellidos = document.getElementById('apellidos').value;
   let comunidad = document.getElementById('comunidad').value;
   console.log(nombre, apellidos, comunidad);

   pintar(nombre, apellidos, comunidad);
   
}

function pintar(nombre, apellidos, comunidad){
    let span = document.createElement("span");
    span.innerHTML = nombre + " " + apellidos + " - " + comunidad;
    console.log(span);

    let usersDiv = document.getElementById('datosUsers');
    usersDiv.appendChild(span);

    let br = document.createElement("br");
    usersDiv.appendChild(br);
}