var mnOvNum = [];
var mainNavi_W = {
		mnObj : null,Timer:null,subTimer:null,isOver:false,initNum:[],
	_getMenu:function(){return $("#mainNavi");},
	_init:function(){
		var this_s = this;
		this.mnObj = this._getMenu();
		$("li",$(this.mnObj)).each(function(){
			if($("ul",$(this)).length>0 && !$(this).hasClass("has-sub")) $(this).addClass("has-sub");
		});
		this._initOvNum();
		this.setOvBar();
		this.setEvt();
	},
	_set:function(){},
	_unset:function(){
	},

	_retset:function(){
		this.setEvt();
		this.resetMenuStyle();
		this.resetMenuBar();
	},
	isOpen:function(){
		return this.mnObj.hasClass("mn-h-open");
	},
	setOvBar:function(){
		$(".ovbar",this.mnObj.parent()).remove();
		this.ovbar = $('<div class="ovbar"></div>').prependTo(this.mnObj);
		this.ovbar.css({"width":"0"});
	},
	resetMenuStyle:function(){
		var chkW = $("#header-wrap.div-cont").eq(0).width();
		if(chkW > 1000) chkW = 1000;
		var tmpItems = $(".mn_l1",$(this.mnObj)) ;
		var totalW =parseInt($("#mainNavi").css("max-width"));
		if($("#mainNavi").css("max-width")=="none" || totalW < chkW) totalW = chkW;
		var mnW = Math.floor(totalW/tmpItems.length);
		var tmpW = 0;
		$(tmpItems).each(function(){
			if($(this).index()==(tmpItems.length-1)){
			}else{
			}
			tmpW = tmpW + mnW;
		});

		var maxSubHeight = 0;
		$(".depth2-wrap",this.mnObj).each(function(){
			var h = $(this).outerHeight(); if(maxSubHeight<=h) maxSubHeight = h;
		});
		this.mnSubH = maxSubHeight;
	},
	setSubMenuStyle:function(smn){
		var maxWidth = 1000;
		if(smn.length>0){
			var subMn = smn.get(0);
			var thisSubOpt = 	{"width":"auto","left":"auto","right":"auto"};
			$(subMn).stop().show().css({"left":"auto","right":"auto","visibility":"visible","width":"auto","height":"auto"});
			var tmpSubItem = $(".depth2 > li > a",$(subMn));
			var depth2_w = 0,depth2_left = 0;
			tmpSubItem.each(function(){
				depth2_w = depth2_w +$(this).outerWidth();
			});
			if(depth2_w >0) depth2_w = depth2_w +2 ;	//줄바꿈 오차보정
			if(depth2_w>maxWidth){
				depth2_w = maxWidth;
			}
			var left_s = $(subMn).offset().left -  $("#header").offset().left;
			if((left_s + depth2_w)>maxWidth){ 	thisSubOpt.right = "0px";	thisSubOpt.left = "";	}
			thisSubOpt.width = depth2_w;
		$(subMn).css(thisSubOpt);
		}
	},
	initDefaultStyle:function(){
		this.resetMenuStyle();
		$(".depth2-wrap" ,this.mnObj).each(function(){
			$(this).stop().css({"height":"auto","visibility":"visible","opacity":1}).show();
			$(this).prop("sHeight",$(this).outerHeight());//.css({"overflow":"hidden"});
		});
		$(".mn-bar").css({"height":0}).hide();
	},
	clearEvt:function(){
		$("a",$(this.mnObj)).unbind("mousedown mouseover focus click mouseout blur");
		$(".depth2-wrap",$(this.mnObj)).unbind("mousedown mouseover click focus mouseout blur");
		$("> li > .depth2-wrap",$(this.mnObj)).unbind("mousedown mouseover click focus mouseout blur");
	},
	setEvt:function(){
		var this_s = this;
		this.clearEvt();
		$(".depth2-wrap",$(this.mnObj)).bind("mouseover focus", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = true;	});
		$(".depth2-wrap",$(this.mnObj)).bind("mouseout blur", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = false;this_s.setSubMenuOutSet(500);	});

		$("a",$(this.mnObj)).bind("mouseover focus", function(){	 clearTimeout(this_s.subTimer ); this_s.isOver = true;	});
		$("> li > .depth2-wrap",$(this.mnObj)).bind("mouseover focus", function(){	clearTimeout(this_s.subTimer );  this_s.isOver = true;	});

		$("a",$(this.mnObj)).bind("mouseout blur", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = false;this_s.setSubMenuOutSet(500); this_s.setMenuOut();	});
		$("> li > .depth2-wrap",$(this.mnObj)).bind("mouseout blur", function(){	this_s.setMenuOut();	});
		this.initDefaultStyle();
		$(".mn_a1",$(this.mnObj)).bind("mouseover focus", function(){	
			this_s.isOver = true;
			var selLI = $(this).parent();			var selUL = $(this).parent().parent();
			this_s.setMenuOn(selLI.index()+1);
		});
		$(".mn_a2",$(this.mnObj)).bind("mouseover focus", function(){
			this_s.isSubOver = true;	
			var selLI = $(this).parent();			var selMN1 = $(this).parents(".mn_l1").eq(0).index();
			this_s.setMenuOn(selMN1+1 ,selLI.index()+1);
		});
		var chkMn =  (this.initNum[0]>0)? $(".mn_l1", this.mnObj).eq(this.initNum[0]-1) : null;
		if(chkMn!=null && chkMn.length>0){
			 this.isFirstOpen = true;
		}else{
			this.isFirstOpen = false;
		}
		if(this.initNum[0]<1) { 

		}else{
			this.setMenuOn(this.initNum[0],this.initNum[1],this.initNum[2]);
		}
	},
	resetMenuBar:function(){
		if(this.currentSeq==undefined){
			var toNum = this.initNum[0];
		}else{
			var toNum = this.currentSeq;
		}
		this.setMenuBar(toNum);
	},
	setMenuBar:function(n){
		var thisMenu = (n>0)? $(".mn_l1:eq(" + ( n-1 ) +")", this.mnObj):null;
		var otherMenu = $(".mn_l1", this.mnObj).not(thisMenu);
		if(this.ovbar!=undefined){
			var toLeft =   (thisMenu!=null)? thisMenu.offset().left  - $(this.mnObj).offset().left + 15 : 0 ;

			this.ovbar.stop().animate({

				width: (thisMenu!=null)? thisMenu.width()  - 30 : 0,
				left:toLeft
			},300); 
		}
	},
	setSubMenuDepthOn:function(d,li){
		clearTimeout(this.subTimer ); var this_s = this;
		var mns = $(".mn_l"+d+"", this.mnObj);
		var mnNum = $(li).index() + 1;
		$(li).addClass("is-open");
		$(li).removeClass("is-close");
		mns.not(li).addClass("is-cloose");
		mns.not(li).removeClass("is-open");
		this_s.isSubClose = false;
		switch (d)
		{
			case 1 :
					var subMenu = $(".depth2-wrap",li);
					if(subMenu.length>0){
						subMenu.stop().css({"visibility":"visible"}).show();
						var mnH = this.mnSubH;
						subMenu.stop().animate({"opacity":1},300);
						$("#mainNavi-wrap").stop().animate({height:mnH + this_s.getMenuBarHeight()},300,function(){})
						$(".mn-bar").stop().show().animate({"height":mnH},300,function(){});

						$(".depth2-wrap",this.mnObj).not(subMenu).each(function(){/*$(this).stop().css({"height":0});*/	});
					}else{
						this.subMenuBarClose();
					}
					this.setMenuBar(mnNum);	
					this.setSubMenuOutSet(4000);
				break;
		}
		this.isFirstOpen = false;
	},
	setMenuOn:function(){
		clearTimeout(this.Timer );	var this_s = this;
		var s  = new Array();
		for(var i=0; i<arguments.length;i++){
			s[i] = arguments[i];	
		}
		if(parseInt(s[1])<1 || s[1]==undefined) s[1] = 0;
		if(parseInt(s[2])<1 || s[2]==undefined) s[2] = 0;
		var thisMenu = $(".mn_l1", this.mnObj).eq(s[0]-1);
		if(this.currentSeq !=s[0]  || this.isSubClose){
			this.setSubMenuOut(this.currentSeq);
			thisMenu.addClass("is-over");
			if(!this.isFirstOpen) this.setSubMenuDepthOn(1,thisMenu);
		}
		$(".mn_l1", this.mnObj).not(thisMenu).removeClass("is-over");
		if(!this.isFirstOpen) this.currentSeq = s[0];
		this.isFirstOpen = false;
		this.setMenuBar(s[0]);	
	},
	getMenuBarHeight:function(){
		var h = _getLayoutHeaderHeight() - parseInt($("#mainNavi-wrap").css("top"));
		return h;
	},
	subMenuBarClose:function(){
		$("#mainNavi-wrap").stop().animate({height: this.getMenuBarHeight()},300,function(){});
		$(".mn-bar").stop().animate({"height":0},300,function(){$(this).hide();});
	},
	setSubMenuOut:function(seq){
		clearTimeout(this.subTimer );	var this_s = this;
		this.subMenuBarClose();
	},
	setSubMenuOutSet:function(time){
		var this_s = this;
		this.subTimer = setTimeout(function(){
			if(!this_s.isSubOver){
				this_s.isSubClose = true;
				this_s.subMenuBarClose();
				var thisMn =  (this_s.initNum[0]>0)? $("> li",this_s.mnObj).eq( this_s.initNum[0]-1 ) :null;
				if(thisMn!=null) thisMn.addClass("is-over");
				$("> li", this_s.mnObj).not(thisMn).removeClass("is-over");
				this_s.setMenuBar(this_s.initNum[0]);

			}else{
			}
				
		},time);
	},
	setMenuOut:function(){
		clearTimeout(this.Timer );		var this_s = this;
		this.isOver = false;	
		this.Timer = setTimeout(function(){
			
			if(this_s.isOver==false) {
			}
		},400);
	},
	_initOvNum:function(initNum){
		if(initNum!=undefined) this.initNum = initNum;
		else{
			this.initNum[0] =( $(".mn_l1.over",this.mnObj).length> 0)? $(".mn_l1.over",this.mnObj).index() + 1 : 0;
			this.initNum[1] =( $(".mn_l2.over",this.mnObj).length> 0)? $(".mn_l2.over",this.mnObj).index() + 1 : 0;
			this.initNum[2] =( $(".mn_l3.over",this.mnObj).length> 0)? $(".mn_l3.over",this.mnObj).index() + 1 : 0;
			this.initNum[3] =( $(".mn_l4.over",this.mnObj).length> 0)? $(".mn_l4.over",this.mnObj).index() + 1 : 0;
		}
	}
}
var mainNavi_H = {
	mnObj : null,Timer:null,subTimer:null,isOver:false,initNum:[],
	_getMenu:function(){		return $("#mainNavi ");	},
	_init:function(){
		var this_s = this;
		this.mnObj =this._getMenu();
		this.setBodyContainer();
		$("li",$(this.mnObj)).each(function(){
			var sLI = $("ul",$(this));
			if(sLI.length>0){

				if($(this).find(" > .tgl-btn").length<1){ 		$(this).prepend("<button class='tgl-btn' type='button'>ToggleMenu</button>");		}
				$(this).addClass("has-sub");
				$(this).addClass("is-close");
				if($(this).hasClass("over")){
					this_s.openSubMenu($(this).parent());
				}
			}
		});
		this._initOvNum();
		this.setEvt();
	},
	_set:function(){},
	_unset:function(){
		this.closeMenu();
	},
	_retset:function(){
		this.setEvt();
	},
	isOpen:function(){
		return this.mnObj.hasClass("mn-h-open");
	},
	initDefaultStyle:function(){
		$(".depth2-wrap" ,this.mnObj).css({"height":"auto","visibility":"visible","opacity":1});
	},
	clearEvt:function(){
		$("a",$(this.mnObj)).unbind("mousedown mouseover focus click mouseout blur");
		$(".depth2-wrap",$(this.mnObj)).unbind("mousedown mouseover click focus mouseout blur");
		$("> li > .depth2-wrap",$(this.mnObj)).unbind("mousedown mouseover click focus mouseout blur");
		$(".depth2-wrap",$(this.mnObj)).stop().css({"height":"auto","left":"","top":"","visibility":"visible","opacity":1});
		$(".depth2-wrap",$(this.mnObj)).each(function(){ $(this).stop().hide();});
	},
	setEvt:function(){
		var this_s = this;
		this.clearEvt();
		$("a",$(this.mnObj)).bind("focus", function(){
			this_s.isOver = true;
			if(!this_s.isOpen()){				this_s.openMenu();			}
		});
		$(".depth2-wrap",$(this.mnObj)).bind("focus", function(){	 this_s.isOver = true;	});
		
		$("a",$(this.mnObj)).bind("blur", function(){	this_s.setMenuOut();	});
		$(".depth2-wrap",$(this.mnObj)).bind("blur", function(){	this_s.setMenuOut();	});

		this.initDefaultStyle();

		$("a",$(this.mnObj)).bind("click", function(){
			if($(this).parent().hasClass("has-sub")){
				if($(this).parent().hasClass("is-open")){
					return true;
				}else{
					this_s.openSubMenu($(this).parent());
				}

				var selLI = $(this).parent();
				var pUL = $(this).parent().parent();
				$(" > li.has-sub",pUL).not(selLI).each(function(){
					this_s.closeSubMenu($(this));
				});
				return false;
			}
		});
		$(".tgl-btn",$(this.mnObj)).unbind("click").bind("click", function(){	
			this_s.toggleSubMenu($(this).parent());
		});
		 $("a,button",$(this.mnObj)).on("focus",function(){
			 var $li = $(this).parents("li").get(0);
			 var seq =  $($(this).parents("li").get(0)).index() + 1;
				if(!_isMobile_) {
					if($wbr.browser=="Chrome"){
					}
					this_s.setMenuListOn($li);
				}
				else{
				}
		 });
		this.setMenuOn(this.initNum[0]);
	},
	toggleMenu:function(){
		if(this.isOpen()){
			this.closeMenu();
		}else{
			this.openMenu();
		}
	},
	openMenu:function(){
		var this_s = this;
		var mnObj = this._getMenu()
		if(!mnObj.hasClass("mn-h-open")){
			mnObj.addClass("mn-h-open");
		}
		var $back = $(".header-slider-ovclick");
		$back.unbind("click").bind("click",function(){	this_s.closeMenu();		}).show();
		$(".bt-mnclose").bind("click",function(){this_s.closeMenu();		}).show();

		$("body").css({"overflow":"hidden"});
		$(".body-slide-wr").css({"margin-left":-240});
		
		$('.bt-mnclose').stop().animate({'right':0});
		$back.css({"right":0});
	},
	closeMenu:function(){
		var mnObj = this._getMenu();
		
		if(mnObj.hasClass("mn-h-open")){
			mnObj.removeClass("mn-h-open");
		}
		$("body").css({"overflow":"visible"});   
		
		$('.bt-mnclose').stop().animate({'right':'-95px'});
		$(".body-slide-wr").css({"margin-left":0});
		$(".header-slider-ovclick").hide();
		
		

		if(this.mnType=="H") this.setMenuOut();
	},
	setBodyContainer:function(){
		if(typeof(this.setBodyCont)=="undefind" || this.setBodyCont !=true ){
			this.setBodyCont = true;
			if($(".header-slider-ovclick").length<1) $("<div class='header-slider-ovclick'/>").appendTo($("#header")).hide();
			
			if($(".doc-pg").find(".body-slide-wr")==false){
				$(".doc-pg").stop().wrapInner("<div class='body-slide-wr'><div class='body-slide'></div></div>");
			}
			if($(".search-slider-ovclick").length<1) $("<div class='search-slider-ovclick'></div>").appendTo($("#header-wrap")).hide();
		}
	},
	clearTimer:function(){
		try{clearTimeout(this.Timer);clearTimeout(this.subTimer);}catch(e){}
	},
	_initOvNum:function(initNum){
		if(initNum!=undefined) this.initNum = initNum;
		else{
			this.initNum[0] =( $(".mn_l1.over",this.mnObj).length> 0)? $(".mn_l1.over",this.mnObj).index() + 1 : 0;
			this.initNum[1] =( $(".mn_l2.over",this.mnObj).length> 0)? $(".mn_l2.over",this.mnObj).index() + 1 : 0;
			this.initNum[2] =( $(".mn_l3.over",this.mnObj).length> 0)? $(".mn_l3.over",this.mnObj).index() + 1 : 0;
			this.initNum[3] =( $(".mn_l4.over",this.mnObj).length> 0)? $(".mn_l4.over",this.mnObj).index() + 1 : 0;
		}
	},
	setMenuListOn:function(li){
		var pUL = $(li).parent();
	},
	setMenuOn:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		var s  = new Array();
		for(var i=0; i<arguments.length;i++){
			s[i] = arguments[i];	
			var d = i+1;
			if(s[i]>0)	{
				var selMn = $(".mn_l"+d,this.mnObj).eq(s[i]-1);
				this_s.openSubMenu(selMn);
				$(".mn_l"+d,this.mnObj).not(selMn).each(function(){	this_s.closeSubMenu(this);});
				
			}else{
				$(".mn_l"+d,this.mnObj).each(function(){ this_s.closeSubMenu(this); });
			}
		}
		this.currentSeq = s[0];
	},
	setMenuOut:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		this.isOver = false;	
		this.Timer = setTimeout(function(){
			if(this_s.isOver==false) {
				this_s.setMenuOn(this_s.initNum[0],this_s.initNum[1],this_s.initNum[2]);
			}
		},400);
	},
	menuOnAction:function(obj){
		var thisParentEl = $($(obj).parents("li").get(0));
			var thisSubObj = $(".depth2-wrap",thisParentEl);
			if(thisSubObj.length>0 && this_s.currentSeq!=obj.seq){
				return false;
			}
	},
	toggleSubMenu:function(li){
		var this_s = this;
		if($(li).hasClass("is-open")) {
			this.closeSubMenu(li);
		}else{
			this.openSubMenu(li);
			$(">li",$(li).parent()).not(li).each(function(){ this_s.closeSubMenu(this);});
		}
	},
	openSubMenu:function(li){
		var this_s = this;
		$(li).addClass("is-open");
		$(li).removeClass("is-close");
		var $div = $(li).find("ul").eq(0).parent();
		$div.stop().show("blind",function(){this_s.setContentHeight(); });
	},
	closeSubMenu:function(li){
		var this_s = this;
		$(li).removeClass("is-open");
		$(li).addClass("is-close");
		var $div = $(li).find("ul").eq(0).parent();
		$div.stop().hide("blind",function(){this_s.setContentHeight(); });
	},
	setContentHeight:function(){
		this.clearTimer();
		this.subTimer = setTimeout(function(){
			try{setLayoutMinHeight();}catch(e){}
		},300);
	}

}
var mainNavi = {
	mnObj : null,
	initNum:Array(),	currNum:Array(), Timer:null, mnType:"",
	_init:function(mn,initNum){
		var this_s = this;
		this.mnObj = $("#mainNavi");
		if($(".doc-pg").find(".body-slide-wr").length<1){
			$(".doc-pg").wrapInner("<div class='body-slide-wr'><div class='body-slide'></div></div>");
		}
		$(".body-slide-wr").css({"overflow":"hidden"});
		this.checkMenuType();
		this.setMenu();
		var mnToggleBtn = $("#mn-ctrs-btns");
		$(".mn-close-btn").off("click").click(function(){
			if(this_s.mnType!="H") return;
			mainNavi_H.closeMenu();
		});
		mnToggleBtn.off("click").on("click",function(){

			if(this_s.mnType!="H") return;
			mainNavi_H.toggleMenu();
			return false;
		});
	},
	_resize:function(){
		if(this.mnType!="H"){
			mainNavi_W.resetMenuStyle();
			mainNavi_W.resetMenuBar();
		}
	},
	_reset:function(){
		this.resetMenu();
	},
	setMenu:function(){
		if(this.mnType=="W"){
			mainNavi_W._init();
		}else{
			mainNavi_W._unset();	
		}
		if(this.mnType=="H"){
			mainNavi_H._init();
		}else{
			mainNavi_H._unset();		
		}
	},
	resetMenu:function(){
		var orgMnType = this.mnType;
		this.checkMenuType();	
		this._resize();
		if(orgMnType!=this.mnType){
			//console.log("resetMenu : "+ orgMnType +" ->" + this.mnType);
			this.setMenu();
		}
	},
	checkMenuType:function(){
		getWindowSize();
		var chkWinW = wsize.win.w;
		var chkContW = $("body").width();
		if(chkContW >= 1000){
			this.mnType = "W";
		}else{
			this.mnType = "H";
		}
	},
	clearTimer:function(){
	}
}
function initNavigation() {
	$(document).ready(function(){mainNavi._init(); 
	});
}
