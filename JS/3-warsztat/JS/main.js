'use strict';
//kalkulator czasu podrozy
//stworz funkcje, ktora bedzie przyjmowac dwa paramentry- dystans podrozy w km
//funkcja ma policzyc i zwrocic czas naszej podrozy
//wynik wyswietl w konsoli w postaci "dystans pokonasz w 4h"
//czas = dystans / prędkość /// t = s / v 
/////////////////////////////////////////////////////////////

function formatujCzas (czasPrzejazdu) {
    var sformatowanyCzas;
    var godziny = Math.floor( czasPrzejazdu );
    var minuty = ( czasPrzejazdu - godziny ) * 60;
    minuty = Math.floor( minuty );
    sformatowanyCzas = godziny + "h" + minuty + "min.";
    return sformatowanyCzas; 
}




function czasPodrozy( s, v ) {
    if( v <= 0); {
        console.log ("Błąd! Prędkość nie może być mniejsza rowna  0");
    }
    var czas = s / v;  
    console.log( "Jestem tutaj" );
    return czas;
}

var czasPrzejazdu = czasPodrozy ( 200, 67 );
console.log( "dystans pokonasz w " + formatujCzas (czasPrzejazdu) );

//
//var czasPrzejazdu = czasPodrozy ( 500, 87 );
//console.log( "dystans pokonasz w " + formatujCzas (czasPrzejazdu) );
//
//var czasPrzejazdu = czasPodrozy ( 900, 56 );
//console.log( "dystans pokonasz w " + formatujCzas (czasPrzejazdu) );
