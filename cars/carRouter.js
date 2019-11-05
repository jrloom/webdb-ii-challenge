const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("cars")
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json({ error: "500 error" }));
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(car => res.status(201).json({ message: "Car added" }))
    .catch(err => res.status(500).json({ error: "500 error" }));
});

module.exports = router;
