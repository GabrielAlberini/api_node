const { usersModel } = require("../models");

/**
 * Obtener lista
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};

/**
 * Obtener detalle
 * @param {*} req
 * @param {*} res
 */

const getItem = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await usersModel.findOne({ _id: userId }).exec();
    console.log(user);
    res.send({ user });
  } catch (err) {
    console.log(err);
    return;
  }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await usersModel.create(body);
  res.send({ data });
};

module.exports = { getItems, createItem, getItem };
