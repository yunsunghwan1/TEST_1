// 테스트 시작 누르면 얼굴 인식 페이지로 이동
let contMain = document.querySelector(".cont-main");
let testStartBtn = document.querySelector(".btn-test-start");
let cont = document.querySelector(".cont");
let cover = document.querySelector(".cover");

testStartBtn.addEventListener("click", function(){
    contMain.style.display = "none";
    cover.style.display = "block";
    cont.style.display = "inline-block";
});


// 메인화면 - 이미지 슬라이드
const imgSlideItems = document.querySelectorAll(".img-slide-item");
let firstItem = imgSlideItems[0];

function imageSlide() {
    const currentItem = document.querySelector(".img-slide-item.active");
    if(currentItem) {
        currentItem.classList.remove("active");
        let next = currentItem.nextElementSibling;
        if(next) {
            next.classList.add("active");
        } else {
            firstItem.classList.add("active");
        }
    } else {
        firstItem.classList.add("active");
    }
}

setInterval(imageSlide, 200);
