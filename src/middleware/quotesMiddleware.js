const fs = require("fs");
const path = require("path");

const quotesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/quotes.json"))
);

const randomQuote = (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const randomQuote = quotesData[randomIndex];
  res.json(randomQuote);
};

const getQuoteById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const quote = quotesData.find((quote) => quote.id === id);

  if (!quote) {
    return res.status(404).json({ error: "Quote not found" });
  }

  res.json(quote);
};

module.exports = {
  randomQuote,
  getQuoteById,
};
