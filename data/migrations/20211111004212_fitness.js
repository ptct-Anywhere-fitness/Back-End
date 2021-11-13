exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();
      tbl.string("role_name", 128).notNullable().unique();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 256).notNullable();
      tbl
        .integer("role")
        .unsigned()
        .notNullable()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("classes", (tbl) => {
      tbl.increments();
      tbl.string("name").unique().notNullable();
      tbl.string("type").notNullable();
      tbl.string("start_time").notNullable();
      tbl.string("date").notNullable();
      tbl.string("duration").notNullable();
      tbl.string("intensity_level");
      tbl.string("location");
      tbl.integer("max_size").notNullable();
      tbl
        .integer("instructor_id")
        .unsigned()
        .notNullable()
        .references("users.id");
    })
    .createTable("class_clients", (tbl) => {
      tbl.integer("class_id").unsigned().references("classes.id");
      tbl.integer("client_id").unsigned().references("users.id");
      tbl.primary(["class_id", "client_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("class_clients")
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
