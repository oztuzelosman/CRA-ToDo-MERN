const express = require("express");
const router = express();
const {
  getAll,
  createNew,
  getTodoWid,
  updateTodoWid,
  deleteTodoWid,
} = require("../controllers/todo_controller");

router.get("/", getAll);
router.post("/", createNew);
router.get("/:id", getTodoWid);
router.patch("/:id", updateTodoWid);
router.delete("/:id", deleteTodoWid);

module.exports = router;
