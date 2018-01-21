/////////ZADANIE-1 START//////////////////////
//
//function ajax(method, url) { //--DEFINIUJEMY FUNKCJĘ
//
//    var xhttp = new XMLHttpRequest();
//
//    //console.log(xhttp);
//
//    xhttp.open(method, url);
//
//    xhttp.onreadystatechange = function () {
//
//        if (xhttp.readyState == 4) {
//
//            if (xhttp.status == 200) {
//
//                var data = xhttp.responseText;
//                var dataJSON = JSON.parse(data);
//                console.log(data);
//                console.log(dataJSON);
//                
//                var paragraf = document.createElement("p");
//                var parText = document.createTextNode(dataJSON.userId);
//                document.body.appendChild(paragraf);
//                paragraf.appendChild(parText);
//                
//                var paragraf = document.createElement("p");
//                var parText = document.createTextNode(dataJSON.userName);
//                document.body.appendChild(paragraf);
//                paragraf.appendChild(parText);
//                
//                var paragraf = document.createElement("p");
//                var parText = document.createTextNode(dataJSON.userURL);
//                document.body.appendChild(paragraf);
//                paragraf.appendChild(parText);
//            }
//            xhttp = null;
//        }
//    }
//    xhttp.send();
//    
//}
//
//
//function pobierzDane() {
////    console.log("dziala")
//    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
//}
//
//var button = document.getElementById("pobierz-dane");
//
//button.onclick = pobierzDane;


///////ZADANIE-1 KONIEC/////////////////////





$("button").click(function () {
    $.getJSON(
        "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        function (data) {
            // wyswietl w konsoli
            console.log(data);
            
            $("body").append("<br>userId" + data.userId, "<br>userName" + data.userName + "<br>userURL" + data.userURL);
        }
    );
});









