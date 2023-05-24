const { storageModel } = require("../models");

const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Get items
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};

/**
 * Create register
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
  const { file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`, // ubicación del archivo en local
  };
  const data = await storageModel.create(fileData);
  res.send(data);
};

module.exports = { createItem, getItems };
