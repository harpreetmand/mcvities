$('document').ready(function() {
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var scrolltop = window.pageYOffset;
     TweenMax.to('.anim-text', 0,{y:-scrolltop * .5 + 'px'});
     TweenMax.to('.wtb-back1 ,.wtb-back16 ,.wtb-back15 ,.wtb-back10 ,.wtb-back19', 0,{y:scrolltop * .1 + 'px'});
     TweenMax.to('.wtb-back7 ,.wtb-back18 ,.wtb-back14 ,.wtb-back4 ,.wtb-back17', 0,{y:scrolltop * .1 + 'px'});
     TweenMax.to('.wtb-back13 ,.wtb-back19 ,.wtb-back18 ,.wtb-back16', 0,{y:-scrolltop * .1 + 'px'});
     TweenMax.to('.wtb-back11 ,.wtb-back12 ,.wtb-back2 ,.wtb-back5', 0,{y:-scrolltop * .1 + 'px'});
 });

  /***********************************************
  Main nav
  **********************************************/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 130) {
      $('header').addClass('sticky');
    }
    if ($(this).scrollTop() === 0) {
        $('header').removeClass('sticky');
    }
  });
  /***************************************
  Smooth Scroll
  ****************************************/
})
