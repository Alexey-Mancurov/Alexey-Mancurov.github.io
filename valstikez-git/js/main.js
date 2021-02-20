$(function () {

  $('.blog__sliger-inner').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/blog-slick-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/blog-slick-next.png" alt=""></button>',
  });
  $('.client__sliger-inner').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/blog-slick-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/blog-slick-next.png" alt=""></button>',
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.works__mixitabs-active').on('click', function () {
    $('.works__mixitabs-btn').slideToggle();
  });



});

$(function () {
  $('.page-works__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/blog-slick-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/blog-slick-next.png" alt=""></button>',
  });
});

$(function () {
  $('.popup-link').magnificPopup();
});

$(function () {
  $('.header__menu-btns').on('click', function () {
    $('.header__menu-list').slideToggle();
  });
});