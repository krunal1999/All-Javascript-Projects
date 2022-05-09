//Global Variables
let photosArr = [];
let ready = false;
let imagesLoaded = 0;
let totalImages;
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

//unsplash API
const count = 30;
const apiKey = ""; //API_KEY_DONT_SHARE

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count} `;

// display photos
// function displayPhotos() {
//   photosArr.forEach((photo) => {
//     //create <a> to link to unsplash
//     const item = document.createElement("a");
//     item.setAttribute("href", photo.links.html);
//     item.setAttribute("target", "_blank");

//     //create img for photo
//     const img = document.createElement("img");
//     img.setAttribute("src", photo.urls.regular);
//     img.setAttribute("alt", photo.alt_description);

//     //appending elements
//     item.appendChild(img);
//     imageContainer.appendChild(item);
//   });
// }

// check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    console.log("ready", ready);
  }
}

//display photos by method 2 by using helper method
function setAttributes(element, attribute) {
  for (let key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}

function displayPhotos() {
  loader.hidden = true;
  imagesLoaded = 0;
  totalImages = photosArr.length;
  console.log(totalImages);

  photosArr.forEach((photo) => {
    //create <a> to link to unsplash
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    //create img for photo
    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
    });

    img.addEventListener("load", imageLoaded);

    //appending elements
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArr = await response.json();
    displayPhotos();
  } catch (error) {}
}

//check to see if scrolling near bottom of page , load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

//on load
getPhotos();
