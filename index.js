$(function(){
	var $inputSearch = $('#inputSearch');
	var $li = $('.nav li');
	var index = 0;
	//搜索框
	$inputSearch.on('focus',function(){
		if(this.value == this.defaultValue){
			this.value = '';
		}
	}).on('blur',function(){
		if(this.value == ''){
			this.value = this.defaultValue;
		}
	});
	//导航菜单
	$li.hover(function(){
		$(this).children('.jnNav').show();
	},function(){
		$(this).children('.jnNav').hide();
	});
	//商品分类
	$('.promoted').append('<s class="hot"></s>');
	//轮播图
	$('#jnImageroll div a').on('mouseover',function(){
		$(this).addClass('chos').siblings().removeClass('chos');
		index = $(this).index();
		$('#jnImageroll span img').eq(index).stop().fadeIn().parent().siblings().children().stop().fadeOut();
	});
	setInterval(function(){
		index++;
		if(index == $('#jnImageroll div a').length){
			index = 0;
		}
		$('#jnImageroll div a').eq(index).trigger('mouseover');
	},1500);
	//nav颜色,换肤
	$('#skin li').on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		//index = $('this').index();
	});
	$('#skin_0').on('click',function(){
		$('.mainNav').css({
			background: '#4A4A4A'
		});
		$('#jnCatalog h2').css({
   			background: '#6E6E6E'
		});
	});
	$('#skin_1').on('click',function(){
		$('.mainNav').css({
			background: '#BE46D8'
		});
		$('#jnCatalog h2').css({
   			background: '#D49AE1'
		});
	});
	$('#skin_2').on('click',function(){
		$('.mainNav').css({
			background: '#E44072'
		});
		$('#jnCatalog h2').css({
   			background: '#F296B2'
		});
	});
	$('#skin_3').on('click',function(){
		$('.mainNav').css({
			background: '#37C7D4'
		});
		$('#jnCatalog h2').css({
   			background: '#98E0E6'
		});
	});
	$('#skin_4').on('click',function(){
		$('.mainNav').css({
			background: '#F9AF2A'
		});
		$('#jnCatalog h2').css({
   			background: '#FFCF78'
		});
	});
	$('#skin_5').on('click',function(){
		$('.mainNav').css({
			background: '#B1D410'
		});
		$('#jnCatalog h2').css({
   			background: '#CDE074'
		});
	});
	///品牌活动
	$('#jnBrandTab li').on('click',function(){
		$(this).addClass('chos').siblings().removeClass('chos');
		$('#jnBrandList').animate({
			left: (-4 * $(this).index()) * 195
		},800);
	});
	var	$tooltipClass = $('.tooltip');
	$tooltipClass.hover(function(e){
		this.myTitle = this.title;
		var $toolTip = $('<div id="tooltip" style="top:'+(e.pageY + 30)+'px;left:'+(e.pageX + 30)+'px;">'+this.myTitle+'<div/>');
		$toolTip.appendTo('body').show('fast');
		this.title = '';
	},function(){
		this.title = this.myTitle;
		$('#tooltip').remove();
	});
	$tooltipClass.on('mousemove',function(e){
		$('#tooltip').offset({
			top: e.pageY + 20,
			left: e.pageX + 20
		});
	});

   

});














