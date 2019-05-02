exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Tex Mex Tacos",
          dish_id: 1,
          instructions: "sample text"
        },
        {
          name: "Super PBnJ",
          dish_id: 2,
          instructions: "sample text"
        },
        {
          name: "Worlds Best Lasagna",
          dish_id: 3,
          instructions: "sample text"
        }
      ]);
    });
};
