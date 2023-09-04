const fs = require("node:fs");

const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const PUBLIC_URL = process.env.PUBLIC_URL;
const FILE_PATH = `${__dirname}/../storage`;

/**
 * Get items
 * @param {*} req
 * @param {*} res
 */

const getItems = async (_, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_STORAGE");
  }
};

/**
 * Get register
 * @param {*} req
 * @param {*} res
 */

const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    console.log(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_STORAGE_ITEM");
  }
};

/**
 * Create register
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`, // ubicación del archivo en local
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM_STORAGE");
  }
};

/**
 * Delete register
 * @param {*} req
 * @param {*} res
 */

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);

    if (!data) {
      const error = new Error("No such file or directory");
      error.statusCode = 404;
      throw error;
    }
    const { filename } = data;
    const filePath = `${FILE_PATH}/${filename}`;

    fs.unlinkSync(filePath);

    await storageModel.deleteOne({ _id: id });

    res.send({ filePath, deleted: true });
  } catch (error) {
    handleHttpError(res, error.message, error.statusCode);
  }
};

module.exports = { createItem, getItems, getItem, deleteItem };
