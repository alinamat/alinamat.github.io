class Ogloszenie {
    constructor(tytul, opis, kategoria, status, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.status = status;
        this.cena = cena; 
    }
    
    pobierzTytul() {
        return this.tytul;
    }
}

var ogloszenie = new Ogloszenie("Sprzedam Opla", "kombi 2009r, w dobrym stanie", "Motoryzacja", "aktywne", 6500);

var ogloszenie2 = new Ogloszenie("sprzedam skarpetki", "w dobrym stanie", "odziez", "nieaktywne", 1);

var ogloszenie3 = new Ogloszenie("Mieszkanie M4", "super lokalizacja", "nieruchomosci", "aktywne", 500000);

//console.log(ogloszenie);
//console.log(ogloszenie2);
//console.log(ogloszenie3);
//
//console.log(ogloszenie2.tytul);
//console.log(ogloszenie2.pobierzTytul);

var arr = [
    {tytul: "W pustyni i w puszczy", stan: true},
    {tytul: "Rura", stan: false},
];

for( var i = 0; i < arr.length; i++) {
    console.log( arr[i].tytul )
}

//w taki sposob dostajemy sie do zawartosci tablicy


for( var i = 0; i < arr.length; i++) {
    if( arr[i].stan == true ) {
        console.log("Hurraaa");
    } else {
        console.log("Nie hurraaa");
    }
}























