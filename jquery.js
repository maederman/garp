$(function(){
  // 以下でBootstrapとjQueryの競合を避ける
  jQuery.noConflict();

  // 以下function($) { と(jQuery)で挟むことで、普通に記述できる
   (function($) {

     // 以下に普通にjQueryを書いていける！

     // $('#back-to-top').hide();

     $('window').scroll(function(){
       $('#pos').text($(this).scrollTop());
       if ($(this).scrollTop() > 60) {
         $('#back-to-top').fadeIn();
       } else {
         $('#back-to-top').fadeOut();
       }
     });


     $("#back-to-top").click(function() {
     $('body,html').animate({scrollTop:0},500,'linear');
   });






 })(jQuery);
});
