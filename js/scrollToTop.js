/* 페이지 상단으로 이동 버튼 */
let arrowBtn = document.querySelector(".arrowBtn");
let homeHeight = document.documentElement.scrollHeight / 2;

document.addEventListener("scroll", () => {
  if (homeHeight / 2 < window.scrollY) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});

arrowBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* 페이지 상단으로 이동 버튼 끝*/
