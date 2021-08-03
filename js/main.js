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
// 탭 눌렸나 확인 슬라이더 박스 보여지기
const tabEls = document.querySelectorAll('.display-tab ul li');

const slideboxELs = document.querySelectorAll('.sliderbox');

for(let i=0;i<tabEls.length;i++){
  tabEls[i].addEventListener('mousedown',function () {
    for(let m = 0; m<tabEls.length; m++){
      tabEls[m].classList.remove('clicked');
    };
    tabEls[i].classList.add('clicked');
  });
};

// 해당 탭에 clicked 가 있으면 슬라이더 박스 가 보여진다.
for(let i=0;i<tabEls.length;i++){
  tabEls[i].addEventListener('click',function () {
    for(let p=0;p<slideboxELs.length;p++){
      slideboxELs[p].classList.remove('active');
    }
    slideboxELs[i].classList.add('active');
  });
};

// 반복문을 활요한 슬라이드 라디오 버튼에 따른 폼 변경
// radiobox , name 의 뒤에는 이하의 규칙으로 작성한다
for(let s=1; s <= slideboxELs.length; s++){
  let pages = document.querySelectorAll(`.sliderbox${s} .page`);
  let slides = 0;
  let a = 0;
  for (let p=1; p <= pages.length; p++){
    slides += (pages[p-1].childElementCount);
    for (let i = 1 + a; i <= slides; i++){
      let radiobox = document.querySelector(`.radiobox${s}${p}${i}`);
      let subarea = document.querySelector(`.radiobox${s}${p}${i} .quantity`);
      let oncearea = document.querySelector(`.radiobox${s}${p}${i} .quantity2`);
      radiobox.addEventListener('click', function (){
        if (document.querySelector(`.radiobox${s}${p}${i} input[name="${s}${p}${i}"]:checked`).value == 'once'){
          subarea.classList.remove('visual');
          oncearea.classList.add('visual');
        } else {
          oncearea.classList.remove('visual');
          subarea.classList.add('visual');
        }
      });
    };
    a += slides
  };
}

// ${s,p,i} 는 안됨
