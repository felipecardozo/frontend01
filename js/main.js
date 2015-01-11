
$(document).ready(function () {
    
    var sections = $('section'),
        nav = $('nav'),
        nav_heght = nav.outerHeight();

    
    
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        
        sections.each( function () {
            
            var top = $(this).offset().top - nav_heght,
                bottom = top + $(this).outerHeight();
            
            if( cur_pos+100 >= top && cur_pos+100 <= bottom ){
                nav.find('a > p').removeClass('active');
                
                nav.find("a[href=#"+$(this).attr("id")+"] p" ).addClass("active");
            }
            
        });
    });
    
});