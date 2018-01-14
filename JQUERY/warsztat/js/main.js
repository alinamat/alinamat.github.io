$(function(){
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    //ustaw szerokosc kontenera
    slideShow.css({"width" : slideCount + "00%"});

    
    slideShow.find(".single-slide").each(function(index){
        $(this).css({
            "width" : slideWidth + "%",
            "margin-left" : index  * slideWidth + "%",
        });
    });
    
})












//function slide (newSlideIndex) {
//    if (newSlideIndex < 0 || newSlideIndex > ( slideCount - 1 ) ) {
//        return;
//    }
//}
