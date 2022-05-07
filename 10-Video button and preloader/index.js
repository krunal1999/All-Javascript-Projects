const btns = document.querySelectorAll(".btn");
const video = document.querySelector(".videobox");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let x = e.currentTarget.classList;
    if (x.contains("play")) {
      video.play();
    } else {
      video.pause();
    }
  });
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
