const services = new Swiper(".serviceselects", {
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  spaceBetween: 10,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.slidenext',
    prevEl: '.slideprev',
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