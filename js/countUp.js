let rang = document.getElementById("rang");
let rang2 = document.getElementById("rang2");
let stopCount = "";
let stopCount2 = "";
countUp = 0;
countUp2 = 0;

function isMobile() {
  return window.innerWidth <= 768; // 768px 이하 모바일
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 258) {
    if (isMobile()) {
      return;
    }
    stopCount = setInterval(function () {
      if (countUp >= 900) {
        clearInterval(stopCount);
      } else {
        countUp += 5;
        rang.innerHTML = countUp.toLocaleString();
      }
    }, 1);
  }
});

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 583) {
//     if (isMobile()) {
//       return;
//     }
//     stopCount2 = setInterval(function () {
//       if (countUp2 >= 25.98) {
//         clearInterval(stopCount2);
//       } else {
//         countUp2 += 0.03;
//         rang2.innerHTML = `${countUp2.toFixed(2)}%`;
//       }
//     }, 1);
//   }
// });

/---------아래는 모바일----------------/;

window.addEventListener("scroll", function () {
  if (window.scrollY >= 150) {
    if (!isMobile()) {
      return;
    }
    stopCount = setInterval(function () {
      if (countUp >= 900) {
        clearInterval(stopCount);
      } else {
        countUp += 5;
        rang.innerHTML = countUp.toLocaleString();
      }
    }, 1);
  }
});

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 132) {
//     if (!isMobile()) {
//       return;
//     }
//     stopCount2 = setInterval(function () {
//       if (countUp2 >= 25.98) {
//         clearInterval(stopCount2);
//       } else {
//         countUp2 += 0.03;
//         rang2.innerHTML = `${countUp2.toFixed(2)}%`;
//       }
//     }, 1);
//   }
// });
