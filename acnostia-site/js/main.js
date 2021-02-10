$(function(){
    $('.first__slider-inner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/arrow-prew.png" alt=""> </button>',
        nextArrow: '<button class="slick-prev slick-arrow"><img src="../images/arrow-next.png" alt=""> </button>'
    });
});


$(function(){
    $(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});

$('.header__menu-btn').on('click', function(){
    $('.menu__list').slideToggle();
});

var mixer = mixitup('.portfolio__inner');