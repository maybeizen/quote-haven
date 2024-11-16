const logger = (req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.originalUrl} | ${req.ip}`
  );

  next();
};

module.exports = logger;
