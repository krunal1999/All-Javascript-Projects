//global variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const navbar = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textbox = document.getElementById("text-box");

//image swap function
function swapImage(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
// creating darkmode
function darkmode() {
  navbar.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textbox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  swapImage("dark");
}
// creating lightmode
function lightmode() {
  navbar.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textbox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  swapImage("light");
}

//switch theme dyanmic
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkmode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");

    lightmode();
  }
}

// event listner
toggleSwitch.addEventListener("change", switchTheme);


// check the theme in localstorage
const theme = localStorage.getItem('theme')
if(theme){
    document.documentElement.setAttribute("data-theme", theme);

    if(theme === 'dark'){
            toggleSwitch.checked = true
            darkmode();
    }

}