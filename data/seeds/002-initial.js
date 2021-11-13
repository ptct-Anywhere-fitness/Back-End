exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        { username: "Super man", password: "1234hired", role: 1 },
        { username: "Kick man", password: "1234hired", role: 2 },
        { username: "Punch man", password: "1234hired", role: 2 },
      ]);
    });
};
