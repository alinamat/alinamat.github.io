//1////////////////
//parentElement lub parentNode – zwraca rodzica danego węzła
//var pierwszyDiv = document.getElementById("parFirst");
//to samo ale w inny sposob
////var pierwszyDiv = document.querySelector("#parFirst");
//
////var rodzicDiva = pierwszyDiv.parentElement;
////console.log(rodzicDiva);
//
////2////////////////zwraca lista dzieci danego węzła - wszystkich
//var pierwszyDiv = document.getElementById("parFirst");
//
//var dzieciDiva = pierwszyDiv.childNodes;
//console.log(dzieciDiva);
//
////3//////////////wszystkie elementy bez tekstu
//var pierwszyDiv = document.getElementById("parFirst");
//
//var dzieciDiva = pierwszyDiv.children;
//console.log(dzieciDiva);
//
////4////////zwraca pierwsze dziecko danego rodzica
//
//var pierwszyDiv = document.getElementById("parFirst");
//var dzieciDiva = pierwszyDiv.firstChild;
//console.log(dzieciDiva);
//
////5//////////zwraca ostatnie dzieko danego rodzica
//var pierwszyDiv = document.getElementById("parFirst");
//var dzieciDiva = pierwszyDiv.lastChild;
//console.log(dzieciDiva);
//
////6//////////
//var pierwszyDiv = document.getElementById("parFirst");
//var rodzenstwoNastepne = pierwszyDiv.nextSibling;
//console.log(rodzenstwoNastepne);
//
////7//////////
//var pierwszyDiv = document.getElementById("parFirst");
//var rodzenstwoPoprzednie = pierwszyDiv.previousSibling;
//console.log(rodzenstwoPoprzednie);
//
////8////////
//var pierwszyDiv = document.getElementById("parFirst");
//var rodzenstwoPoprzednie = pierwszyDiv.previousElementSiblingSibling;
//console.log(rodzenstwoPoprzednie);
//



var pierwszyDiv = document.getElementById("parFirst");
var dzieciElementu = pierwszyDiv.childNodes;
dzieciElementu.forEach( function( element ) {
    console.log( "nodeType = " + element.nodeType);
});

//var dzieciElementu2 = pierwszyDiv.children;
//
//for(var i=0; i < dzieciElementu2.length; i++) {
//    console.log(dzieciElementu2[i]);
//}
























