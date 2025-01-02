// 큰 이미지와 썸네일
const slides = document.querySelectorAll(".gallery-main img");
const thumbnails = document.querySelectorAll(".thumbnails img");

// 버튼
const prevButton = document.querySelector(".arrow.prev");
const nextButton = document.querySelector(".arrow.next");

let currentIndex = 0;

// 함수: 슬라이드 업데이트
function updateSlide(index) {
   // 모든 슬라이드와 썸네일에서 'active' 제거
   slides.forEach((slide) => slide.classList.remove("active"));
   thumbnails.forEach((thumb) => thumb.classList.remove("active"));
   // 현재 슬라이드와 썸네일에 'active' 추가
   slides[index].classList.add("active");
   thumbnails[index].classList.add("active");
}

// 이전 버튼 클릭 이벤트
prevButton.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + slides.length) % slides.length; // 이전 슬라이드로 이동 (순환)
    updateSlide(currentIndex);
});

// 다음 버튼 클릭 이벤트
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length; // 다음 슬라이드로 이동 (순환)
    updateSlide(currentIndex);
});

// 썸네일 클릭 이벤트
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index; // 클릭한 썸네일의 인덱스로 이동
        updateSlide(currentIndex);
    });
});

// 자동 슬라이드 기능 (옵션)
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length; // 다음 슬라이드로 이동
//     updateSlide(currentIndex);
// }, 6000); // 6초마다 슬라이드 전환