const menuItems = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.section');
const footer = document.getElementById('footer');
let currentSectionIndex = 0;
const breakpoint = 1024; // 화면 너비가 1024px 이하일 경우 자동 스크롤


// 메뉴 클릭 시 섹션으로 이동
menuItems.forEach((item, index) => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    moveToSection(index);
  });
});

// 섹션 이동 함수
function moveToSection(index) {
  if (index >= 0 && index < sections.length) {
    currentSectionIndex = index;
    sections[currentSectionIndex].scrollIntoView({
      behavior: 'smooth'
    });
    updateMenu();
  }
}

// 메뉴 활성화 함수
function updateMenu() {
  menuItems.forEach((item, index) => {
    if (index === currentSectionIndex) {
      item.classList.add('page');
    } else {
      item.classList.remove('page');
    }
  });
}

// 풀페이지 스크롤 처리
function handleScroll(event) {
  if (window.innerWidth <= breakpoint) {
    return; // 화면 너비가 1024px 이하일 경우 자동 스크롤 처리
  }
  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    currentSectionIndex--;
  }
  moveToSection(currentSectionIndex);
}

// 풀페이지 스크롤 초기화
function initFullPageScroll() {
  if (window.innerWidth > breakpoint) {
    document.body.style.overflow = 'hidden'; // 스크롤 숨김
    window.addEventListener('wheel', handleScroll); // 휠 이벤트
  } else {
    document.body.style.overflow = 'auto'; // 일반 스크롤
    window.removeEventListener('wheel', handleScroll); // 휠 이벤트 제거
  }
}


// 창 크기 변경 시 스크롤 방식 변경
window.addEventListener('resize', initFullPageScroll);

// 초기화 실행
initFullPageScroll();
moveToSection(currentSectionIndex);

// 섹션을 스크롤 했을 때 메뉴 활성화 적용
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSectionIndex = index;
      updateMenu();
    }
  });
});