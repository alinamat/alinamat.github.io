$(function(){
//   $("p").click(function(){
//      $("p").hide(4000); 
//   }); 
    
//    $("p").hide(3000).show(1000);
//    
//    $("h1").fadeOut(3000).fadeIn(3000);
//    
//    $("h2").slideUp(3000).slideDown(3000);
    
    function animacja() {
        console.log("No i dotarlismy do konca animacji Tu się wywołuje funkcja callback");
        $("h3").animate({"font-size": "2rem", "margin-left": "0px"}, 1000);
    }
    
    $("h3").animate({"font-size": "3em", "margin-left": "50px"}, 1000, animacja);
    
});