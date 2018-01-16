var login;


function validacion(nombre, contrasena) {
     var contrasenanumero = Number(contrasena);
     if (nombre === 'valle' && contrasenanumero === 1234) {
          estoylogueado = true;
  } else {
     estoylogueado = false;
  }
}

// carrusel//
var cambiarcolor;

$(document). ready(function(){
  $('.slider').slick();
});


//$( "#dorado" ).click(function() {
// $( 'cambiarcolor'(#dorado);
//});
