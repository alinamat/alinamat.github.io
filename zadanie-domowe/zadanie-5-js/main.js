sumaIloczynTablicy([1,2,3,4,5,6]);

function sumaIloczynTablicy(parametr) {
    'use strict';
var suma = 0;
var iloczyn = 1;  
for (i = 0; i < parametr.length; i++) {
 suma += parametr[i];
 iloczyn *= parametr[i];
}

 console.log('Suma wynosi: ' + suma);
 console.log('Iloczyn wynosi:' + iloczyn);

}

