exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients_qty")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients_qty").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 1 },
        { recipe_id: 2, ingredient_id: 2, quantity: 3 },
        { recipe_id: 3, ingredient_id: 3, quantity: 4 }
      ]);
    });
};
