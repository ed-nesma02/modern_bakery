const swiper = new Swiper('.formatsSwiper', {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.formats__swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
