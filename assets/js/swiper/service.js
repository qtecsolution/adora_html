const services = new Swiper(".serviceselects", {
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerGroup: 2,
      slidesPerView: 2
    },
    480: {
      slidesPerGroup: 3,
      slidesPerView: 3
    },
    991: {
      slidesPerGroup: 4,
      slidesPerView: 4
    }
  }
})