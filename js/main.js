// 스크롤시 사라지는 notion banner
const notionBannerEl = document.querySelector('.notice__banner')
// 헤더가 없어진 부분만큼 올라가면서 fixed 로바뀜
const mainHeaderEl = document.querySelector('.main__header');
  
  //lodash cdn → _.throttle(함수,시간) 이용  
  // gsap.to(요소,지속시간, 옵션)
window.addEventListener('scroll', _.throttle(function (){
  if (window.scrollY <= 5){
    gsap.to(mainHeaderEl, 0.1,{
      top: '60px',
    });
  } else if (window.scrollY > 5 && window.scrollY <= 40){
    gsap.to(mainHeaderEl, 0.1,{
      top: '35px',
    });
  } else if (window.scrollY > 40 && window.scrollY <= 58){
    gsap.to(mainHeaderEl, 0.1,{
      top: '15px',
    });  
  } else if (window.scrollY > 58){
    gsap.to(mainHeaderEl, 0.1,{
      top: '0',
    });
  }
},10));


// 클릭시 텍스트에 글씨 변화 (하나만 켜지게)
const pEls = document.querySelectorAll('.menu__namae');
const pEl6 = document.querySelector('.header_search_link');

pEl6.addEventListener('mousedown', function () {
  for(let i = 0; i < pEls.length; i++){
    if (pEls[i].classList.contains('mousedowneff')){
      pEls[i].classList.remove('mousedowneff')
     };
  }
  pEl6.classList.add('mousedowneff');
});

for(let i = 0; i < pEls.length; i++){
  pEls[i].addEventListener('mousedown', function () {
    for(let r = 0; r < pEls.length; r++){
      if (pEls[r].classList.contains('mousedowneff')){
        pEls[r].classList.remove('mousedowneff')
       };
    }
    pEl6.classList.remove('mousedowneff');
    pEls[i].classList.add('mousedowneff');
  });
};


// 드롭리스트가 있는 메뉴에 mouse over 하면 보여지기

  // 이벤트리스너 대상
const btndrinkEls = document.querySelector('.drinks');
const btnpowderEls = document.querySelector('.powders');
const btnlearnEls = document.querySelector('.learns');

  // 변경 대상
const wrapEls = document.querySelector('.main__header .wrapper');
const wrap2El = document.querySelector('.main__header .wrap2');
const wrap3El = document.querySelector('.main__header .wrap3');

  // 유지 대상
const veEl = document.querySelector('.ve');
const ve2El = document.querySelector('.ve2');
const ve3El = document.querySelector('.ve3');

// hover 만 했을때
btndrinkEls.addEventListener('mouseover',function () {
  wrapEls.classList.add('hovered')
});
btndrinkEls.addEventListener('mouseout',function () {
  wrapEls.classList.remove('hovered')
});
// 내려온 메뉴 요소 위에 있을 때
wrapEls.addEventListener('mouseover',function () {
  wrapEls.classList.add('hovered')
});
wrapEls.addEventListener('mouseout',function () {
  wrapEls.classList.remove('hovered')
});
// 녹색 밑줄 유지
wrapEls.addEventListener('mouseover',function () {
  veEl.classList.add('ac')
});
wrapEls.addEventListener('mouseout',function () {
  veEl.classList.remove('ac')
});

// powder 동일 
btnpowderEls.addEventListener('mouseover',function () {
  wrap2El.classList.add('hovered')
});
btnpowderEls.addEventListener('mouseout',function () {
  wrap2El.classList.remove('hovered')
});
wrap2El.addEventListener('mouseover',function () {
  wrap2El.classList.add('hovered')
});
wrap2El.addEventListener('mouseout',function () {
  wrap2El.classList.remove('hovered')
});
wrap2El.addEventListener('mouseover',function () {
  ve2El.classList.add('ac')
});
wrap2El.addEventListener('mouseout',function () {
  ve2El.classList.remove('ac')
});
// learn 동일
btnlearnEls.addEventListener('mouseover',function () {
  wrap3El.classList.add('hovered')
});
btnlearnEls.addEventListener('mouseout',function () {
  wrap3El.classList.remove('hovered')
});
wrap3El.addEventListener('mouseover',function () {
  wrap3El.classList.add('hovered')
});
wrap3El.addEventListener('mouseout',function () {
  wrap3El.classList.remove('hovered')
});
wrap3El.addEventListener('mouseover',function () {
  ve3El.classList.add('ac')
});
wrap3El.addEventListener('mouseout',function () {
  ve3El.classList.remove('ac')
});

// display tab 클릭시 색, 언더라인
const tabEls = document.querySelectorAll('.display-tab ul li');

for(let i=0;i<tabEls.length;i++){
  tabEls[i].addEventListener('mousedown',function () {
    for(let m = 0; m<tabEls.length; m++){
      tabEls[m].classList.remove('clicked');
    };
    tabEls[i].classList.add('clicked');
  });
};

// // 선택 이벤트 영역
// const radioEl = document.querySelector('.radiobox1');
// // 보일 영역
// const area1 = document.querySelector('.radiobox1 .quantity');
// const area2 = document.querySelector('.radiobox1 .quantity2');

// radioEl.addEventListener('click', function () {
//   // 선택된 라디오 값 확인
//   if (document.querySelector('input[name="choice1"]:checked').value == 'once') {
//   area1.classList.remove('visual');
//   area2.classList.add('visual');
//   } else {
//     area2.classList.remove('visual');
//     area1.classList.add('visual');
//   }
// });

// const radio2El = document.querySelector('.radiobox2');
// const areas1 = document.querySelector('.radiobox2 .quantity');
// const areas2 = document.querySelector('.radiobox2 .quantity2');
// radio2El.addEventListener('click', function () {
//   // 선택된 라디오 값 확인
//   if (document.querySelector('input[name="choice2"]:checked').value == 'once') {
//     areas1.classList.remove('visual');
//     areas2.classList.add('visual');
//   } else {
//     areas2.classList.remove('visual');
//     areas1.classList.add('visual');
//   }
// });

// 반복문을 활요한 슬라이드 라디오 버튼에 따른 폼 변경
let pages = document.querySelectorAll('.sliderbox1 .page');

let slides = 0;
for (let i=0; i < pages.length; i++){
  slides += (pages[i].childElementCount);
};
for (let i=1; i <= slides; i++){
  let radiobox = document.querySelector(`.radiobox${i}`);
  let subarea = document.querySelector(`.radiobox${i} .quantity`);
  let oncearea = document.querySelector(`.radiobox${i} .quantity2`);
  radiobox.addEventListener('click', function (){
    if (document.querySelector(`.radiobox${i} input[name="choice${i}"]:checked`).value == 'once'){
      subarea.classList.remove('visual');
      oncearea.classList.add('visual');
    } else {
      oncearea.classList.remove('visual');
      subarea.classList.add('visual');
    }
  });
};
