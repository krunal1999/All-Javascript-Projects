const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const model = document.querySelector(".modeloverlay")
const cont = document.querySelector(".container")
btn1.addEventListener("click" , function(e){
    model.classList.add("openmodel")
    cont.classList.add("modeloverlay")

    
})
btn2.addEventListener("click" , function(e){
    model.classList.remove("openmodel")
    cont.classList.remove("modeloverlay")
})