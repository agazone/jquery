'use strict';

$(function() {
  
  //wybieranie elementu z kolekcji za pomoca metody eq()  
  var eq = $('body').find('p').eq(1).css({'color': 'green'});
  console.log(eq);
  
  
  //Petla each dodajaca do paragrafow klase z kolejnym numerem
  $('p').each( function(index) {
    $(this).addClass('paragraf- ' + index);
    console.log($(this));
  })
});