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
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
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

const open = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');
const body = document.querySelector('body');
const forms = document.querySelectorAll('.form');

const openModal = () => {
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
  body.style.overflowY = 'hidden';
};

const closeModal = (e) => {
  if (
    e === 'close' ||
    e.target === modal ||
    e.target.closest('.modal__close')
  ) {
    modal.style.opacity = '0';
    body.style.overflowY = 'auto';
    setTimeout(() => {
      modal.style.visibility = 'hidden';
    }, 300);
  }
};

modal.addEventListener('click', closeModal);
open.addEventListener('click', openModal);

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('formData: ', formData);
    form.reset();
    closeModal('close');
  });
});

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header');

const burgerControl = () => {
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('nav_active');
  logo.classList.toggle('logo_active');
  header.classList.toggle('header_active');
  open.classList.toggle('header__btn_active');
  if (body.style.overflowY === 'hidden') {
    body.style.overflowY = 'auto';
  } else {
    body.style.overflowY = 'hidden';
  }
};

burger.addEventListener('click', burgerControl);
navigation.addEventListener('click', burgerControl);
