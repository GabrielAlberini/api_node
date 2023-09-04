const express = require("express");
const router = express.Router();
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { matchedData } = require("express-validator");

// http://localhost:3001/api/auth/login
// http://localhost:3001/api/auth/register

router.post("/login", (req, res) => {});

router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = { ...req, password };
  const data = await usersModel.create(body);
  res.send({ data });
});

module.exports = router;
