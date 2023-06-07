var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2,
          spaceBetween: -50
        },
        820: {
          slidesPerView: 2,
          spaceBetween: -150
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: -100
        },
        // when window width is >= 480px
        1300: {
          slidesPerView: 3,
          spaceBetween: -180
        },
        // when window width is >= 640px
        1560: {
          slidesPerView: 3,
        }
      }
    });