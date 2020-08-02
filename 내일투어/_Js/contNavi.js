
var contNavi = {
	mnObj : null,
	mnItems:new Array(),
	currentSeq:null,
	initSeq:null,
	Timer:null,subTimer:null,
	isOver:false,isSubOver:false,
	init:function(objId,seq){

		
		var this_s  = this;
		this.mnObj = $("#" + objId);
		this.mnItems = $("dl",$(this.mnObj)) ;		
		this.currentSeq = 0;

		
		$(".sub-list",$(this.mnObj)).bind("mouseover focus", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = true;	});
		$(".sub-list",$(this.mnObj)).bind("mouseout blur", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = false;this_s.setSubMenuOutSet(100);	});
		
		$("dt a",$(this.mnObj)).bind("mouseover focus", function(){	 clearTimeout(this_s.subTimer ); this_s.isOver = true;this_s.isSubOver = false;this_s.setSubMenuOutSet(100); 	});
		$(".sub-list a",$(this.mnObj)).bind("mouseover focus", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = true;	});
		$(".sub-list a",$(this.mnObj)).bind("mouseout blur", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = false;this_s.setSubMenuOutSet(100); this_s.setMenuOut();	});

		for (var i=0;i<this.mnItems.length ;i++ )
		{
			var _n = i+1;
			$(this.mnItems[i]).attr("_n",_n);
			$("dt a",$(this.mnItems[i])).bind("click mouseover",function(){ 
				var n = $($(this).parents("dl").get(0)).attr("_n");
				this_s.setMenuOn(n);
				return false;
			});
			$("dt a",$(this.mnItems[i])).bind("mouseout",function(){this_s.isOver = false; this_s.setMenuOut(); });

			var subHeight = $(".sub-list",$(this.mnItems[i])).css({"visibility":"hidden","display":"block"}).outerHeight();
			$(".sub-list",$(this.mnItems[i])).attr("_h",subHeight).css({"visibility":"visible","display":"none","height":0});
			
			//IE7 dt a 사이즈 보정
			//alert($("dt",$(this.mnItems[i])).outerWidth());
			if(_isLowBr_){
				$("dt",$(this.mnItems[i])).each(function(){
					var _mnPad = parseInt($("a",this).css("paddingLeft")) + parseInt($("a",this).css("paddingRight"));
					var _mnWidth = parseInt($("a",this).width()) + parseInt(_mnPad);
					if(_mnWidth < $(this).width()){
						$("a",this).width($(this).width() - _mnPad);
					}
				
				});
			}


			
		}
		$("dl:last",$(this.mnObj)).addClass("is-last") ;
		
		//	this.setMenuOn(this.initSeq);
		

		
	},
	setMenuOn:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		var s  = new Array();
		for(var i=0; i<arguments.length;i++){
			s[i] = arguments[i];	
		}
		

		
	
		if(this.currentSeq !=s[0]  || this.isSubClose || s[1]!="-1"){
			
			//this.setSubMenuOut(this.currentSeq);
			//$(thisMenu).addClass("over");
			if(s[1]!="-1")		this.setSubMenuOn(s[0]);
			
		}


		this.currentSeq = s[0];


		
	},
	setSubMenuOn:function(seq){
		clearTimeout(this.subTimer );
		var this_s = this;

		this_s.isSubClose = false;


		

		//var subMenu = $(".sub-list",$(this.mnItems[seq-1]).get(0));

		var _n = seq-1;
		var thisMenu =(seq>0)?  $(this.mnItems[_n]).get(0) : null;
		var subMenu = $(".sub-list",$(thisMenu));

		var otherMenu = (seq>0)? $(this.mnItems).not(thisMenu) : this.mnItems ;
		var otherSubMenu = $(".sub-list",$(otherMenu));


		$(subMenu).css("visibility","visible");
		var toHeight = $(subMenu).attr("_h");

		$(subMenu).stop().show().animate({height:toHeight},200);
		$(otherSubMenu).stop().animate({height:0},200,function(){$(this).hide();});
		//$(subMenu).fadeIn();



		//this.setSubMenuOutSet(5000);
		
	},
	setSubMenuOutSet:function(time){
		var this_s = this;
		this.subTimer = setTimeout(function(){
			if(!this_s.isSubOver){
				//$(".depth3w").animate({left:-140});
				this_s.isSubClose = true;
				var subMenus = $(".sub-list");
				for (i=0;i<subMenus.length ;i++ )
				{
					$(subMenus[i]).stop().animate({height: 0},200,function(){$(this).hide()});
				}

			

			}

		},time);
	},
	setMenuOut:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		this.isOver = false;	
		this.Timer = setTimeout(function(){
			if(this_s.isOver==false) {
				this_s.setSubMenuOutSet(100);
				//this_s.setMenuOn(0,"-1");
			}
		},100);
	}
}

function initCNavigation() {
	contNavi.init("cont-navi");
}

//initCNavigation();
