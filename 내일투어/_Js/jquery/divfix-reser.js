
var $window = $(window);
  function fixPane3() {
	var adverOffset3 = $('.reser-wrap > .info-charge > .charge-cont').offset().top + 10;
	window._rewardDetail3 = {};
	$window.scroll(function () {
	 if (window._rewardDetail3 && window._rewardDetail3.isMobile) { return }
	  var currentTop3 = $window.scrollTop(); 
	  var paneStyleTop3 = 76;
	 
	  if (currentTop3 > adverOffset3) {
		  $('.reser-wrap > .info-charge > .charge-cont').addClass('fix');
		  $('.reser-wrap > .info-charge > .charge-cont').height() + currentTop3 > $("#footer-wrap").offset().top - 200 ?  
		  $('.reser-wrap > .info-charge > .charge-cont').addClass('stoped') : 
		  $('.reser-wrap > .info-charge > .charge-cont').removeClass('stoped');

	  } else {
		$('.reser-wrap > .info-charge > .charge-cont').removeClass('fix');
	  }
	});	
  } 
$(window).load(function(){
 fixPane3();
});	
