function mostrarPaginaPrincipal() {
    animacionInicio.style.opacity = 1; 
    setTimeout(() => {
        animacionInicio.style.transition = 'opacity 1s ease-in-out'; 
        animacionInicio.style.opacity = 0; 
        setTimeout(() => {
            animacionInicio.style.display = 'none'; 
            seleccionRol.style.display = 'block'; 
        }, 1000); 
    }, 3000); 
}


window.addEventListener('load', mostrarPaginaPrincipal);


  $('#map-icon').click(function() {
    $('#dialog-box').toggle();
  });

  $('.close').click(function() {
    $('#dialog-box').hide();
  });



  function iniciarMap(){
    var coord = {lat:-33.5211 ,lng: -70.5806};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}