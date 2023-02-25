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


//년도계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //2022