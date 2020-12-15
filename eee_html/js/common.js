$(document).ready(function(){
    //visual
    // $('.visual_slide').slick({
    //     arrows: false,
    //     adaptiveHeight: true,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     pauseOnHover: false
    // });
    
    //swiper main_slide
    var swiper = new Swiper('.swiper-container.visual_slide', {
        hashNavigation: {
          watchState: true,
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        speed: 800,
        parallax: true
    });
    
})



