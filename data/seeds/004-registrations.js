exports.seed = function (knex) {
  return knex("class_clients")
    .truncate()
    .then(function () {
      return knex("class_clients").insert([
        { class_id: 1, client_id: 2 },
        { class_id: 1, client_id: 3 },
      ]);
    });
};
