const express = require("express");
const router = express.Router();
const quotesMiddleware = require("../middleware/quotesMiddleware");

router.get("/", quotesMiddleware.randomQuote);
router.get("/:id", quotesMiddleware.getQuoteById);

module.exports = router;
