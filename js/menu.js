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
