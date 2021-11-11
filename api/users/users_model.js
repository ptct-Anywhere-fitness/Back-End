const db = require("../../data/db-config");

const getAll = () => {
  return db("users");
};

const getById = () => {};

module.exports = { getAll };
