const db = require("../data/dbConfig");

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  getRecipe,
  addRecipe
};

function getDishes() {
  return db("dishes");
}
function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(([id]) => {
      return getDish(id);
    });
}
function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}
function getRecipes() {
  return db("recipes");
}
function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(([id]) => {
      return getRecipe(id);
    });
}
function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}
