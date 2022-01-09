$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() <50){                     
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.1)');
        }
        else if (($win.scrollTop()>50)&&($win.scrollTop()<100)) {
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.2)');            
        }
        else if (($win.scrollTop()>=100)&&($win.scrollTop()<150)) {            
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.3)');              
        }
        else if (($win.scrollTop()>=150)&&($win.scrollTop()<200)) {            
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.4)');             
        }
        else if (($win.scrollTop()>=200)&&($win.scrollTop()<250)) {        
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.5)');                
        }
        else if (($win.scrollTop()>=250)&&($win.scrollTop()<300)) {                     
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.6)');                 
        }
        else if (($win.scrollTop()>=300)&&($win.scrollTop()<350)) {                     
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.7)');                    
        }
        else if (($win.scrollTop()>=350)&&($win.scrollTop()<400)) {                      
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.8)');                    
        }
        else if (($win.scrollTop()>=400)&&($win.scrollTop()<450)) {                    
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 0.9)');                      
        }
        else if ($win.scrollTop()>=450) {         
            $('.top-nav').css('background-color', 'rgba(255, 255, 255, 1)');
        }
        if($win.scrollTop()>400){
            $('#company-name').css('color', 'rgba(22,22,22, 1)');
            $('#top-nav-items li a').css('color', 'rgba(22,22,22, 1)');
            
        }
        else if($win.scrollTop()<=400){
            $('#company-name').css('color', 'rgba(66, 66, 66,0.95)');
            $('#top-nav-items li a').css('color', 'rgba(66, 66, 66,0.95)');
            
        }
    });
});