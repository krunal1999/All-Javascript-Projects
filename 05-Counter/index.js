let counter = 0;

//target buttons
let value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// add evenetListener
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let btnValue = e.currentTarget.classList;

    if (btnValue.contains("decrease")) {
      counter--;
      value.textContent = counter;
    } else if (btnValue.contains("increase")) {
      counter++;
      value.textContent = counter;
    } else {
      counter = 0;
      value.textContent = counter;
    }
    if(counter > 0 ){
        value.style.color = "lightgreen"
    }
    if(counter < 0 ){
        value.style.color = "red"
    }
    if(counter === 0 ){
        value.style.color = "lightgrey"
    }
  });
});