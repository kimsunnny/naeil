var _thisLayout_style = {};
var _orgLayout_style = {};
var _thisPage_cfg  = {};
function checkPageStyle(){
	_orgLayout_style =  $.extend({},_thisLayout_style);  _thisLayout_style = getPageStyle();
}
function getPageStyle(){
	var pg_type = {};
	var chkW = $("body").width();
	if(_isLowBr_ && chkW >999) chkW = wsize.win.w;
	return pg_type;

}
function _getLayoutHeaderHeight(){
	return	$("#header-wrap").height();
}
function _getLayoutFooterHeight(){
	return	$("#footer-wrap").height();
}
$(document).ready(function(){ // cont-adver check height
  var chkH_ = $('.cont-adver').outerHeight();
  $('#contents').css({'min-height':chkH_});
});



$(window).scroll(function(){
	var scrTops = $(document).scrollTop();
	var divWidths = $('#doc').width();
	if(divWidths > 1024 && scrTops > 1){
		$('#quick-menu').addClass('scrolltop')
	}
	if(divWidths > 1024 && scrTops > 520){
		$('#quick-menu').removeClass('scrolltop')
	}
});

