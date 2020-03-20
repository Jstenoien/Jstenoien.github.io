function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,150)};return c};

on_resize(function() {
                var targetInnerHeight = window.innerWidth * 900 / 1600;
                var heightDiff = window.outerHeight - window.innerHeight;
                var targetOuterHeight = targetInnerHeight + heightDiff;
                window.resizeTo(window.outerWidth, targetOuterHeight);
                location.reload();
});