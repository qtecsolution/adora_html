const services = new Swiper(".serviceselects", {
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  spaceBetween: 10,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 4
    }
  }
})