window.onload = function () {
    //변수들 선언 초기화
    let gnbLi = $('#gnb>li')
    let header = $('header')

    header.on('mouseenter focusin', function () {
        $(this).addClass('on')
    })
    header.on('mouseleave focusout', function () {
        $(this).removeClass('on')
    })


    gnbLi.on('mouseenter focusin', function () {
        $(this).children('.depth1').addClass('current')
    })
    gnbLi.on('mouseleave focusout', function () {
        $(this).children('.depth1').removeClass('current')
    })


    //메인비주얼 스와이퍼 슬라이드
    const swiper1 = new Swiper('.main_vs', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_vs .swiper-button-next',
            prevEl: '.main_vs .swiper-button-prev',
        },
    });

    //심사위원 스와이퍼 슬라이드
    const swiper2 = new Swiper('.judge_swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.judge_swiper .swiper-pagination',
            clickable : true, 
        },

        navigation: {
            nextEl: '.judge_swiper .swiper-button-next',
            prevEl: '.judge_swiper .swiper-button-prev',
        },
    });
}