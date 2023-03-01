var swiper = new Swiper(".featureSwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // '1024' : {
    //   slidesPerView: 2,
    // },
    769: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  speed: 1000,
});
