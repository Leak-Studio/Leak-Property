
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.projects-all_item-slider-wrapper').forEach((wrapper) => {
    const slider = wrapper.querySelector('.projects-all_item-slider.swiper');
    const scrollbar = wrapper.querySelector('.swiper-scrollbar');
    const prevEl = wrapper.querySelector('.swiper_left');
    const nextEl = wrapper.querySelector('.swiper_right');

    if (!slider || !scrollbar || !prevEl || !nextEl) return;
    if (slider.dataset.swiperInitialized) return;
    slider.dataset.swiperInitialized = 'true';

    new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      freeMode: true,
      scrollbar: {
        el: scrollbar,
        draggable: true,
        hide: false,
      },
      navigation: {
        prevEl,
        nextEl,
      },
    });
  });
});
