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


$(document). ready(function(){
  $('.slider').slick();
  $('.fotos').slick({
    rt1:true
  });
});
//$('.single-item').slick();

/*$('.slider').on('swiper',function(event,slick,direction){
  console.log(direction)
});
$('.slider').on('edge',function (event,slick,direction){
    console.log('edge was hit')
});

});*/
