document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer 옵션 설정
    const observerOptions = {
      root: null,           // viewport를 기준으로
      rootMargin: '0px',    // 뷰포트 경계에 여유를 두지 않음
      threshold: 0.5        // 요소가 50% 이상 보일 때 트리거
    };
  
    // 요소들이 나타날 때 'visible' 클래스를 추가하고, 순차적으로 딜레이를 두기 위해 index를 활용
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // 요소에 'visible' 클래스를 추가하여 애니메이션 시작
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 1000); // 각 요소에 순차적으로 1초씩 딜레이를 줌
          observer.unobserve(entry.target); // 요소가 보이면 더 이상 관찰하지 않음
        }
      });
    }, observerOptions);
  
    // 모든 요소를 관찰
    const elements = document.querySelectorAll('.delayed-element');
    elements.forEach((element, index) => {
      observer.observe(element);
    });
  });
  