document.addEventListener("scroll",function(){
    // console.log(document.scrollingElement.scrollTop);

    if(document.scrollingElement.scrollTop>235){
        document.querySelector(".brand_ad h2").className="animate__animated animate__fadeInUp";
    }
    // if(document.scrollingElement.scrollTop>270 || document.scrollingElement.scrollTop>300){
    //     let liItem = document.querySelectorAll(".brand_wrap li");

    //     for(let i = 0;i<9;i++){
    //         liItem[i].className="animate__animated animate__fadeInUp";
    //     }
    // }    
});

$(document).ready(function(){

    $(".brand_wrap ul").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      });
});