$(document).ready(function () {
	snsShareFn(); // 공유하기
	hotelWishFn(); // 관심상품
	slideFn(); // 슬라이드
	benefitInfoeFn(); // 항공할인 레이어
	hotelMoreFn(); // 호텔시설 더보기
	spPriceFn(); // 특전 레이어
	hotelCancelFn(); // 취소규정 레이어
	hotelMapFn(); // 지도보기 레이어

	// 객실 전체 보기
	$('.btn_more_room').on('click', function(){
		$(this).hide();
	});
});

// 공유하기
function snsShareFn() {
	// 열기
	$('.section_top_title').on('click', '.btn_share', function () {
		$('.sns_share_wrap').show();
	});
	// 닫기
	$('.sns_share_wrap').on('click', '.btn_close', function () {
		$('.sns_share_wrap').hide();
	});
}

// 관심상품
function hotelWishFn() {
	$('.section_top_title').on('click', '.btn_wish', function () {
		$(this).toggleClass('active');
	});
}

// 슬라이드
function slideFn() {
	var slideSize = $('.hotel_slide_wrap li').size();
	if (slideSize > 1) {
		var swiper = new Swiper('.swiper-container', {
			pagination: {
				el: '.swiper-pagination'
			}
		});
	}
}

// 항공할인 레이어
function benefitInfoeFn() {
	// 열기
	$('.dc_type1').on('click', 'a', function (e) {
		e.preventDefault();
		$('.layer_benefit_info').toggle();
	});
	// 닫기
	$('.layer_benefit_info').on('click', '.btn_close', function () {
		$(this).parent('.layer_benefit_info').hide();
	});
}

// 호텔시설 더보기
function hotelMoreFn() {
	$('.btn_more_detail').on('click', function () {
		$(this).toggleClass('active');
		$('.hotel_info_box').toggleClass('active');
		if ($(this).html() == '펼치기') {
			$(this).html('닫기')
		} else {
			$(this).html('펼치기')
		}
	});
}

// 특전 레이어
function spPriceFn() {

	$(document).on("click", ".tag_fn", function () {
		$(this).next('.layer_special_price').toggle();
	});

	$(document).on("click", ".layer_special_price .btn_close", function () {
		$(this).parent('.layer_special_price').hide();
	});
}

// 취소규정 레이어
function hotelCancelFn() {
	// 열기
	$('.room_type_list').on('click', '.btn_cancel', function () {
		$(this).parent().next('.layer_cancel_info').toggle();
	});
	// 닫기
	$('.layer_cancel_info').on('click', '.btn_close', function () {
		$(this).parent('.layer_cancel_info').hide();
	});
}

// 지도보기 레이어
function hotelMapFn() {
	// 열기
	$('.btn_hotel_map').on('click', function () {
		$(this).next('.layer_map_wrap').show();
	});
	// 닫기
	$('.layer_map_wrap').on('click', '.btn_close', function () {
		$('.layer_map_wrap').hide();
	});
}
