$(document).ready(function(){
  MobileGnb(); //모바일 메뉴 gnb
  MobileLnb(); //모바일 메뉴 lnb
  if( $('#visual').length > 0 ){
		MainSlide(); // main visual
  }
  if( $('#view').length > 0 ){
		ViewSlide(); // main visual
	}
  if( $('#notice').length > 0 ){
		InfoAccordion(); // info accordion
	}
    
    //모바일 메뉴 gnb
    function MobileGnb(){
      $('.header_menu_toggle').on('click', function(){
        $('.header_menu_toggle').toggleClass('menu_on');
        $('body').toggleClass('menu_on');
      })
  
      $('.header_menu_toggle.menu_on, .nav_dim').on('click', function(){
        $('.header_menu_toggle').removeClass('menu_on');
        $('body').removeClass('menu_on');
      });
    }

    //모바일 메뉴 lnb
    function MobileLnb(){
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
      });
    }
    
    //모바일 메뉴 사이즈조정시 메뉴 닫히기
    function MobileMenuResize(){
      $(window).resize(function(){
        var WindowWidth = $(window).width();
        if(WindowWidth > 320){
           $('body').removeClass('menu_on');
           $('.nav_dim').removeClass('menu_on');
           $('.lnb').removeAttr('style').hide();
         }
       })
    }

    //swiper 메인 비주얼
    function MainSlide(){
      var swiper = new Swiper('.swiper-container.visual_slide', {
        hashNavigation: {
          watchState: true,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        speed: 800,
        parallax: true,
        loop: true,
      });
    }

    //swiper 상세페이지
    function ViewSlide(){
      var swiper = new Swiper('.swiper-container.view_slide', {
        hashNavigation: {
          watchState: true,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        speed: 800,
        loop: true,
      });
    }
     
    //info 아코디언 게시글
    function InfoAccordion() {
      $('.faq_list li').on('click', function(){
        $(this).siblings().find('.a_box').slideUp(300);
        $(this).find('.a_box').slideToggle(300);
        $(this).toggleClass('active').siblings().removeClass('active');
      });
    }

})



