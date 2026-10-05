const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController.js");

const authentication = require("../middleware/authMiddleware.js");

router.use(authentication);

router.get("/:projectId/tasks", getTasks);
router.post("/:projectId/tasks", createTask);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

module.exports = router;
