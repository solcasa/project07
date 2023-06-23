$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });

    $('.main_slide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
    });

    $('button').click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('button.active').removeClass('active');

        var $outer = $this.closest('.outer');
        var $current = $outer.find(' > .tabs > .tab.active');
        var $post = $outer.find(' > .tabs > .tab').eq(index);

        $current.removeClass('active');
        $post.addClass('active');
        // 위의 코드는 탭메뉴 코드입니다.

        $('.slider').slick('setPosition');
    });

    // 기존 처음의 slick 적용
    $('.slider').slick({
        slidesToShow: 3,
        dots: true,
        arrows: false,
    });

    $('.big_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_guide .itm').eq(c).addClass('on')
            .siblings().removeClass('on');
    })

    $('.big_slide').slick({
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,

    });

    $('.main_guide .tab_arrows .left').on('click', function () {
        $('.big_slide').slick('slickPrev')
    });
    $('.main_guide .tab_arrows .right').on('click', function () {
        $('.big_slide').slick('slickNext')
    });

    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }

    });

})