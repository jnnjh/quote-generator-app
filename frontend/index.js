const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");

async function fetchQuote() {
  try {
    const response = await fetch("http://u6nsumw92d5pudnhhgobzo3v.178.105.39.91.sslip.io/");
    const quote = await response.json();

    quoteElement.textContent = `"${quote.quote}"`;
    authorElement.textContent = `— ${quote.author}`;
  } catch (error) {
    quoteElement.textContent = "Failed to load quote.";
    authorElement.textContent = "";
    console.error(error);
  }
}

button.addEventListener("click", fetchQuote);

fetchQuote();