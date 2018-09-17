const router = require("express")
const articleControllers = require("./../controllers/articleControllers");




router.use("/")
  .get(articleControllers.selectAll)
  .post(articleControllers.create);

// Matches with "/api/books/:id"
router.use("/:id")
  .get(articleControllers.selectById)
  .delete(articleControllers.removeBy);

module.exports = router;

