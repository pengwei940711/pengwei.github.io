//右侧栏
//1,返回顶部
//右侧栏
		//1,返回顶部
//		console.log($(document).scrollTop());
		$('.sidebar .iconfont').eq(9).click(function(){
//			alert(1);
			var timer =	setInterval(function(){
				var $T=$(document).scrollTop();
						$T-=20;
					$(document).scrollTop($T);
					if($T==0){
						clearInterval(timer);
					}
			},30)
})
		
//顶部图片
$('.close').click(function(){
	$('.love').hide();
})
//导航
$('.navleft1').mouseover(function(){
	$('.navleft1cont').show();
//	$('.navnl1 i').css('-webkit-transform','rotate(180deg)');
	$('.navleft1').mouseout(function(){
//		$('.navnl1 i').css('-webkit-transform','rotate(0deg)');
		$('.navleft1cont').hide();
	})
	return false;
})
$('.navleft2').mouseover(function(){
	$('.navleft2cont').show();
	$('.navnl2 i').css('-webkit-transform','rotate(180deg)');
	$('.navleft2').mouseout(function(){
		$('.navnl2 i').css('-webkit-transform','rotate(0deg)');
		$('.navleft2cont').hide();
	})
	return false;
})
$('.indent').mouseover(function(){
	$('.navright2cont').show();
	$('.navright2cont').css('border-top','none');
	$('.indent1 i').css('-webkit-transform','rotate(180deg)');
	$('.indent').mouseout(function(){
		$('.indent1 i').css('-webkit-transform','rotate(0deg)');
		$('.navright2cont').hide();
	})
	return false;
})
$('.tesco').mouseover(function(){
	$('.tescocont').show();
	$('.tesco1 i').css('-webkit-transform','rotate(180deg)');
	$('.tesco').mouseout(function(){
		$('.tesco1 i').css('-webkit-transform','rotate(0deg)');
		$('.tescocont').hide();
	})
	return false;
})
$('.shopping_cart').mouseover(function(){
	$('.cartcont').show();
	$('.navr4 i').eq(1).css('-webkit-transform','rotate(180deg)');
	$('.shopping_cart').mouseout(function(){
		$('.navr4 i').eq(1).css('-webkit-transform','rotate(0deg)');
		$('.cartcont').hide();
	})
	return false;
})
$('.service').mouseover(function(){
	$('.serve').show();
	$('.service1 i').css('-webkit-transform','rotate(180deg)');
	$('.service').mouseout(function(){
		$('.service1 i').css('-webkit-transform','rotate(0deg)');
		$('.serve').hide();
	})
	return false;
})
$('.navright3').mouseover(function(){
	$('.navright3cont').show();
	$('.navr5 i').eq(1).css('-webkit-transform','rotate(180deg)');
	$('.navright3').mouseout(function(){
		$('.navr5 i').eq(1).css('-webkit-transform','rotate(0deg)');
		$('.navright3cont').hide();
	})
	return false;
})
//全部分类
$('.category li').eq(0).mouseover(function(){
	$('.index-sort-detail').show();
	$('.dynamicimagecont').mouseleave(function(){
		$('.index-sort-detail').hide();
	})
	return false;
})


// 图片轮播
//var oCont=document.getElementById('content');
//var oPic=document.getElementById('pic');
//var oPrev=document.getElementsByClassName('clickleft');
//var oNext=document.getElementsByClassName('clickright');
//var aLi=oCont.getElementsByTagName('li');
//var Len=aLi.length;
//var arrImg = ['img/a.jpg','img/a1.jpg','img/a2.jpg','img/a3.jpg','img/a4.jpg','img/a5.jpg','img/a9.png','img/a10.png'];
//var num=0;
//for(var i=0;i<Len;i++){
//	aLi[i].index=i;
//	aLi[i].onmouseover=function(){
//		num=this.index;
//		change();
//	}
//}
//oNext.onclick=function(){
//	if(num<Len-1){
//		num++;
//	}else{
//		num=0;
//	}
//	change();
//}
//
//oPrev.onclick=function(){
//	if(num>0){
//		num--;
//	}else{
//		num=Len-1;
//	}
//	change();
//}
//function change(){
//	oPic.src=arrImg[num];
//	for(var i=0;i<Len;i++){
//		aLi[i].style.background='#FFF';
//	}
//	aLi[num].style.background='#D49825';
//}
var arrImg = ['img/a.jpg','img/a1.jpg','img/a2.jpg','img/a3.jpg','img/a4.jpg','img/a5.jpg','img/a9.png','img/a10.png'];
$('#list li').mouseover(function(){
	$('#list li').removeClass('active');
	$(this).addClass('active');
	$('#pic').attr('src',arrImg[$(this).index()]);
})
