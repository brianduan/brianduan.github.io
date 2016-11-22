$(document).ready(function(){
	$(".nav a").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	});

	$(".Title1").hover(function(){
		$(".Page1").addClass("show");
	},function(){
		$(".Page1").removeClass("show");
		$(".Page1").addClass("hide");
	});

	$(".Page1").hover(function(){
		$(".Page1").addClass("show");
	},function(){
		$(".Page1").removeClass("show");
		$(".Page1").addClass("hide");
	});

	$(".Title2").hover(function(){
		$(".Page2").addClass("show");
	},function(){
		$(".Page2").removeClass("show");
		$(".Page2").addClass("hide");
	});

	$(".Page2").hover(function(){
		$(".Page2").addClass("show");
	},function(){
		$(".Page2").removeClass("show");
		$(".Page2").addClass("hide");
	});

	$(".Title3").hover(function(){
		$(".Page3").addClass("show");
	},function(){
		$(".Page3").removeClass("show");
		$(".Page3").addClass("hide");
	});

	$(".Page3").hover(function(){
		$(".Page3").addClass("show");
	},function(){
		$(".Page3").removeClass("show");
		$(".Page3").addClass("hide");
	});

	$(".Title4").hover(function(){
		$(".Page4").addClass("show");
	},function(){
		$(".Page4").removeClass("show");
		$(".Page4").addClass("hide");
	});

	$(".Page4").hover(function(){
		$(".Page4").addClass("show");
	},function(){
		$(".Page4").removeClass("show");
		$(".Page4").addClass("hide");
	});

	$(".Title5").hover(function(){
		$(".Page5").addClass("show");
	},function(){
		$(".Page5").removeClass("show");
		$(".Page5").addClass("hide");
	});

	$(".Page5").hover(function(){
		$(".Page5").addClass("show");
	},function(){
		$(".Page5").removeClass("show");
		$(".Page5").addClass("hide");
	});
	
	// $(".Page1").hover(function(){
	// 	$(".Page1").show();
	// },function(){
	// 	$(".Page1").hide();
	// });
	showBigImg();
	showSmallImg1();
	showSmallImg2();
});
function showBigImg(){
	var index=0;
	$(".banner_big .imgNum a").mouseover(function(){
		var imgNum = $(this).attr("value");
		index = imgNum-1;
		$(".banner_big .imgBox").animate({"left":"-"+index*810},1000);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	var timerbig = null;
	timerbig=setInterval(function(){
		if(index==3){
			index=-1;
		}
		index+=1;
		$(".banner_big .imgNum a").eq(index).trigger("mouseover");
	},5000);
}
function showSmallImg1(){
	var index=0;
	$(".banner_sm1 .imgNum a").mouseover(function(){
		var imgNum = $(this).attr("value");
		index = imgNum-1;
		$(".banner_sm1 .imgBox").animate({"left":"-"+index*190},1000);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	var timersm = null;
	timersm=setInterval(function(){
		if(index==3){
			index=-1;
		}
		index+=1;
		$(".banner_sm1 .imgNum a").eq(index).trigger("mouseover");
	},3000);
}
function showSmallImg2(){
	var index=0;
	$(".banner_sm2 .imgNum a").mouseover(function(){
		var imgNum = $(this).attr("value");
		index = imgNum-1;
		$(".banner_sm2 .imgBox").animate({"left":"-"+index*190},1000);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	var timersm = null;
	timersm=setInterval(function(){
		if(index==3){
			index=-1;
		}
		index+=1;
		$(".banner_sm2 .imgNum a").eq(index).trigger("mouseover");
	},3000);
}