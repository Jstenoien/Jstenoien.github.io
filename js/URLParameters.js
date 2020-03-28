var Link = window.location.href
var AppName = getParameter(Link, 'App')

function getParameter(Link,param){
    url = Link.split('?');
    var pattern = new RegExp(param+'=(.*?)(;|&|$)','gi');
    return url[1].split(pattern)[1];
}

switch (AppName) {
    case "StateLaw":
        var WinHeight = 800
        var WinWidth = 900
        var SVG_Splash = "svg/splash_9x8.svg"
        var AppID = "10119cbb-e254-4249-9b8c-353d128dfdb0"
        break;
    case "TechDashboard":
        var WinHeight = 900
        var WinWidth = 1600
        var SVG_Splash = "svg/splash_16x9.svg"
        var AppID = "ebe50e93-8baf-43c2-9587-daa36ec27267"
        break;
    default:
        var WinHeight = 800
        var WinWidth = 900
        var SVG_Splash = "svg/splash_statelaw.svg"
        var AppID = "10119cbb-e254-4249-9b8c-353d128dfdb0"
        break;
}

function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,150)};return c};

on_resize(function() {
                var targetInnerHeight = window.innerWidth * WinHeight / WinWidth;
                var heightDiff = window.outerHeight - window.innerHeight;
                var targetOuterHeight = targetInnerHeight + heightDiff;
                window.resizeTo(window.outerWidth, targetOuterHeight);
                location.reload();
});