

var $window = $(window);
  function fixPane() {
	var adverOffset = $('.detail-wrap > .reser-cont').offset().top + 10;
	window._rewardDetail = {};
	$window.scroll(function () {
	 if (window._rewardDetail && window._rewardDetail.isMobile) { return }
	  var currentTop = $window.scrollTop(); 
	  var paneStyleTop = 76;
	 
	  if (currentTop > adverOffset) {
		  $('.detail-wrap > .reser-cont').addClass('fix');
		  $('.detail-wrap > .reser-cont').height() + currentTop > $("#footer-wrap").offset().top - 200 ?  
		  $('.detail-wrap > .reser-cont').addClass('stoped') : 
		  $('.detail-wrap > .reser-cont').removeClass('stoped');

	  } else {
		$('.detail-wrap > .reser-cont').removeClass('fix');
	  }
	});	
  } 
$(window).load(function(){
 fixPane();
});	


var $window = $(window);
  function fixPane2() {
	var adverOffset2 = $('.detail-wrap > .info-cont > .tabs-infos > .if-taps').offset().top + 10;
	window._rewardDetail2 = {};
	$window.scroll(function () {
	 if (window._rewardDetail2 && window._rewardDetail2.isMobile) { return }
	  var currentTop2 = $window.scrollTop(); 
	  var paneStyleTop2 = 76;
	 
	  if (currentTop2 > adverOffset2) {
		  $('.detail-wrap > .info-cont > .tabs-infos > .if-taps').addClass('fix');
		  //$('.detail-wrap > .info-cont > .tabs-infos > .if-taps').height() + currentTop2 > $("#footer-wrap").offset().top - 800 ?  
		  //$('.detail-wrap > .info-cont > .tabs-infos > .if-taps').addClass('stoped') : 
		  //$('.detail-wrap > .info-cont > .tabs-infos > .if-taps').removeClass('stoped');
          $('.infos-00').css({marginTop:'120px'});

	  } else {
		$('.detail-wrap > .info-cont > .tabs-infos > .if-taps').removeClass('fix');
          $('.infos-00').css({marginTop:'0px'});
	  }
	});	
  } 
$(window).load(function(){
 fixPane2();
});	
