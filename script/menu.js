const menuItem = document.querySelectorAll('a[data-target]')

menuItem.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('data-target');
        // 클릭한 요소의 data-target 속성 값을 가져옵니다. 단순히 문자열 데이터를 저장한 변수
        const targetElement = document.getElementById(targetId);
        //문자열로 된 ID 값을 기반으로 실제 DOM 요소를 가져오는 변수입니다.
        //data-target에 해당하는 <section id="section1"> 태그를 불러옴
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



// function updateMenu(target) {
//     menuItem.forEach((menuItem) => menuItem.classlist.remove("page"))
// }

// console.log(menuItem)

// // 함수: 슬라이드 업데이트
// function updateSlide(index) {
//     // 모든 슬라이드와 썸네일에서 'active' 제거
//     slides.forEach((slide) => slide.classList.remove("active"));
//     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
//     // 현재 슬라이드와 썸네일에 'active' 추가
//     slides[index].classList.add("active");
//     thumbnails[index].classList.add("active");
//  }