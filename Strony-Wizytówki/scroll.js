var clicking = false;
var position;
var scrollpos;
$(window).mousedown(function(e){
   clicking=true;
   position = e.pageY;
});
$(window).mouseup(function(){
     clicking = false;
})
$(window).mousemove(function(e){
     if(clicking == false) 
           return;
     scrollpos=$('#scrollMeToo').scrollTop();
     $('#scrollMeToo').scrollTop(scrollpos + (e.pageY-position)) ;
})