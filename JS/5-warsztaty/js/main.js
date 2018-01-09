'use strict';
class Ogloszenie {
    construktor( tytul, cena, opis ) {
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
    }

    pobierzTytul() {
        return this.tytul;
    }
    ustawCene(nowaCena) {
        this.cena = nowaCena;
    }

}
var ogloszenie1 = new Ogloszenie("Rama łozka", 500, "dobra rama lozka" );
ogloszenie1.ustawCene( 1500 );
console.log( ogloszenie1 );

var ogloszenie2 = new Ogloszenie ( "Sweter", 50, "Cieply" );
var tytul = ogloszenie1.pobierzTytul();
console.log( tytul );

