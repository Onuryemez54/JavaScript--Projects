const bodyElement = document.querySelector("body");
const text = document.querySelector("#text");
const author = document.querySelector("#author");
const button = document.querySelector("button");
const newQuote = document.querySelector("#new-quote");
const userIcon = document.querySelector("#user");

const allQuotes = [
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    quote:
      "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    quote:
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
];

let timer = setInterval(changeColorAndText, 5000);

button.addEventListener("click", changeColorAndText);

function changeColorAndText() {
  clearInterval(timer);

  const randomNumber = Math.floor(Math.random() * allQuotes.length);

  bodyElement.style.backgroundColor = `var(--bg-color${randomNumber})`;
  bodyElement.style.color = `var(--bg-color${randomNumber})`;
  newQuote.style.backgroundColor = `var(--bg-color${randomNumber})`;
  userIcon.style.color = `var(--bg-color${randomNumber})`;

  text.textContent = allQuotes[randomNumber].quote;
  author.textContent = allQuotes[randomNumber].author;

  timer = setInterval(changeColorAndText, 5000);
}
