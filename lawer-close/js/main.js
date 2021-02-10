$(function(){
    $('.header__slider-inner').slick({
        dots:  false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/arrow-prew.png" alt=""> </button>',
        nextArrow: '<button class="slick-prev slick-arrow"><img src="../images/arrow-next.png" alt=""> </button>'
    });

    $('.about__menu-tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.about__menu-tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.about__menu-tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
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
        $('.header__menu-list').slideToggle();
    });

  });