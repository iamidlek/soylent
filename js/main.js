// 스크롤시 사라지는 notion banner
const notionBannerEl = document.querySelector('.notice__banner')
// 헤더가 없어진 부분만큼 올라가면서 fixed 로바뀜
const mainHeaderEl = document.querySelector('.main__header');
  
  //lodash cdn → _.throttle(함수,시간) 이용  
  // gsap.to(요소,지속시간, 옵션)
window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY)
  if (window.scrollY <= 5){
    gsap.to(mainHeaderEl, 0.1,{
      top: '60px',
    });
  } else if (window.scrollY > 1 && window.scrollY <= 40){
    gsap.to(mainHeaderEl, 0.1,{
      top: '30px',
    });
  } else if (window.scrollY > 40){
    gsap.to(mainHeaderEl, 0.1,{
      top: '0',
    });
  }
},10));



