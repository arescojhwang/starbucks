// 검색창 요소(.search) 찾기.
 const searchEL = document.querySelector('.search');
 const searchInputEL = searchEL.querySelector('input');
  
 //돋보기 이미지 클릭시 검색창에 포커스 가게하기
   searchEL.addEventListener('click',function(){
    searchInputEL.focus();
   });

 //검색창에 포커스가된 상태에서 '통합검색' placdholder 표시
   searchInputEL.addEventListener('focus',function(){
     searchEL.classList.add('focused');  //search 클래스에 focused 추가
     searchInputEL.setAttribute('placeholder','통합검색');
   });

 //검색창에서 포커스가 해제되면 focus 제거
 searchInputEL.addEventListener('blur',function(){
  searchEL.classList.remove('focused');  //search 클래스에 focused 추가
  searchInputEL.setAttribute('placeholder','');
});

//badge 스크롤(?%) 내리면 사라짐 처리
const badgeEl = document.querySelector('header .badges');
// to-top 변수 설정
const toTopEl = document.querySelector('#to-top');

//보이는 화면
//cdnjs.cloudflare.com _.throttle: 스크롤 이동시 카운트 속도 지연
//_.throttle(함수, 시간(ms))
window.addEventListener('scroll',_.throttle(function (){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소,지속시간,옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0 ,
      display: 'none'
    });

    // to top 버튼 보이기
    gsap.to(toTopEl, .2,{
      x: 0
    });

  } else {
    //배지표시
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1 ,
      display: 'block'
    });

  // to top 버튼 숨기기
    // to top 버튼 보이기
    gsap.to(toTopEl, .2,{
      x: 100
    });

  }
}, 300));


//to top 버튼 클릭시 화면의 최상단으로 이동
toTopEl.addEventListener('click',function() {
  gsap.to(window, .7, {
    scrollTo: 0   //스크롤이 0인 지점 최상단
  })
})




// fade-in 
const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL,index){
  // gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * .7,    //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

// SWIPER
// new Swiper(선택자, 옵션)
/**
 * 슬라이드 요소 관리
 */
 new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container',{
  // directtion: 'horizontal',  기본값이여서 생략
  slidesPerView: 3,  //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

// AWARD 슬라이드 
// new Swiper('.awards .swiper-container',{
//   // direction: 'horizontal'; 기본옵션이여서 주석
//   autoplay: true,
//   loop: true,
//   spaceBetween: 30,    // 요소사이사이 여백
//   slidesPerView: 5,     //5개 화면 표시 
//   // navigation: {
//   //   prevEl:'.awards .swiper-prev',
//   //   nextEl:'.awards .swiper-next'
//   // }
// });

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});




//프로모션 토글처리
const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHideToggleBtn = false;
promotionToggleBtn.addEventListener('click',function(){
  isHideToggleBtn = !isHideToggleBtn;
  if(isHideToggleBtn) {
    //숨김처리
    promotionEL.classList.add('hide');
  } else {
    //보임처리
    promotionEL.classList.remove('hide');
  }
});

//유튜브 영상위에 떠다니는 이미지 처리

//램덤함수생성
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
 //gsap.to(요소, 시간 , 옵션);
 gsap.to(
   selector,    //선택자
   random(1.5, 2.5),  //애니메이션 동작시간
   {           //옵션  
   y: size,      // y축으로 20px 이동
   repeat: -1, //무한 반복
   yoyo: true, //실행된 방향의 반대 방향으로 실행 (요요처럼)
   ease: Power1.easeInout,   // ease 함수를 통해 좀더 부드럽게 표현
   delday: random(0,delay)
 })
};
//function 실행
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


//scrollmagic
const spyELs = document.querySelectorAll('section.scroll-spy');
spyELs.forEach(function(spEL) {
  new ScrollMagic
    .Scene({
      triggerElement: spEL, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8        // scroll-spy가 추가된 영역을  0 - 1 사이 0.8 되는 지점에 스크롤이 왔을때 이벤실행
    })
    .setClassToggle(spEL,'show')
    .addTo(new ScrollMagic.Controller());
});

//년도계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //2022


