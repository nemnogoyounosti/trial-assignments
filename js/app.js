$(document).ready(function(){
  $('.card__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.card__slider-nav',
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: false
        }
      }
    ]
  });
  $('.card__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.card__slider-for',
    dots: false,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    appendArrows:'.card__slider-arrows',
    nextArrow: '<img src="img/icons/arrows.png" alt="">',
    responsive: [
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: false,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  $('.card__details-faq').on('click', function () {
    $(this).children('.card__details-answer').slideToggle("slow");
    $(this).toggleClass("open");
  });

});

