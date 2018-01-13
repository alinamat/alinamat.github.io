//document.getElementsByTagName("fname", "lname").addEventListener('click', function (e) {
//    e.preventDefault();
//    console.log("fname", "lname");
//});
//
//

var imieKandydata = document.getElementById ("imie");
var nazwiskoKandydata = document.getElementById ("nazwisko");

function pobierzImie(e) {
    e.preventDefault();
    console.log(imieKandydata.value, nazwiskoKandydata.value);
}