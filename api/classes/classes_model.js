const db = require("../../data/db-config");

const getAllClass = () => {
  return db("classes as c")
    .join("users as u", "u.id", "c.instructor_id")
    .select("c.*", "u.username as instructor");
};

//this is to get one class
const getClassById = (id) => {
  return db("classes").where("id", id).first();
};

const createClass = async (c) => {
  let classData = await db("classes").insert(c);
  return getClassById(classData);
};

const updateClass = async (id, changes) => {
  await db("classes").where("id", id).update(changes);
  return getClassById(id);
};

const removeClass = async (id) => {
  const deleteClass = await getClassId(id);
  await db("classes").where("id", id).delete();
  return deleteClass;
};

module.exports = {
  getAllClass,

  getClassById,
  createClass,
  updateClass,
  removeClass,
};
