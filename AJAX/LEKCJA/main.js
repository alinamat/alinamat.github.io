'use strict'

//function ajax(method, url) {     //--DEFINIUJEMY FUNKCJĘ
//    
//    var xhttp = new XMLHttpRequest();   
//
////console.log(xhttp);
//    
//    xhttp.open(method, url);
//    
//    xhttp.onreadystatechange = function() {
//        
//        if( xhttp.readyState == 4 ) {
//        
//        if(xhttp.status == 200) {
//    
//            var data = xhttp.responseText;
//            console.log(data);
//        
//    }
//            xhttp = null;
//        }
//    }
//    xhttp.send();
//}
//            
//    
//
//ajax("GET", "https://jsonplaceholder.typicode.com/posts/1");
//ajax("GET", "https://jsonplaceholder.typicode.com/albums");


//pobralismy jakies dane ze strony//

//////////////////****************************8

// jeżeli status polaczenia zostal zmieniony -> httpReq.readyState

$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(data) {
    console.log(data);
});


$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    dataType: "json",
    
    success: function (resultJSON) {
        console.log(resultJSON);
    },
})



































