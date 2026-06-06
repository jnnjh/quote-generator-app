import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const quotes = [
    {
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
    },
    {
        author: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
        author: "Maya Angelou",
        quote: "If you don't like something, change it.",
    },
    {
        author: "Steve Jobs",
        quote: "Stay hungry, stay foolish.",
    },
    {
        author: "Nelson Mandela",
        quote: "It always seems impossible until it's done.",
    },
    {
        author: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop.",
    },
    {
        author: "Mark Twain",
        quote: "The secret of getting ahead is getting started.",
    },
    {
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        author: "Eleanor Roosevelt",
        quote: "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
        author: "Lao Tzu",
        quote: "A journey of a thousand miles begins with a single step.",
    },
    {
        author: "Henry Ford",
        quote: "Whether you think you can or you think you can't, you're right.",
    },
    {
        author: "Theodore Roosevelt",
        quote: "Believe you can and you're halfway there.",
    },
    {
        author: "Ralph Waldo Emerson",
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    },
];

app.get("/", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.post("/", (req, res) => {
    const { author, quote } = req.body;

    const newQuote = {
        author,
        quote,
    };

    quotes.push(newQuote);

    res.status(201).json(newQuote);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});