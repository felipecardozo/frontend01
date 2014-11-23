
//$(document).ready(function () {
    
    var sections = $('section'),
        nav = $('nav'),
        nav_heght = nav.outerHeight();
    
    $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop();
        
        sections.each( function () {
            var top = $(this).offset().top - nav_heght,
                bottom = top + $(this).outerHeight();
            
            if( cur_pos >= top && cur_pos <= bottom ){
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                
                $(this).addClass('active');
                nav.find("a[href=#"+$(this).attr("id")+"]" ).addClass("active");
            }
            
        });
    });
    
    
    
//});