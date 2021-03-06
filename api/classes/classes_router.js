const router = require("express").Router();
const Classes = require("./classes_model");

router.get("/", (req, res) => {
  Classes.getAllClass()
    .then((classes) => {
      res.status(200).json(classes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/class/:id", (req, res) => {
  const id = req.params.id;
  Classes.getClassById(id).then((c) => {
    console.log(c);
    res.status(200).json(c);
  });
});

router.post("/", (req, res) => {
  const newClass = req.body;
  Classes.createClass(newClass)
    .then((c) => {
      res.status(201).json(c);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  console.log("params and body: ", req.params.id, req.body);
  Classes.updateClass(req.params.id, req.body)
    .then((id) => {
      Classes.getClassById(id).then((c) => {
        res.status(201).json({ message: "class updated!", c });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  const data = await Classes.removeClass(req.params.id);
  res.json(data);
});

// router.get("/", (req, res) => {
//   res.send("hello! Im alive!");
// });

module.exports = router;
