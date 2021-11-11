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

module.exports = router;
