new Swiper ('.reviews-slider',{
   // navigation: {
   //    nextEl: '.reviews-slider__arrow.swiper-button-next',
   //    prevEl: '.reviews-slider__arrow.swiper-button-prev',
   //  },
   pagination: {
      el: '.reviews-slider__pagination.swiper-pagination',
      clickable: true,
    },
   // Перетаскивание на ПК
simulateTouch: true,

// Чувствительность свайпа
touchRatio: 1,

// Угол срабатывания свайпа/перетаскивания
touchAngle: 45,

// Курсор перетаскивания
grabCursor: true,

// Переключение при клике на слайд
slideToClickedSlide: true,

// // Навигация по хешу
// hashNavigation: {
//     // отслеживать состояние
//     watchState: true,
// },

// Управление клавиатурой
keyboard: {
    // включить/выключить
    enabled: true,

    // Вкл/Выкл только когда слайдер в пределах вьюпорта
    onlyInViewport: true,

    // включить/выключить управление клавиатурой PageUp, pageDown
    pageUpDown: true,
},

// Количство слайдов для показа
slidesPerView: 3,

breakpoints: {
  320: {
      slidesPerView: 1,
  },
  520: {
      slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2,
},
  992: {
      slidesPerView: 3,
  }
}, 

// Отступ между слайдами
spaceBetween: 30,

    // Эффекты переключение слайдов
    // Листание
    effect: 'slide',

});