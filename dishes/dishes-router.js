const express = require("express");
const router = express.Router();
const db = require("./dishes-model");

router.get("/", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting dishes", error: err });
    });
});
router.get("/:id", (req, res) => {
  db.getDish(req.params.id)
    .then(dish => {
      if (!dish) {
        res.status(404).json({ message: "dish does not exist" });
      } else {
        res.status(200).json(dish);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error finding dish" });
    });
});
router.post("/", (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "bad request name required" });
  } else {
    db.addDish(req.body)
      .then(dish => {
        res.status(201).json(dish);
      })
      .catch(err => {
        res.status(500).json({ message: "error adding dish" });
      });
  }
});

module.exports = router;
