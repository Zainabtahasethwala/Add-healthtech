$(document).ready(function(){
    $('.menutoggle').click(function(){
        $('body').toggleClass('opened');
        $('.menu_item').toggleClass('menuopened');
    });
    $(window).scroll(function(){
        if ($(this).scrollTop()>1) {
            $('header').addClass('sticky');
          } else {
            $('header').removeClass('sticky');
          }
    });
});