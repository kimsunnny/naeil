$(document).ready(function(){
    
    //swiper main_slide
    var swiper = new Swiper('.swiper-container.visual_slide', {
        hashNavigation: {
          watchState: true,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        speed: 800,
        parallax: true
    });

    //mobile_menu_toggle
    $('.header_menu_toggle').on('click', function(){
      $('.header_menu_toggle').toggleClass('menu_on');
      $('body').toggleClass('menu_on');
    })

    $('.header_menu_toggle.on, .nav_dim').on('click', function(){
      $('.header_menu_toggle').removeClass('menu_on');
      $('body').removeClass('menu_on');
    })
    
})



