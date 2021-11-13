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

const getRegistrationsByUserId = (userId) => {
  return db("classes as c")
    .join("class_clients as cl", "cl.class_id", "c.id")
    .join("users as u", "cl.client_id", "u.id")
    .select(
      "c.id",
      "c.name",
      "c.type",
      "c.start_time",
      "c.date",
      "c.duration",
      "c.intensity_level",
      "c.location",
      "c.max_size"
    )
    .where("u.id", `${userId}`);
};

const registerForClass = async (registration) => {
  const { class_id, client_id } = registration;
  console.log(class_id, client_id);
  await db("class_clients").insert(registration);
  return await getRegistrationsByUserId(client_id);
};

const cancelRegistration = async (registration) => {
  const { class_id, client_id } = registration;
  console.log(class_id, client_id);
  await db("class_clients").where({ class_id, client_id }).del();
  return await getRegistrationsByUserId(client_id);
};

module.exports = {
  getAll,
  getById,
  create,
  getRegistrationsByUserId,
  registerForClass,
  cancelRegistration,
};
