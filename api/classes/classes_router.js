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

router.get("/:id", async (req, res) => {
  const pramsid = req.params.id;
  console.log(pramsid);
  await Classes.getClassByUserId(pramsid);
});
// router.get("/", (req, res) => {
//   res.send("hello! Im alive!");
// });

module.exports = router;
