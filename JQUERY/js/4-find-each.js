var body = $("body");
var par = body.find("p");//zwraca wszystkie znalezione elementy
var par = body.find("p").eq(1);//zwraca jeden element o indexie = 1
console.log(par);  //wyszukujemy wszystkie par w body

$("p").each(function(index){
    console.log($(this));//poszczegolne elementy sa wyswietlane
//    console.log(index);//
    $(this).addClass("paragarf-" + index);
});

