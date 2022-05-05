const menu = [
  {
    title: " pizza1",
    category: "veg",
    price: 200,
    img: "./img/img1.jpg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis, repudiandae
        consectetur vero eaque a ab est repellendus laboriosam quisquam`,
  },
  {
    title: " pizza2",
    category: "nonveg",
    price: 400,
    img: "./img/img2.jpg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis, repudiandae
        consectetur vero eaque a ab est repellendus laboriosam quisquam`,
  },
  {
    title: " pizza3",
    category: "nonveg",
    price: 500,
    img: "./img/img3.jpg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis, repudiandae
        consectetur vero eaque a ab est repellendus laboriosam quisquam`,
  },
  {
    title: " pizza4",
    category: "chesseburst",
    price: 200,
    img: "./img/img1.jpg",
    desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis, repudiandae
        consectetur vero eaque a ab est repellendus laboriosam quisquam`,
  },
];

const menucenter = document.querySelector(".menu-container");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
});

//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(   e.currentTarget.dataset);
    const category = e.currentTarget.dataset.id;
    const menuCat = menu.filter(function (mitems) {
      if (mitems.category === category) {
        return mitems;
      }
    });
    if (category === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(menuCat);
    }
  });
});

//display menu items
function displayMenuItem(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return ` <div class="item-box">
        <div class="img-box">
            <img src="${item.img}" alt="img1" class="item-img" width="200px">
        </div>
        <div class="item-info">
            <div class="item-title">
                <div class="item-name">${item.title}</div>
                <div class="item-price">${item.price}</div>
            </div>
            <div class="item-para">
                <p>${item.desc}</p>
            </div>
        </div>
    </div>`;
  });
  displayMenu = displayMenu.join(" ");
  menucenter.innerHTML = displayMenu;
}
