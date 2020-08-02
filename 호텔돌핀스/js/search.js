$(document).ready(function() {
	hotelSearchFn(); // 검색 인풋박스
	hotelResultFn(); // 검색 결과 리스트
	hotelLikeFn(); // 관심호텔 토글

});

// 검색 인풋박스
function hotelSearchFn() {
	// 검색 인풋박스 focus
    $('.search_input_box input').on({
        focus: function(){
            $(this).parent().addClass('focus');
        },
        blur: function(){
            $(this).parent().removeClass('focus');
        },
        keyup: function(){
            var keyword = $("#ipt_search").val();
    		if( keyword != "" ){
    			$('.btn_keyword_del').show();
                if( $('.search_auto_box').length > 0 ){
                    $('.search_auto_box').show();
                    $('.select_city_box').hide();
                }
    		}else{
                $('.btn_keyword_del').hide();
                if( $('.search_auto_box').length > 0 ){
                    $('.search_auto_box').hide();
					$('.select_city_box').show();
                }
    		}

        }
    });
    // 검색 키워드 삭제
    $('.btn_keyword_del').on('click', function(){
        $('.search_input_box input').val('');
        $(this).hide();
        if( $('.search_auto_box').length > 0 ){
            $('.search_auto_box').hide();
			$('.select_city_box').show();
        }
    });
}

// 검색 결과 리스트
function hotelResultFn() {
	// 필터레이어 토글
	$('.result_filter .btn_filter').on('click', function(){
		$('.result_filter_layer').toggle();
	});
	// 필터레이어 닫기
	$('.result_filter .btn_close').on('click', function(){
		$('.result_filter_layer').hide();
	});
}

// 관심호텔 토글
function hotelLikeFn() {
	$('.icon_like button').on('click', function(){
		$(this).parent().toggleClass('active');
	});

}
