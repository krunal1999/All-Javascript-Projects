//global variable
let currentItem = 0;
const tempData = [
  {
    name: "Krunal Dhavle",
    position: "web Developer",
    para: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eligendi iusto? Suscipit quisquam ratione molestias, enim nemo facilis modi odit nihil dolor iste deleniti facere,
    corporis nulla ipsa itaque eaque`,
    img: "/Img/img2.jpg",
  },
  {
    name: "lara Navalkar",
    position: "Android Developer",
    para: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eligendi iusto? Suscipit quisquam ratione molestias, enim nemo facilis modi odit nihil dolor iste deleniti facere,
    corporis nulla ipsa itaque eaque`,
    img: "/Img/img1.jpg",
  },
  {
    name: "Varsha Dhavle",
    position: "Blockchain Developer",
    para: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eligendi iusto? Suscipit quisquam ratione molestias, enim nemo facilis modi odit nihil dolor iste deleniti facere,
    corporis nulla ipsa itaque eaque`,
    img: "/Img/img5.jpg",
  },
];
// all query selectors
let img = document.querySelector(".img1");
let name = document.querySelector("#name");
let position = document.querySelector("#position");
let para = document.querySelector("#para");

const nextBtn = document.querySelector(".nextbtn");
const prevBtn = document.querySelector(".prevbtn");

window.addEventListener("DOMContentLoaded", function () {
  showData();
});

function showData() {
  let item = tempData[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  position.textContent = item.position;
  para.textContent = item.para;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > tempData.length - 1) {
    currentItem = 0;
  }
  showData();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = tempData.length - 1;
  }
  showData();
});
