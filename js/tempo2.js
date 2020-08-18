$(document).ready(function(){
    $('.slider').height($(window).height());
    
   //so that when i resize the window other function would still be supported
    $(window).resize(function(){
        $('.slider').height($(window).height());

        $('.bxslider').each(function(){
            $(this).css('paddingTop', ($(window).height()-$('.ll').height()) /2);
        });
    });


   //so i can click in one item at a time
    $('.toptext ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //to make the headline exactly in the middle of the window
    $('.bxslider').each(function(){
        $(this).css('paddingTop', paddingtopheight);
    });
 
   //to remove the bullets that existed in the bx-slider
    $('.bxslider').bxSlider({
        pager : false
    });
  
    //smooth scroll
    $('.toptext li a').click(function(){
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value') ).offset().top 

        },1000);

        console.log($(this).data('value'));
    });

    //auto slider self invoc function
    (function autoslider(){
        $('.secslider .active').each(function(){
            if (!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoslider();

                });
            }else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.secslider div').eq(0).addClass('active').fadeIn();
                    autoslider();

                });
            }
        });

    }());

    //trigger mixitup
    $('#container').mixItUp();

    //adjust shuffle buttons
    $('.shuffle button').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //nice scroll
    $("body").niceScroll();
});

var paddingtopheight = ($(window).height()-$('.ll').height()) /2 ;


