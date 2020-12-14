$(document).ready(function(){
    //visual
    $('.visual_slide').slick({
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });

    //gnb
    $('.header_menu_toggle').on('click',function(){
        var _window= $(window).width();
        if(_window>960){return}
        $(this).toggleClass('on')
        if($(this).hasClass('on')){
            $(this).addClass('on');
            alert('open')
        }else{
            $(this).siblings('.sub').slideUp('fast');
            if(_window>960){return }
            $(this).toggleClass('on')
            
    })

    /*
    //더보기
    $('.more').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('.more_txt').slideDown(300);
           }else{
               $('.more_txt').slideUp(300);
           }
    });
    
    //팝업
    $('#casting .btn_pop1').click(function(){
        $('.story1').bPopup({
            closeClass: "btn_close"   
        });
    });
    $('#casting .btn_pop2').click(function(){
        $('.story2').bPopup({
            closeClass: "btn_close"
        });
    });
    
    //예고편
    //video slide
    $('.video_wrap').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          arrows: true,
          adaptiveHeight: true
    });

    //스틸컷
    $(".center").slick({
        centerMode: true,
        slidesToShow: 1,
        arrows:false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false
    });
    
    $('#stillcut .like').click(function(){
       $(this).toggleClass('on'); 
    });
    
    //wow
    new WOW().init();
    
    //인터뷰
    $('#interview .q_ing').click(function(){
        $(this).css('display','none')
        $(this).next('.q_off').removeClass('q_off');
        $(this).removeClass('q_ing');
        $(this).parent().nextAll('.answer').addClass('on');
        
    })
    */
    
})



