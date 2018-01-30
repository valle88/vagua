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

function cambiarcolor(elementoSelecionado) {
    var idColor = '#' + $(elementoSelecionado).attr('data-image');
    $('.fotos > div > img').hide();
    $(idColor).show();
    /*
    if (color === 'dorado') {
        $('#dorado-img').show();
        $('#negro-img').hide();
        $('#rojo-img').hide();


    }
    if (color === 'negro') {
        $('#negro-img').show();
        $('#dorado-img').hide();
        $('#rojo-img').hide();
    }
    if (color === 'rojo') {
        $('#rojo-img').show();
        $('#negro-img').hide();
        $('#dorado-img').hide();
    }
    */
}


/*$(document).ready(function () {
    $('.slider').slick({
      dots:true,
      arrows:false,
      autoplay:true
    });
  });*/
$(document).ready(function () {

  var slider = tns({
    container: '.valle-slider',
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 2000,
    mouseDrag: true,
    slideBy: 'page',
    autoplay: true
  });

  // $('#dorado-img').hide();
  $('#negro-img').hide();
  $('#gris-img').hide();

  $('.selector-color i').click(function () {
      cambiarcolor(this);
  });
  $.cookieBar({
    message: 'Nosotros utilizamos cookies para ayudar',
    acceptButton: true,
    acceptText: 'yo acepto',
    acceptFunction: null,
    declineButton: false,
    declineText: 'Disable Cookies',
    declineFunction: null,
    policyButton: true,
    expireDays: 365,
    policyText: 'Mas informacion',
    policyURL: '/privacy-policy/',
    renewOnVisit: false,
    bottom: true,
    fixed: true,
    zindex: '',


  });
});



    // $("#dorado").click(function () {
    //     cambiarcolor('dorado');
    // });
    // $("#negro").click(function () {
    //     cambiarcolor('negro');
    // });
    // $("#rojo").click(function () {
    //     cambiarcolor('rojo');
    // });

var options = {
  activeClass: 'active'
}
var elm = document.querySelector('.menu');
var ms = new MenuSpy(elm, options);
