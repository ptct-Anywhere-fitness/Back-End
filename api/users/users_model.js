const db = require("../../data/db-config");

const getAll = () => {
  return db("users");
};

const getById = (id) => {
  return db("users").where("id", id).first();
};

const create = async (user) => {
  const [id] = await db("users").insert(user);
  return getById(id);
};

module.exports = { getAll, getById, create };
