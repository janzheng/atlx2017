
// https://github.com/Prinzhorn/skrollr
var s = skrollr.init({forceHeight: false});


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
  console.log(windowHeight);

  $('._windowHeight').css({'height': windowHeight});

});