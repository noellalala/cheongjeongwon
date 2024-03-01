$(document).ready(function(){
    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".brand_list li").each(function (index) {
                setTimeout(function () {
                    $(".brand_list li").eq(index).addClass("active");
                }, index * 500);
            });
        }
        
    });
});