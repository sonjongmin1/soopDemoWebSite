let mbUnderArrow = document.querySelectorAll(".mbUnderArrow");
let mbDepth2 = document.querySelectorAll(".mbDepth2");
let mbDepthFlag = false;
mbUnderArrow.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    mbDepth2.forEach(function () {
      mbDepth2[index].classList.toggle("on");
    });
  });
});

mbUnderArrow.forEach(function (k) {
  k.addEventListener("click", function () {
    k.classList.toggle("on");
  });
});
