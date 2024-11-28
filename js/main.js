/*메뉴 구현*/
let gnbMenus = document.querySelectorAll("#gnbMenu");
let depth2_bg = document.querySelector(".depth2_bg");
let depth2 = document.querySelectorAll(".depth2");
let flag = false;

gnbMenus.forEach((menu, index) => {
  menu.addEventListener("mouseover", () => {
    depth2_bg.classList.add("on");
  });

  // 메뉴에 마우스가 들어올 때 depth2 표시
  menu.addEventListener("mouseover", () => {
    depth2[index].classList.add("on");
  });
  // 메뉴에서 마우스가 나갈 때 depth2 숨김
  menu.addEventListener("mouseout", () => {
    depth2[index].classList.remove("on");
    depth2_bg.classList.remove("on");
  });
  // depth2에 마우스가 들어왔을 때
  depth2[index].addEventListener("mouseover", () => {
    depth2[index].classList.add("on");
  });
  // depth2에서 마우스가 나갈 때
  depth2[index].addEventListener("mouseout", () => {
    depth2[index].classList.remove("on");
    depth2_bg.classList.remove("on");
  });
});

/*메뉴 구현 디테일 hover, window scroll*/
let header = document.querySelector("header");

header.addEventListener("mouseover", function () {
  header.classList.add("hoverTop");
  header.classList.remove("posTop");
});

header.addEventListener("mouseout", function () {
  header.classList.remove("hoverTop");
  if (window.scrollY === 0) {
    // 스크롤이 0일 때만 posTop 추가
    header.classList.add("posTop");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.remove("posTop");
  } else {
    header.classList.add("posTop"); // 스크롤이 0일 때만 posTop 추가
  }
});

// console.log("현재 스크롤 위치:", window.scrollY);

/*메뉴 구현 디테일 윈도우 스크롤끝*/

/*메뉴 구현 끝*/

/*Lang 버튼 구현*/
let layerBox = document.querySelector(".layerBox");
let lang = document.querySelector(".lang");

lang.addEventListener("click", () => {
  layerBox.classList.toggle("on");
});
/*Lang 버튼 구현 끝*/

/*이미지 슬라이딩 구현*/
let slider = document.querySelector(".container");
let imgBoxs = document.querySelectorAll(".imgBox");
let count = 0;
let stop = "";

// 0진짜이미지 1 2가짜이미지
function showImg(index) {
  slider.style.transform = `translateX(-${(index * 100) / imgBoxs.length}%)`;
  tabs.forEach((item) => item.classList.remove("on"));
  tabs.forEach((item, i) => {
    // **나머지 연산자 %3은 메뉴의 개수
    if (i == index % 2) {
      item.classList.add("on");
    } else {
      item.classList.remove("on");
    }
  });
}

function autoSlide() {
  stop = setInterval(() => {
    count++;
    if (count == imgBoxs.length) {
      //count는 1
      slider.style.transition = "none";
      count = 0;
      slider.style.transform = "translateX(0)";
      setTimeout(() => {
        slider.style.transition = "0.5s";
      }, 50);
    } else {
      showImg(count);
    }
  }, 2000);
}

function stopImg() {
  clearInterval(stop);
}

function moveLeft() {
  stopImg();
  if (count == 0) {
    slider.style.transition = "none";
    count = imgBoxs.length - 1;
    showImg(count);
    setTimeout(() => {
      slider.style.transition = "0.5s";
      count--;
      showImg(count);
    }, 50);
  } else {
    count--;
    showImg(count);
  }
  autoSlide();
}

autoSlide();

/*이미지 슬라이딩 구현 끝*/
let tabs = document.querySelectorAll(".tabs > div");
/* tabs 구현 */
tabs.forEach((item, i) => {
  item.addEventListener("click", function () {
    stopImg();
    count = i;
    showImg(count);
    // *** setTimeout 멈춘것을 다시실행하기 위해 사용
    if (!flag) {
      autoSlide(); // 2초 뒤 슬라이더 재시작
    }
  });
});

let stopBtn = document.querySelector(".stopBtn");
let platBtn = document;

stopBtn.addEventListener("click", function () {
  if (!flag) {
    stopBtn.classList.add("on");
    stopImg();
    flag = true;
  } else {
    stopBtn.classList.remove("on");
    autoSlide();
    flag = false;
  }
});

/* tabs 구현 끝*/

/*보도자료 이미지 슬라이딩 구현*/

let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let new_list_wrap = document.querySelector(".new_list_wrap");
let moveCount = 0;
let ctMoveSize = 490;
prevBtn.classList.add("on");

prevBtn.addEventListener("click", function () {
  if (moveCount > 0) {
    moveCount--;
    if (moveCount < 3) {
      nextBtn.classList.remove("on");
    }
    if (moveCount == 0) {
      prevBtn.classList.add("on");
    }
    new_list_wrap.style.transform = `translateX(-${moveCount * ctMoveSize}px)`; // 음수 유지
    console.log(moveCount);
  }
});

nextBtn.addEventListener("click", function () {
  if (moveCount < 3) {
    moveCount++;
    if (moveCount > 0) {
      prevBtn.classList.remove("on");
    }
    if (moveCount == 3) {
      nextBtn.classList.add("on");
    }
    new_list_wrap.style.transform = `translateX(-${moveCount * ctMoveSize}px)`;
  }
  console.log(moveCount);
});

/*보도자료 이미지 슬라이딩 구현끝*/
