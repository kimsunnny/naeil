$(document).ready(function() {
	// 스크롤시 헤더 숨김
	if( $('#header').length > 0 && $('.container').length > 0 && $('.section_top_title').length > 0 ){
		$('.container').addClass('type2');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 0) {
				$('#wrap').addClass('fixed');
			} else {
				$('#wrap').removeClass('fixed');
			}
		});
	}

	// 레프트메뉴
	if( $('#header').length > 0 ){
		// 열기
		$('.btn_left_menu').on('click', function(e){
			e.preventDefault();
			$('.lnb_menu_wrap').animate({'left': '0'}, 600, 'easeOutCubic');
			// $('#header, #footer, .main_container').animate({'left': '100%'}, 600, 'easeOutCubic');
			$('body').css('overflow', 'hidden');
		});
		// 닫기
		$('.lnb_menu_wrap .btn_close').on('click', function(e){
			e.preventDefault();
			$('.lnb_menu_wrap').animate({'left': '-100%'}, 600, 'easeOutCubic');
			// $('#header, #footer, .main_container').animate({'left': '0'}, 600, 'easeOutCubic');
			$('body').css('overflow', '');
		});
	}

	// 기본 탭
	if( $('.tab_type_common').length > 0 ){
		$('.tab_type_common li').on('click', function(){
			var tabIndex = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
		});

		if( $('.tab_fn').length > 0 ){
			$('.tab_fn li').on('click', function(){
				var tabIndex = $(this).index();
				$(this).parents('.tab_fn').next('.tab_contents').find('.cont').eq(tabIndex).addClass('active').siblings().removeClass('active');
			});
		}
	}

	if( $('map').length > 0 ){
        $('img[usemap]').rwdImageMaps(); // 이미지 맵
	}

	if( $('.main_container').length > 0 ){
		mainSlideFn(); // 메인 슬라이드
	}

	if( $('.category_container').length > 0 ){
		categoryFn(); // 카테고리
	}

	if( $('.community_wrap').length > 0 ){
		communityFn(); // 커뮤니티
	}

	if( $('.faq_list').length > 0 ){
		faqFn(); // faq 리스트
	}

});

// 메인 슬라이드
function mainSlideFn() {
	//메인배너
	var swiper = new Swiper('.hotel_main_banner', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		//freeMode: true,
		centerMode:true,
	});

	//깜짝 특가 할인
	var swiper = new Swiper('.hotel_main_price', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		//freeMode: true,
		centerMode:true,
	});
}

// 카테고리 레이어
function showMainLayer(val, category) {
	if (val == 'close') {
		$('.category_wrap, .section_top_title').animate({'left': '-100%'}, 600, 'easeOutCubic');
		$('body').css('overflow', '');
	}else{
		if(category == 'hotel'){
			$('#wrapCategory, #wrapCategory .section_top_title').animate({'left': '0'}, 600, 'easeOutCubic');
			$('body').css('overflow', 'hidden');
		}else if(category == 'local'){
			$('#wrapCategoryLocal, #wrapCategoryLocal .section_top_title').animate({'left': '0'}, 600, 'easeOutCubic');
			$('body').css('overflow', 'hidden');
		}else if(category == 'resort'){
			$('#wrapCategoryResort, #wrapCategoryResort .section_top_title').animate({'left': '0'}, 600, 'easeOutCubic');
			$('body').css('overflow', 'hidden');
		}
	}
}

// 카테고리
function categoryFn() {
	//메뉴 depth1 클릭
	$('.category_menu .left li').click(function(){
		var mIndex = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.left').next('.right').children('.depth2').eq(mIndex).addClass('active').siblings().removeClass('active');
		$('html, body').stop().animate({scrollTop : -50},0);
	});

	// 카테고리 상단배너
	if( $('.category_banner').length > 0 ){
		var swiper = new Swiper('.category_banner', {
			slidesPerView: 'auto',
			spaceBetween: 10
			//loop: true
			//centerMode:true,
		});
	}

	// 카테고리 료칸
	if( $('.ryokan').length > 0 ){
		//료칸 탭 상품 슬라이드
		var swiper = new Swiper('.detail_cont', {
			slidesPerView: 'auto',
			spaceBetween: 10,
			centerMode:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoHeight: true, //enable auto height,
			observer: true,
			observeParents: true,
		});

		//료칸 테마 슬라이드
		var swiper = new Swiper('.theme_slide', {
			slidesPerView: 2,
			spaceBetween: 10,
			centerMode:true
		});
	}
}

// 커뮤니티
function communityFn() {
	// 테마호텔 슬라이드
	var swiper = new Swiper('.slide_box .swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var swiper = new Swiper('#ryokan_slide_01, #ryokan_slide_02, #ryokan_slide_03, #ryokan_slide_04', {
		pagination: {
			el: '.swiper-pagination'
		}
	});
}

// faq 리스트
function faqFn() {
	$('.faq_list li').on('click', function(){
		$(this).siblings().find('.a_box').slideUp(300);
		$(this).find('.a_box').slideToggle(300);
		$(this).toggleClass('active').siblings().removeClass('active');
	});
}
