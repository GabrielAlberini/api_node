const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const {
  middlewareFilenameStorage,
} = require("../middleware/middlewareFilenameStorage");

const PUBLIC_URL = process.env.PUBLIC_URL;

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
    handleHttpError(res, "ERROR_GET_STORAGE");
  }
};

/**
 * Create register
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => {
  try {
    const fileData = middlewareFilenameStorage(req, res);
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
    const data = await storageModel.delete({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM_STORAGE");
  }
};

module.exports = { createItem, getItems, getItem, deleteItem };
