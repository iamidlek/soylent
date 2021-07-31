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


