// method 1
//const btns = document.querySelectorAll(".btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (item) {
//     const question = item.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-txt");
//   });
// });

//method 2

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (items) {
      if (items !== question) {
        items.classList.remove("show-txt");
      }
    });
    question.classList.toggle("show-txt");
  });
});