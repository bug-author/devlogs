const quotes = [
  "Be the change you wish to see in the world.",
  "You must be the change you wish to see in the world.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}
