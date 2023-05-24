const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");

const PATH_ROUTES = __dirname; //ruta absoluta donde se encuentra este doc
console.log(PATH_ROUTES);

// const removeExtension = (fileName) => {
//   return fileName.split(".").shift();
// };

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = path.parse(file).name; // usa el módulo de node PATH, testear
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
