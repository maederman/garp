$(function(){

  // 競合はしなくなったので、普通に書いても大丈夫？
  $("#back-to-top").click(function() {
  $('body, html').animate({scrollTop: 0},1500);
});

// $("h1").hide().fadeIn('slow');






     // $('a[href^=#]').click(function() {
     //   var href= $(this).attr("href");
     //   var target = $(href == "#" || href == "" ? 'html' : href);
     //   var position = target.offset().top;
     //   $('body.html').animate({scrollTop:position}, 1000, 'linear');
     //   return false;
     // });


//

// $('a[href^="#"]').click(function() {
//     // スクロールの速度
//     var speed = 400; // ミリ秒で記述
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });

// $('a[href^=#]'+'a:not(".nav-link")').click(function(){
//          var speed = 500;
//          var href= $(this).attr("href");
//          var target = $(href == "#" || href == "" ? 'html' : href);
//          var position = target.offset().top;
//          $("html, body").animate({scrollTop:position}, speed, "swing");
//          return false;
//         });




// ページ内リンクへの移動





  // 以下でBootstrapとjQueryの競合を避ける
  jQuery.noConflict();

  // 以下function($) { と(jQuery)で挟むことで、普通に記述できる
   (function($) {


       // $('window').scroll(function(){
       //   $('#pos').text($(this).scrollTop());
       //   if ($(this).scrollTop() > 60) {
       //     $('#back-to-top').fadeIn();
       //   } else {
       //     $('#back-to-top').fadeOut();
       //   }
       // });

       // $("h1").fadeIn();

       // お問い合わせフォームの自動返信
       // function showThxMessage(){
       //    var email = document.myForm.emailAddress.value;
       //    if(email !== ''){
       //        var thxDiv = document.getElementById('thxMessage');
       //        thxDiv.getElementsByTagName('span')[0].innerHTML = email;
       //        document.myForm.reset();
       //        document.getElementById('formWrapper').style.display = 'none';
       //        thxDiv.style.display = 'block';
       //    };
       // };








 })(jQuery);

 });
