const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next), // se retorna la función, atención
];

const validatorCreateItem = [
  check("url").exists().notEmpty(),
  check("filename").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next), // se retorna la función, atención
];

module.exports = { validatorCreateItem, validatorGetItem };
