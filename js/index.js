var login;


function validacion(nombre, contrasena) {
     var contrasenanumero = Number(contrasena);
     if (nombre === 'valle' && contrasenanumero === 1234) {
          estoylogueado = true;
  } else {
     estoylogueado = false;
  }
}
