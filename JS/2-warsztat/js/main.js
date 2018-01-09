'use strict';

var tablica = [5, 35, 67, 86, 93, 76, 37, 54, 78, 45];


function dodawanie(arr) {
    
    var suma = 0;
    
    for (var i=0; i<arr.length; ++i) {
        suma = suma +arr[i];
        console.log(suma);
    }
    
    return suma;
}

var wynik = dodawanie(tablica);

console.log(wynik);






//'use strict';
//
//var a = 5;
//var b = 7;
//
//var suma = a + b;
//
//
//
//a = 25;
//b = 137;
//suma = a + b;
//
//
//a = 101;
//b = 217;
//suma = a + b;
//
//console.log(suma);
//
