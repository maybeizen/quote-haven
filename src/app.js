const express = require("express");
const router = require("./routes/quotesRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);
app.use("/quote", router);

module.exports = app;
