const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista
 * @param {*} req
 * @param {*} res
 */

const getItems = async (_, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_TRACKS");
  }
};

/**
 * Obtener detalle
 * @param {*} req
 * @param {*} res
 */

const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    // const data = await tracksModel.findById(id);
    console.log(id);
    res.send({});
  } catch (error) {
    handleHttpError(res, "ERROR_GET_TRACK");
  }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_TRACK");
  }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findByIdAndUpdate(id, body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_TRACK");
  }
};

/**
 * Borrar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    // const data = await tracksModel.findByIdAndDelete(id);
    // const data = await tracksModel.deleteOne({ _id: id });
    const data = await tracksModel.delete({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_TRACK");
  }
};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem };
