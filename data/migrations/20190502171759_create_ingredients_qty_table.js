exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients_qty", tbl => {
    tbl.increments();
    tbl.float("quantity").notNullable();
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients_qty");
};
