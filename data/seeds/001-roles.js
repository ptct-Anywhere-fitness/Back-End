exports.seed = function (knex) {
  return knex("roles")
    .truncate()
    .then(function () {
      return knex("roles").insert([{ name: "instructor" }, { name: "client" }]);
    });
};
