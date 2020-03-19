(function($,sr){

  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };

  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

$(window).smartresize(function(){
                var targetInnerHeight = window.innerWidth * 800 / 900;
                var heightDiff = window.outerHeight - window.innerHeight;
                var targetOuterHeight = targetInnerHeight + heightDiff;
                window.resizeTo(window.outerWidth, targetOuterHeight);
                location.reload();
});