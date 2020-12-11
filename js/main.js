const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: ''
});


function openDrop() {
  let btnList = document.querySelectorAll('.header__link-bottom');
  let dropList = document.querySelectorAll('.header__drop');

  for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function () {
      dropList[i].classList.toggle('visible');
    })
    
  }
};
openDrop();


new Swiper('.first__swiper-container', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

})


const mySwiper = new Swiper('.swiper-container', {
  spaceBetween : 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  direction: 	'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'fraction',
  },

})

