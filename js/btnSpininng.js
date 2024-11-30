let familySite = document.querySelector(".familySite");
let flag = false;

familySite.addEventListener("click", function () {
  if (!flag) {
    familySite.classList.add("on");
    flag = true;
  } else {
    familySite.classList.remove("on");
    flag = false;
  }
});
