const db = require("../../data/db-config");

const getAllClass = () => {
  return db("classes as c")
    .join("users as u", "u.id", "c.instructor_id")
    .select("c.*", "u.username as instructor");
};

//this is to get the registered classes a user signed up for
const getClassByUserId = (id) => {
  return db("class_client as cc")
    .join("users ad u", "classes as c", "u.id", "c.id")
    .select("c.*")
    .where("cc.id", id)
    .first();
};

module.exports = { getAllClass, getClassByUserId };

// return db("classes as c")
//   .join("users as u", "u.id", "c.instructor_id")
//   .select("c.*", "u.username");
