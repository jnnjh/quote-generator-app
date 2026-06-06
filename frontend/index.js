const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("new-quote-btn");
const form = document.getElementById("quote-form");
const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");

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

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const newQuote = {
        quote: quoteInput.value,
        author: authorInput.value,
    };

    try {
        const response = await fetch(
        "http://u6nsumw92d5pudnhhgobzo3v.178.105.39.91.sslip.io/",
        {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(newQuote),
        });

        const savedQuote = await response.json();
        quoteElement.textContent = `"${savedQuote.quote}"`;
        authorElement.textContent = `— ${savedQuote.author}`;
        form.reset();
    } catch (error) {
        console.error(error);
    }
});

fetchQuote();