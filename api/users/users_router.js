const router = require("express").Router();
const Users = require("./users_model");

///////////// This is all users ///////////////
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

///////////// This is classes a user signed up for  ///////////////

//this is to get the registered classes a user signed up for
router.get("/:id/classes", (req, res) => {
  const id = req.params.id;
  Users.getRegistrationsByUserId(id).then((c) => {
    console.log(c);
    res.status(200).json(c);
  });
});

router.post("/:id/classes", async (req, res) => {
  const client_id = req.params.id;
  const class_id = req.body.class_id;
  if (!client_id || !class_id) {
    res.status(400).json({ message: "Missing Information" });
  }
  req.body.client_id = client_id;
  await Users.registerForClass(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id/classes", async (req, res) => {
  const client_id = req.params.id;
  const class_id = req.body.class_id;
  if (!client_id || !class_id) {
    res.status(400).json({ message: "Missing Information" });
  }
  req.body.client_id = client_id;
  const data = await Users.cancelRegistration(req.body);
  res.json(data);
});

module.exports = router;
