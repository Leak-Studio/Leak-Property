
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('[data-slider="kitchen"], [data-slider="second"]')
    .forEach((root) => {
      const mainEl = root.querySelector('[data-slider-main]');
      const thumbsEl = root.querySelector('[data-slider-thumbs]');

      if (!mainEl || !thumbsEl) return;

      const thumbsSwiper = new Swiper(thumbsEl, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 4,
        freeMode: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loop: false,
        breakpoints: {
          992: {
            direction: 'vertical',
            slidesPerView: 'auto',
          }
        }
      });

      new Swiper(mainEl, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        thumbs: {
          swiper: thumbsSwiper,
        },
      });
    });
});
