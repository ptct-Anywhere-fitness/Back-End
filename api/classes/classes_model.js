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

//this is to get the registered classes a user signed up for
const getRegistrationsByUserId = (id) => {
  return db("classes as c")
    .join("class_clients as cl", "cl.class_id", "c.id")
    .join("users as u", "cl.client_id", "u.id")
    .select(
      "c.name",
      "c.type",
      "c.start_time",
      "c.date",
      "c.duration",
      "c.intensity_level",
      "c.location",
      "c.max_size"
    )
    .where("u.id", `${id}`);
};

const createClass = async (c) => {
  let classData = await db("classes").insert(c);
  return getClassById(classData);
};

const updateClass = async (
  id,
  { name, type, start_time, date, duration, intensity_level, locaion, max_size }
) => {
  await db("classes").where({ id }).insert({
    name,
    type,
    start_time,
    date,
    duration,
    intensity_level,
    locaion,
    max_size,
  });
  return getClassById(id);
};

const removeClass = async (id) => {
  const deleteClass = await getClassId(id);
  await db("classes").where("id", id).delete();
  return deleteClass;
};

module.exports = {
  getAllClass,
  getRegistrationsByUserId,
  getClassById,
  createClass,
  updateClass,
  removeClass,
};
