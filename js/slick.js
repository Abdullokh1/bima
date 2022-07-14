$('.feedback__list').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow : ".feedback__left",
  nextArrow : ".feedback__right",
  responsive : [
    {
      breakpoint : 992,
      settings : {
        slidesToShow : 1
      }
    }
  ]
});

$(document).ready(function () {
  $('.popular__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow : ".popular__left",
    nextArrow : ".popular__right",
    responsive : [
      {
        breakpoint : 1200,
        settings: {
          slidesToShow : 3
        }
      },
      {
        breakpoint : 992,
        settings: {
          slidesToShow : 2
        }
      },
      {
        breakpoint : 768,
        settings: {
          slidesToShow : 1  
        }
      }
    ]
  });
})

$(document).ready(function () {
  $('.partner__list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow : ".partner__left",
    nextArrow : ".partner__right",
    responsive : [
      {
        breakpoint : 1400,
        settings: {
          slidesToShow : 5
        }
      },
      {
        breakpoint : 1200,
        settings: {
          slidesToShow : 4
        }
      },
      {
        breakpoint : 992,
        settings: {
          slidesToShow : 3  
        }
      },
      {
        breakpoint : 768,
        settings: {
          slidesToShow : 3  
        }
      },
      {
        breakpoint : 576,
        settings: {
          slidesToShow : 1  
        }
      }
    ]
  });
})