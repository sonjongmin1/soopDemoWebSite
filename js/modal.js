/*모달창 구현*/

let modalBox = document.querySelector(".modalBox");
let posterImg = document.querySelectorAll(".posterBox > a");
let modalBoxImg = document.querySelector(".modalBoxImg");

function isMobile() {
  return window.innerWidth <= 768; // 768px 이하를 모바일로 간주
}

posterImg.forEach(function (k, index) {
  k.addEventListener("click", function (e) {
    e.preventDefault();

    if (isMobile()) {
      console.log("모바일에서는 모달이 작동하지 않습니다.");
      return; // 모바일에서는 모달 열기 방지
    }

    modalBox.classList.add("on");
    if (index == 0) {
      modalBoxImg.classList.add("img1");
    } else if (index == 1) {
      modalBoxImg.classList.add("img2");
    } else if (index == 2) {
      modalBoxImg.classList.add("img3");
    } else if (index == 3) {
      modalBoxImg.classList.add("img4");
    } else if (index == 4) {
      modalBoxImg.classList.add("img5");
    } else if (index == 5) {
      modalBoxImg.classList.add("img6");
    }

    console.log(`인덱스:${index}`);
  });
});

modalBox.addEventListener("click", () => {
  modalBox.classList.remove("on");
  modalBoxImg.className = "modalBoxImg";
});

// modalBox.classList.remove("on");

/*모달창 구현 끝*/

// 모바일 모달창 구현
let mbHambar = document.querySelector(".mbHambar");

let mbModalBox = document.querySelector(".mbModalBox");

let colseX = document.querySelector(".colseX");

mbHambar.addEventListener("click", function () {
  mbModalBox.classList.add("on");
});

colseX.addEventListener("click", function () {
  mbModalBox.classList.remove("on");
});
// 모바일 모달창 구현끝
