$(document).ready(function(){
    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
    
        // console.log(window.scrollY);

        if (scrollY >= 100) {
            $(".about").addClass("active");
        }
        if (scrollY >= 900) {
            $(".slogan").addClass("active");
        }
        if (scrollY >= 1400) {
            $(".symbol").addClass("fadeIn");
        }
        if (scroll >= 1500) {
            $(".symbol_circle li").each(function (index) {
                setTimeout(function () {
                    $(".symbol_circle li").eq(index).addClass("active");//active-opacity:1;
                }, index * 300);
            });
        }
        if (scroll >= 2100) {
            $(".biIntro article div").each(function (index) {
                setTimeout(function () {
                    $(".biIntro article div").eq(index).addClass("fadeIn");
                }, index * 300);
            });
        }
        if (scroll >= 3050) {
            $(".biFont article div").each(function (index) {
                setTimeout(function () {
                    $(".biFont article div").eq(index).addClass("fadeIn");
                }, index * 300);
            });
        }
    });
})