exports.up = function (knex) {
  return knex.schema.createTable("instructors", (tbl) => {
    tbl.increments("instructor_id");
    tbl.string("name").unique().nonNullable();
    tbl.string("type").nonNullable();
    tbl.string("start_time").nonNullable();
    tbl.string("duration").nonNullable();
    tbl.string("intensity_level").nonNullable();
    tbl.string("location").nonNullable();
    tbl.integer("current_registered").nonNullable();
    tbl.integer("max_size").nonNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("instructors");
};

exports.up = function (knex) {
  return knex.schema.createTable("instructors", (tbl) => {
    tbl.increments("instructor_id");
    tbl.string("username").unique().notNullable();
    tbl.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("instructors");
};
