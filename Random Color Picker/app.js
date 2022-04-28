const tempColor = ['green', 'red', 'blue' , 'wheat',"SlateBlue" , "MediumSeaGreen" , "Violet" , "pink" , "Orange" ]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click' , function( ) {
    //get random number 
    const randomNumber = getRandomnumber()
    document.body.style.backgroundColor = tempColor[randomNumber]
    color.textContent = tempColor[randomNumber]
})

function getRandomnumber( ) {
    return Math.floor(Math.random( ) * tempColor.length);
}