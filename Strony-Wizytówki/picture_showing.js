function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
    
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}
$(document).ready(function(){
        showImages('#zdjecie1');
        showImages('.omn1');
        showImages('.kon1')
});
$(window).scroll(function() {
        showImages('#zdjecie1');
        showImages('.omn1');
        showImages('.kon1')
});