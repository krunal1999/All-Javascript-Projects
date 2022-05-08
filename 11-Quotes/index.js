let apiQuote = [];
let localquotes;

const quoteContainer = document.getElementById("quote-container");
const loader1 = document.getElementById("loader");

const quoteText = document.getElementById("quote-content");
const authorText = document.querySelector("#author");
const newQuoteBtn = document.querySelector(".new-quote");
const twitterBtn = document.querySelector(".twitter-btn");
//creater loader function to hide quotes
function loader() {
  quoteContainer.hidden = true;
  loader1.hidden = false;
}

function complete() {
  quoteContainer.hidden = false;
  loader1.hidden = true;
}
// get random quotes from api
function newRandomQuotes() {
  loader();
  let quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];

  //to check if author fill null
  if (!quote.author) {
    authorText.textContent = "Unknowns";
  } else {
    authorText.textContent = quote.author;
  }

  // to check whether size of quotes is large
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote-text");
  } else {
    quoteText.classList.remove("long-quote-text");
  }
  quoteText.textContent = quote.text;
  complete()
}

//get local quotes from data.js
function getLocalQutoes() {
  localquotes = localQutoes[Math.floor(Math.random() * localQutoes.length)];
  console.log("from local", localquotes);
}
//post on twitter
function postTwitter() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} `;
  window.open(twitterUrl, "_blank");
}
//get quoted from api
async function getQutoes() {
        loader()
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    complete()
  } catch (error) {}
}

newQuoteBtn.addEventListener("click", newRandomQuotes);
twitterBtn.addEventListener("click", postTwitter);

// on load
getQutoes();
// getLocalQutoes()
