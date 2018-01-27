function obslugaScrolla() {
    var d = document.documentElement;
    
    
    
    //    if (wysokosc elementu html == wysokosc okna przegladarki (wew) + scroll TOP) {
    //        console.log("jestem na dole :)");
//    var wrap = document.getElementById('infinite-list');
    
    var htmlOffsetHeight = d.offsetHeight;
    var scrollTop = Math.ceil(d.scrollTop);
    var innerHeight = window.innerHeight;
    
    console.log("Scroll TOP: " + scrollTop);
    console.log("innerHeight: " + innerHeight);
    console.log("htmlOffsetHeight: " + htmlOffsetHeight);
    
    if ( htmlOffsetHeight == scrollTop + innerHeight ) {
        
        console.log("Jestem na dole");
//        wrap.innerHTML = wrap.innerHTML + "<div>User name</div>";
        
        function pobierzDane() {
//    console.log("dziala")
    ajax("GET", "https://jsonplaceholder.typicode.com/users");
        }
    }
}

window.onscroll = obslugaScrolla;





