var istniejacyWezel =
document.getElementById("parFirst").children[2];

//console.log ( istniejacyWezel );

//var nowyElement = document.createElement("p");
//var nowyTekst = document.createTextNode("To jest nowy akapit, ktory dodalismy na strone");
//
//nowyElement.appendChild( nowyTekst );
//
//istniejacyWezel.appendChild(nowyElement);
//
//istniejacyWezel.removeChild( nowyElement );

//var nowyElement = document.createElement("p");
//var link = document.querySelectorAll('.link')[2];
////console.log ( link );
//
//link.parentElement.insertBefore(nowyElement, link);

/////////////////////////////////////////////////////
//dodaj znacznik <br> po każdym linku i usun z nich atrybuty klasy *//
///////////////////////////////////////////////////

var wszystkieLinki = document.querySelectorAll("a");
for (var i = 0; i < wszystkieLinki.length; i++) {
    var br = document.createElement ("br");
    wszystkieLinki[i].parentElement.insertBefore( br, wszystkieLinki[i].nextSibling );
    wszystkieLinki[i].removeAttribute("class");
}