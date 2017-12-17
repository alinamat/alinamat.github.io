'use strict'

var kapitalAnety = 2000;

function obliczOdsetki(kapital, procent) {
    var kapitalZOdsetkami = kapital + kapital * procent;
    
    return kapitalZOdsetkami;
    
    //oblicza i zwraca - return//
} 

var inwestycjaAnety = obliczOdsetki(kapitalAnety, 0.015); 

var inwestycjaKuba = obliczOdsetki(1000, 0.05);

console.log(inwestycjaAnety);
console.log(inwestycjaKuba);





