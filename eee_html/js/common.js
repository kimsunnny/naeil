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

    $('.header_menu_toggle.menu_on, .nav_dim').on('click', function(){
      $('.header_menu_toggle').removeClass('menu_on');
      $('body').removeClass('menu_on');
    })

    //mobile_menu_lnb
    $('.gnb').on('click',function(){
      var WindowWidth = $(window).width();
      if(WindowWidth > 960){return;}
      $(this).toggleClass('menu_on')
      if($(this).hasClass('menu_on')){
          $('.lnb').slideUp('fast');
          $(this).siblings('.lnb').slideDown('fast');
          $('.gnb').removeClass('menu_on')
          $(this).addClass('menu_on');
      }else{
          $(this).siblings('.lnb').slideUp('fast');
          }
      })
    
    //사이즈조정시 메뉴 원상복구
    $(window).resize(function(){
      var WindowWidth = $(window).width();
      if(WindowWidth > 320){
          $('body').removeClass('menu_on');
          $('.nav_dim').removeClass('menu_on');
          $('.lnb').removeAttr('style').hide();
        }
      })

      faqFn();
      function faqFn() {
        $('.faq_list li').on('click', function(){
          $(this).siblings().find('.a_box').slideUp(300);
          $(this).find('.a_box').slideToggle(300);
          $(this).toggleClass('active').siblings().removeClass('active');
        });
      }
})



