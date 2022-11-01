// Event pada saat link di klik

$(".page-scroll").on("click", function(e) {

 var tujuan = $(this).attr("href");

 var elemenTujuan = $(tujuan);

 $("html , body").animate({
  scrollTop: elemenTujuan.offset().top - 50
 });

 e.preventDefault();
});


// Paralax
$(window).on("load", function(){
	$(".pkiri").addClass("pmuncul");
	$(".pkanan").addClass("pmuncul");
});

$( window).scroll(function() {
	var wScroll = $(this).scrollTop();

//Jumbotron
	$(".jumbotrom img").css({
		"transform" : "translate(0px, "+ wScroll/4 +"%)"
	});	

	$(".jumbotrom h1").css({
		"transform" : "translate(0px, "+ wScroll/2 +"%)"
	});



//Portfolio
if(wScroll > $(".portfolio").offset().top - 250) {
	$(".portfolio .thumbnail").each(function(i) {
		setTimeout(function(){
			$(".portfolio .thumbnail").eq(i).addClass("muncul");
		}, 300 * (i));
	});
	
}




});