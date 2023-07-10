const handleHttpError = (res, message = "SERVER_ERROR", code = 403) => {
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
