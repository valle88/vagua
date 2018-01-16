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

function cambiarcolor(color){
  

  if (color==='dorado') {
    $('#dorado-img').show();
    $('#negro-img').hide();
    $('#rojo-img').hide();


  }
  if (color==='negro') {
      $('#negro-img').show();
      $('#dorado-img').hide();
      $('#rojo-img').hide();
    }
  if (color==='rojo') {
      $('#rojo-img').show();
      $('#negro-img').hide();

        }
      }








$(document). ready(function(){
  $('.slider').slick();
  $('#dorado-img').hide();
  $('#negro-img').hide();
  $('#rojo-img').hide();

  $("#dorado").click(function() {
    cambiarcolor('dorado');
  });
  $("#negro").click(function() {
    cambiarcolor('negro');
  });
  $("#rojo").click(function() {
    cambiarcolor('rojo');
  });
});
