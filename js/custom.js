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
    //accordion js
    $('.accordion_parent .accordion-item:nth-child(1) .accordion-tittle').addClass('active');
    $('.accordion_parent .accordion-item:nth-child(1) .accordion-content').slideDown();
    $('.accordion-tittle').click(function(){
      if ($(this).hasClass('active')) {
        $(this).siblings('.accordion-content').slideUp();
        $(this).removeClass('active');
      } else {
        $('.accordion-content').slideUp();
        $('.accordion-tittle').removeClass('active');
        $(this).siblings('.accordion-content').slideToggle();
        $(this).toggleClass('active');
      }
    });
  });