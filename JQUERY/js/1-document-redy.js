
//wczytywanie DOM-u i jquery

//$(document).ready( function() {
//   alert( "Czołem, wczytalem DOM" ); 
//});



//zmieniamy kolor paragrafu na czerwono
//$ (function () {
//   $("#paragraf").css("color", "red")
//});


//ustawimy kilka wlasciwosci na raz
$ (function() {
    $("#paragraf").css(
        {
        "color" : "red", 
        "background-color" : "#000"
        });
});
