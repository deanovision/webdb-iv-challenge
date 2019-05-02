const express = require("express");
const router = express.Router();
const db = require("../dishes/dishes-model");
router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting recipes", error: err });
    });
});
router.post("/", (req, res) => {
  if (!req.body.name || !req.body.dish_id || !req.body.instructions) {
    res
      .status(400)
      .json({ message: "bad request name, id and instructions required" });
  } else {
    db.addRecipe(req.body)
      .then(recipe => {
        res.status(201).json(recipe);
      })
      .catch(err => {
        res.status(500).json({ message: "error adding recipe" });
      });
  }
});

module.exports = router;
