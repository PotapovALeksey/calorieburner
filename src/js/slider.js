import $ from "jquery";
import "slick-carousel";

$('.slider-list').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  });