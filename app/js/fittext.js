/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600


container width
span width * x = container width
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY,
          'container' : null
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);
      var $container = $(settings.container)
      console.log($this)
      console.log($this.width())
      console.log('container: ' + $container)

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        var size = Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize));
        console.log('size: ' + size);

        // if()
        // $this.css({'font-size', size});
        $this.css({"font-size": size, "line-height": 1.3})
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );