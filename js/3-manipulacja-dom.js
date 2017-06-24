'use strict';


jQuery(document).ready(function () {

  //pobranie textu
  var textParagrafPierwszy = $("#paragraf").text();
  console.log(textParagrafPierwszy);

  //dodawanie textu
  $(".paragraf").text(textParagrafPierwszy);

  //dodawanie HTML
  $(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br>  HTML");

  //dodawanie tresci na koncu selectora
  $(".paragrafnext").append(" Tresc na koncu dodana").addClass('blue');

  //dodawanie tresci za selectorem
  $(".paragrafnext").after("Dodana tresc za selektorem");

  //usowanie elementu i jego zawartosci
  $(".strong").remove();

  //usowanie elementu i tylko jego zawartosci
  $(".paragraf").empty();

  //dodanie css
  $(".paragrafnext").css({
    'font-size': '3em',
    'color': 'blue'
  });

  //dodawanie klasy
  $(".h1").addClass('blue');

  //dodawanie atrybutu
  $(".h1").attr("imie", "Aga");


});