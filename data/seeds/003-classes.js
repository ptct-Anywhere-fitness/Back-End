exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          id: 1,
          name: "Morning Yoga",
          type: "Yoga",
          start_time: "9am",
          date: "12/23",
          duration: "1h",
          intensity_level: "hight",
          location: "New York",
          Max_size: "10",
          instructor_id: 1,
        },
      ]);
    });
};
