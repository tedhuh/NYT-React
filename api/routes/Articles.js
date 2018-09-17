const express = require("express");
const router = express.Router();
const articleControllers = require("./../controllers/articleControllers");




router.use("/", articleControllers.selectAll )
router.use("/", articleControllers.removeAll)

// Matches with "/api/books/:id"
router.use("/:id",articleControllers.selectById)
router.use("/:id",articleControllers.removeById)

module.exports = router;

