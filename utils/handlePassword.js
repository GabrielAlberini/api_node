const bcryptjs = require("bcryptjs");

/**
 * Contraseña sin encriptar -> 1234
 * @param {*} passwordPlain
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};

/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain
 * @param {*} hashPassword
 */

const compare = async (passwordPlain, hashPassword) => {
  const compare = await bcryptjs.compare(passwordPlain, hashPassword);
  return compare;
};

module.exports = { encrypt, compare };
