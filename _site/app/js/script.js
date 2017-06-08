
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
  console.log('window height: ' + windowHeight);

  $('._windowHeight').css({'height': windowHeight * 0.5});

  var eventTime = moment("20170602","YYYYMMDD").unix();
  var interval = 1000;

  duration = moment.duration(eventTime - moment().unix(), 'seconds');
    $('._timeLeft--months').text(duration.months());
    $('._timeLeft--days').text(duration.days());
    $('._timeLeft--hours').text(duration.hours());
    $('._timeLeft--minutes').text(duration.minutes());
    $('._timeLeft--seconds').text(duration.seconds());
  setInterval(function(){
    duration = moment.duration(eventTime - moment().unix(), 'seconds');
      $('._timeLeft--months').text(duration.months());
      $('._timeLeft--days').text(duration.days());
      $('._timeLeft--hours').text(duration.hours());
      $('._timeLeft--minutes').text(duration.minutes());
      $('._timeLeft--seconds').text(duration.seconds());
  }, interval);
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
      $("._headline-max").each(function( index ) {
        $(this).bigtext({
            // maxfontsize: 96 // default is 528 (in px)
        });
      });
      $("._headline-fixed").each(function( index ) {
        $(this).bigtext({
            maxfontsize: 96 // default is 528 (in px)
        });
      });
      $("._secondline-fixed").each(function( index ) {
        $(this).bigtext({
            maxfontsize: 55 // default is 528 (in px)
        });
      });
    }
  });
});


