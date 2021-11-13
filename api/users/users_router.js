const router = require("express").Router();
const Users = require("./users_model");

router.get("/", (req, res) => {
  Users.getAll()
    .then((insts) => {
      res.status(200).json(insts);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  await Users.getById(id).then((user) => {
    res.status(200).json(user);
  });
});

router.post("/", async (req, res) => {
  const newUser = req.body;
  await Users.create(newUser)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
