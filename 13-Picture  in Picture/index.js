const videoElement = document.getElementById("video");
// const videoElement1 = document.getElementById("video1");

const button = document.getElementById("button");
const button1 = document.getElementById("button1");

const h1tag = document.getElementById("h1");
async function selectMediaQuery() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //     const mediaStream1 = await navigator.mediaDevices.getDisplayMedia(); // to select from browser which file to share
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    //     videoElement1.srcObject = mediaStream1;
    //     videoElement1.onloadedmetadata = () => {
    //             videoElement1.play();
    //     }
  } catch (error) {}
}

async function show() {
  h1tag.hidden = true;
  await videoElement.requestPictureInPicture();
  button.style.color = "greenyellow";
  button.hidden = true;
  button1.hidden = false;
}
button.addEventListener("click", show);

button1.addEventListener("click", () => {
 delete videoElement
  button1.hidden = true;
  button.hidden = false;
});

//on load
selectMediaQuery();
