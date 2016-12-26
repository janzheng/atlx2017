
// https://github.com/Prinzhorn/skrollr
// var s = skrollr.init({forceHeight: false});


// ************************************************************
// Smooth Scrolling 
// - can link to a # of another page, and smooth-scroll down to that #

  var scrollElement = 'html, body';
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();
    
    var $this = $(this),
    target = this.hash,
    $target = $(target);
    
    if( !(typeof $target.offset() === "undefined")) {
      $(scrollElement).stop().animate({
        'scrollTop': $target.offset().top
      }, 500, 'swing', function() {
        window.location.hash = target;
      });
    }
  });




$(document).ready(function() {
  var windowHeight = $(window).height();
  var logoHeight = $('.page-home--logo').height();
  console.log(windowHeight);

  $('._windowHeight').css({'height': windowHeight * 0.75});
  // $('.page-home--logo').css({'padding-top': (windowHeight * 0.75)/2 - logoHeight/2})
});


// enable fittext
// $('#test').bigtext();
$("._headline-fixed").each(function( index ) {
  $(this).bigtext();
});


// need a font-loader to run bigtext
$(function() {
  WebFont.load({
    custom: {
        families: ['Trend Sans One'], // font-family name
        urls : ['app/fonts/trendsansone/trendsansone.css'] // URL to css
    },
    active: function() {
      $("._headline-fixed").each(function( index ) {
        $(this).bigtext();
      });
    }
  });
});


